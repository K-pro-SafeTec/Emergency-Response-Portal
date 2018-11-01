import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import Livefeed from "../../../components/livefeed/Livefeed";

let testRenderer;

beforeAll(() => {
  testRenderer = TestRenderer.create(<Router><Livefeed /></Router>);
});

test('renders correctly', () => {
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
});
