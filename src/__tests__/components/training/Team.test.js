import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import Team from "../../../components/training/Team";

let testRenderer;

beforeAll(() => {
  testRenderer = TestRenderer.create(<Router><Team match={{params: {teamId: 2}}} /></Router>);
});

test('renders correctly', () => {
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
});
