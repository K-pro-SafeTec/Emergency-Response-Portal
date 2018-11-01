import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import Instance from "../../../components/training/Instance";
import {getDateFormatYMD, getDateRelatedToThisDate} from "../../../helpers/calendar-helper";

let testRenderer;

beforeAll(() => {
  testRenderer = TestRenderer.create(
    <Router>
      <Instance
        match={{
          params: {
              scenarioId: 0,
              date: getDateFormatYMD(getDateRelatedToThisDate(1, -6))
            }
        }}
      />
    </Router>);
});

test('renders correctly', () => {
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
});
