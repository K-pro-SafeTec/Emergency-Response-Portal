import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import TableTopTable from "../../../components/table-tops/TableTopTable";
import {getDateRelatedToThisDate} from "../../../helpers/calendar-helper";

let testRenderer;

beforeAll(() => {
  testRenderer = TestRenderer.create(
    <Router>
      <TableTopTable
        instances={[{
          scenario: 9,
          start: getDateRelatedToThisDate(3, -6),
        },
        {
          scenario: 4,
          start: getDateRelatedToThisDate(1, -5),
        },
        {
          scenario: 3,
          start: getDateRelatedToThisDate(1, 1),
        },
        {
          scenario: 1,
          start: getDateRelatedToThisDate(3, 2),
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
