import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import Team from "../../../components/table-tops/Team";

let testRenderer;
let testInstance;

beforeAll(() => {
  testRenderer = TestRenderer.create(
    <Router>
      <Team
        match={{
          params: {
            teamId: 1,
          }
        }}
      />
    </Router>
  );
  testInstance = testRenderer.root;
});

test('renders correctly', () => {
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
});
