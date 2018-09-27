import React from 'react';
import AppPage from '../shared/AppPage';
import DocumentTable from '../shared/DocumentTable';

const documents = [
  {
    id: 0,
    rev: '4.0',
    date: 'xx.xx.xxxx',
    title: 'Fire and escape plan',
  },
  {
    id: 1,
    rev: '2.0',
    date: 'xx.xx.xxxx',
    title: 'Subsea installasjoner',
  },
  {
    id: 2,
    rev: '4.0',
    date: 'xx.xx.xxxx',
    title: 'Plot planer',
  },
  {
    id: 3,
    rev: '11.0',
    date: 'xx.xx.xxxx',
    title: 'Detektor layout',
  },
  {
    id: 4,
    rev: '2.0',
    date: 'xx.xx.xxxx',
    title: 'Førstehjelpsutstyr',
  },
  {
    id: 4,
    rev: '1.0',
    date: 'xx.xx.xxxx',
    title: 'Innretninger i nærheten',
  },
];

export default () => (
  <AppPage title="Beredskapsrelaterte tegninger">
    <DocumentTable documents={documents} />
  </AppPage>
);
