import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import AppPage from "../../../components/shared/AppPage";
import Instance from "../../../components/training/Instance";

let testRenderer;
let testInstance;

beforeAll(() => {
  testRenderer = TestRenderer.create(
    <Router>
      <Instance
        match={
          {params:
              {
                scenarioId: 0,
                date: '2018-09-17'
              }
          }
        }
      />
    </Router>);
  testInstance = testRenderer.root;
});

test('renders correctly', () => {
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
});

test('title is correct', () => {
  expect(testInstance.findByType(AppPage).props.title).toBe("Trening");
});
