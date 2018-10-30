import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import Exercise from "../../../components/exercises/Exercise";
import {getDateFormatYMD, getDateRelatedToThisDate} from "../../../helpers/calendar-helper";

let testRenderer;

beforeAll(() => {
  testRenderer = TestRenderer.create(
    <Router>
      <Exercise
        match={{
          params: {
            scenarioId: 11,
            date: getDateFormatYMD(getDateRelatedToThisDate(0, -4))
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
