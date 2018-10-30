import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import AppPage from "../../../components/shared/AppPage";
import Livefeed from "../../../components/livefeed/Livefeed";

test('title is correct', () => {
  const testRenderer = TestRenderer.create(<Router><Livefeed match={{params: {personId: 0}}} /></Router>);
  const testInstance = testRenderer.root;
  expect(testInstance.findByType(AppPage).props.title).toBe("Beredskapsstatus - Live feed");
});
