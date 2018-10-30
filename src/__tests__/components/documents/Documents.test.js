import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import Documents from "../../../components/documents/Documents";

let testRenderer;

beforeAll(() => {
  testRenderer = TestRenderer.create(
    <Router>
      <Documents
        match={{}}
      />
    </Router>
  );
});

test('renders correctly', () => {
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
});
