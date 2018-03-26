# simple-react-app

[![forthebadge](https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg)](https://forthebadge.com)

But you still get it.

Simple base app with react, react-router v4, hot-reload &amp; sass.

`npm i -g simple-react-app` to install the package.

`simple-react-app folderName` to start the boilerplate into `folderName` folder.

Or if you're using `npm@5.2.0` or above, you can simply run `npx simple-react-app folderName`, without the need to install the package globally.

## What is this
This is a base project that you can use to jumpstart your react apps, it works similarly to create-react-app, just install the package globally and use it to create as many projects as you want (check How to install for detailed instructions).
It includes the last react spec as of today 01/03/2018, and uses react-router v4 to handle routes.
Style is handled by sass/scss, Bundle is generated with webpack 4.
NB: this is just front end, you can use whatever backend language you are most comfortable with.

## How to install
You can use both npm or yarn, the version I used to create this project are:

```
$ node -v ; npm -v ; yarn -v
v8.8.1
5.4.2
1.2.1
```
If you just freshly installed yarn/npm you are good to go, else you might need to upgrade, for npm I use `n`

```
npm install -g n
```
to install it and after that select at least the stable version (what I used).

```
n stable
```

and now you have the latest stable version of node&npm.


`npm i -g simple-react-app` to install this package globally, from there you will be able to jumpstart as many boilerplates as you wish.


`simple-react-app folderName` to create a react boilerplate on the `folderName` folder. By default all dependencies are already installed, just `cd folderName` and start hacking.


`yarn start`/`npm start` to start dev server with hot reload, it's live on `localhost:3000`.


`yarn run build`/`npm run build` to build prod bundle, it includes both treeshaking and uglify to optimize the code as much as possible.


`yarn test`/`npm test` run the tests with Jest and Enzyme, by default the test included only check for the correct render of base components & routes, all are passing.


## Project structure

The boilerplate structure and files are the same as this repo minus the *bin* folder, everything else is exactly the same.

```
*root*
|
├── */src/*
│   ├── */assets/* where images and stuff are stored
│   ├── */containers/* react-router jsx pages
│   ├── *App.jsx* main layout
│   ├── *Routes.jsx* front-end routes
│   ├── *index.html* entry point
│   ├── *index.jsx* javascript entry point
│   ├── *style.scss* styling
│   └── */tests/* contains test environment (Jest + Enzyme)
│       ├── */__mock__/* contains setup to provide a valid path for imports
│       ├── */_tests__/* the actual tests
│       └── *setup.js* setup for enzyme for react 16
├── *package.json* the whole package.json with every dependency and script, nothing is kept hidden
├── *.eslintrc* eslint config
├── *.babelrc* babel config (polyfills)
├── *webpack.config.js* webpack config, it has a dev and prod environment
└── *README.md* this file
```


## Tests

The testing environment is written in Jest and Enzyme.
The included tests are very basic and only check the proper render of base components + routes, there are no snapshot tests, I did not feel they were needed being the components really basic, at the first change they would need to be updated, imho setting the wrong approach of _"hey tests are broken, let's regenerate snapshots again"_.
While still basic, the default tests are easy to manage and expand, providing a smoother curve into testing with JavaScript and React.


## Eslint

This project uses AirBnB Javascript specs so you can write error-free react and javasctipt code, if you use Visual Studio Code, you can install eslint from the extension tab to activate this function, other editors just google _name of the editor + eslint_ you will find how to enable it for your editor.

## How to contribute

I wrote a [small guide](https://medium.com/@francesco.agnoletto/how-to-not-f-up-your-local-files-with-git-part-1-e0756c88fd3c) on how to contribute and the common etiquette to follow.

