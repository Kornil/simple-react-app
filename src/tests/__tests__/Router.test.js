import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Router from './../../Router';
import { Home, About } from './../../containers';

test('default path should redirect to Home component', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <Router />
    </MemoryRouter>,
  );
  expect(wrapper.find(Home)).toHaveLength(1);
});

test('/about path should redirect to About component', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/about']} initialIndex={0}>
      <Router />
    </MemoryRouter>,
  );
  expect(wrapper.find(About)).toHaveLength(1);
});
