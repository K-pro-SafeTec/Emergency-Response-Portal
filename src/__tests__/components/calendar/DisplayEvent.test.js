import React from 'react';
import DisplayEvent from "../../../components/calendar/DisplayEvent";
import TestRenderer from "react-test-renderer";
import {MemoryRouter as Router} from "react-router-dom";

let testRenderer;

beforeAll(() => {
  const event = {
    id: 0,
    title: 'Øvelse',
    start: new Date(2019, 0, 1, 19),
    end: new Date(2019, 0, 1, 20),
    participants: 'Alle',
  };
  const mockOnClick = jest.fn();
  testRenderer = TestRenderer.create(
    <Router>
      <DisplayEvent
        event={event}
        onChangeEvent={mockOnClick}
        onDeleteButtonClick={mockOnClick}
        onReviewButtonClick={mockOnClick}
      />
    </Router>
  );
});

test('renders correctly', () => {
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
});
