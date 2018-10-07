import React from 'react';
import AppPage from '../shared/AppPage';
import DocumentTable from '../shared/DocumentTable';
import { documentList } from '../../dummy-data/document';

export default () => (
  <AppPage title="Beredskapsdokumenter" back="..">
    <DocumentTable documents={documentList} />
  </AppPage>
);
