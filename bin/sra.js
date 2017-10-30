#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const packageJson = require('../package.json');

const scripts =
  `"start": "NODE_ENV=development webpack-dev-server",
  "build": "NODE_ENV=production webpack -p"`;

const gitignoreData =
`# Logs
logs
*.log
npm-debug.log*

# Dependency directories
node_modules

# Optional npm cache directory
.npm

# Prod Bundle
build`;

const getDeps = deps => Object.entries(deps).map(dep =>
  `${dep[0]}@${dep[1]}`)
    .toString()
    .replace(/,/g, ' ')
    .replace(/^/g, '');

console.log('Initializing project..');
exec(`mkdir ${process.argv[2]} ; cd ${process.argv[2]} ; npm init -f`, (initErr, initStdout, initStderr) => {
  if (initErr) {
    console.error(`Everything was fine, then it wasn't:
    ${initErr}`);
    return;
  }
  const packageJSON = `${process.argv[2]}/package.json`;
  const gitIgnore = `${process.argv[2]}/.gitignore`;
  fs.readFile(packageJSON, (err, file) => {
    if (err) throw err;
    const data = file.toString().replace('"test": "echo \\"Error: no test specified\\" && exit 1"', scripts);
    fs.writeFile(packageJSON, data, err2 => err2 || true);
    fs.writeFile(gitIgnore, gitignoreData, err3 => err3 || true);
  });
  // console.log(`stdout: ${stdout}`);
  // console.log(`stderr: ${stderr}`);
  console.log('npm init -- done\n');

  console.log('Installing deps -- it might take a few minutes..');
  const devDeps = getDeps(packageJson.devDependencies);
  const deps = getDeps(packageJson.dependencies);
  exec(`cd ${process.argv[2]} ; npm i -D ${devDeps} ; npm i -S ${deps}`,
  (npmErr, npmStdout, npmStderr) => {
    if (npmErr) {
      console.error(`it's always npm, ain't it?
      ${npmErr}`);
      return;
    }
    console.log(npmStdout);
    console.log('Dependencies installed');

    console.log('Copying additional files..');
    exec(`cd ${process.argv[2]} ; 
    cp -r ${path.join(__dirname, '../src')} . ; 
    cp ${path.join(__dirname, '../')}{README.md,webpack.config.js,.eslintrc,.babelrc} .`, (cpErr, cpStdout, cpStderr) => {
      if (cpErr) {
        console.error(`Apparently we can't copy a bunch of files:
        ${cpErr}`);
        return;
      }
      console.log(cpStdout);
      console.log(cpStderr);
      console.log(`All done!\nYour project is now started into ${process.argv[2]} folder, refer to the README for the project structure.\nHappy Coding!`);
    });
  });
});
