import React from 'react';
import TestRenderer from 'react-test-renderer';
import Person from "../../../components/competence-overview/Person";
import { MemoryRouter as Router } from 'react-router-dom'
import AppPage from "../../../components/shared/AppPage";

test('title is correct', () => {
  const testRenderer = TestRenderer.create(<Router><Person match={{params: {personId: 0}}} /></Router>);
  const testInstance = testRenderer.root;
  expect(testInstance.findByType(AppPage).props.title).toBe("Kompetanseoversikt");
});
