import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import AppPage from "../../../components/shared/AppPage";
import ExperienceLog from "../../../components/experience-log/ExperienceLog";
import NavMenuItem from "../../../components/shared/NavMenuItem";

let testInstance;

beforeAll(() => {
  const testRenderer = TestRenderer.create(<Router><ExperienceLog match={{params: {personId: 0}}} /></Router>);
  testInstance = testRenderer.root;
});

test('title is correct', () => {
  expect(testInstance.findByType(AppPage).props.title).toBe("Erfaringslogg");
});

test('nav menu contains all items', () => {
  expect(testInstance.findAllByType(NavMenuItem).length).toBe(6);
});
