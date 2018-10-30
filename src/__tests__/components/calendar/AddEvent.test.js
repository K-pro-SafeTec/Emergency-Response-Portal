import React from 'react';
import AddEvent from "../../../components/calendar/AddEvent";
import TestRenderer from "react-test-renderer";
import {MemoryRouter as Router} from "react-router-dom";

let testRenderer;

beforeAll(() => {
  const mockOnClick = jest.fn();
  testRenderer = TestRenderer.create(<Router><AddEvent date={new Date(2018, 11)} onSaveButtonClick={mockOnClick} /></Router>);
});

test('renders correctly', () => {
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
});
