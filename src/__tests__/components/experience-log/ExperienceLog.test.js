import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import ExperienceLog from "../../../components/experience-log/ExperienceLog";

let testRenderer;

beforeAll(() => {
  testRenderer = TestRenderer.create(<Router><ExperienceLog match={{}} /></Router>);
});

test('renders correctly', () => {
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
});
