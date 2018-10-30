import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import PersonList from "../../../components/training/PersonList";

let testRenderer;
let testInstance;

beforeAll(() => {
  testRenderer = TestRenderer.create(
    <Router>
      <PersonList scenario={{team: 0}}/>
    </Router>);
  testInstance = testRenderer.root;
});

test('renders correctly', () => {
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
});
