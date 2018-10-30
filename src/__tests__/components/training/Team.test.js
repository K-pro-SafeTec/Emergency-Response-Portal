import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import AppPage from "../../../components/shared/AppPage";
import Team from "../../../components/training/Team";
import TrainingTable from "../../../components/training/TrainingTable";

let testRenderer;
let testInstance;

beforeAll(() => {
  testRenderer = TestRenderer.create(<Router><Team match={{params: {teamId: 2}}} /></Router>);
  testInstance = testRenderer.root;
});

test('renders correctly', () => {
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
});

test('title is correct', () => {
  expect(testInstance.findByType(AppPage).props.title).toBe("Trening");
});

test('table contains all trainings', () => {
  console.log(testInstance.findByType(TrainingTable).props);
  expect(testInstance.findByType(TrainingTable).props.instances.length).toBe(12);
});
