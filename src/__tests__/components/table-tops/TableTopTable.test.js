import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import TableTopTable from "../../../components/table-tops/TableTopTable";

let testRenderer;

beforeAll(() => {
  testRenderer = TestRenderer.create(
    <Router>
      <TableTopTable
        instances={[{
          scenario: 4,
          start: new Date(2018, 8, 24),
        },
        {
          scenario: 4,
          start: new Date(2018, 8, 8),
        },
        {
          scenario: 4,
          start: new Date(2018, 8, 22),
        },
        {
          scenario: 3,
          start: new Date(2018, 9, 5),
        },
        ]}
      />
    </Router>
  );
});

test('renders correctly', () => {
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
});
