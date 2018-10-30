import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import AppPage from "../../../components/shared/AppPage";
import ExperienceLog from "../../../components/experience-log/ExperienceLog";

let testRenderer;
let testInstance;

beforeAll(() => {
  testRenderer = TestRenderer.create(<Router><ExperienceLog match={{params: {personId: 0}}} /></Router>);
  testInstance = testRenderer.root;
});

test('renders correctly', () => {
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
});

test('title is correct', () => {
  expect(testInstance.findByType(AppPage).props.title).toBe("Erfaringslogg");
});
