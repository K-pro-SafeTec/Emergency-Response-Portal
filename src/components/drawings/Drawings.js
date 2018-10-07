import React from 'react';
import AppPage from '../shared/AppPage';
import DocumentTable from '../shared/DocumentTable';
import { drawingList } from '../../dummy-data/drawing';

export default () => (
  <AppPage title="Beredskapsrelaterte tegninger" back="..">
    <DocumentTable documents={drawingList} />
  </AppPage>
);
