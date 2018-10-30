import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import Debrief from "../../../components/table-tops/Debrief";

let testRenderer;

beforeAll(() => {
  testRenderer = TestRenderer.create(
    <Router>
      <Debrief
        match={{
          params: {
            scenarioId: 4,
            date: '2018-09-24',
          }
        }}
      />
    </Router>
  );
});

test('renders correctly', () => {
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
});
