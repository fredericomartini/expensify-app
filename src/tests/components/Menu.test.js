import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Menu from '../../components/Menu';

test('should RENDER MENU CORRECTLY', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Menu />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
