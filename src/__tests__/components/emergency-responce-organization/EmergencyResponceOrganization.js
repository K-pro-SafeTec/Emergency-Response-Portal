import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom'
import EmergencyResponseOrganization
  from "../../../components/emergency-response-organization/EmergencyResponseOrganization";

let testRenderer;

beforeAll(() => {
  testRenderer = TestRenderer.create(
    <Router>
      <EmergencyResponseOrganization  match={{}} />
    </Router>
  );
});

test('renders correctly', () => {
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
});
