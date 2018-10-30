import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import AppPage from "../../../components/shared/AppPage";
import Teams from "../../../components/training/Teams";
import ListItem from "@material-ui/core/ListItem/ListItem";

let testRenderer;

beforeAll(() => {
    testRenderer = TestRenderer.create(<Router><Teams /></Router>);
});

test('renders correctly', () => {
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
});
