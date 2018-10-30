import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import AppPage from "../../../components/shared/AppPage";
import Teams from "../../../components/training/Teams";
import ListItem from "@material-ui/core/ListItem/ListItem";

let testRenderer;
let testInstance;

beforeAll(() => {
    testRenderer = TestRenderer.create(<Router><Teams /></Router>);
  testInstance = testRenderer.root;
});

test('renders correctly', () => {
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
});

test('title is correct', () => {
  expect(testInstance.findByType(AppPage).props.title).toBe("Trening");
});

test('nav menu contains all items', () => {
  expect(testInstance.findAllByType(ListItem).length).toBe(1+5);
});
