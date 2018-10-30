import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import Teams from "../../../components/table-tops/Teams";

let testRenderer;
let testInstance;

beforeAll(() => {
  testRenderer = TestRenderer.create(<Router><Teams /></Router>);
  testInstance = testRenderer.root;
});

test('renders correctly', () => {
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
});
