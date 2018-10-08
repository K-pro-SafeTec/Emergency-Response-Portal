import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import LinkTableRow from './LinkTableRow';


// Material UI lets us create tables without using the actual table DOM elements.
// We can use Links as table rows to link to the documents, but a Link cannot appear as a child of <tbody> (as React will complain).
// To use Links as table rows, we'll use divs for everything else.
const DocumentTable = ({ documents }) => (
  <Table component="div">
    <TableHead component="div">
      <TableRow component="div">
        <TableCell component="div">
          Dok. Nr.
        </TableCell>
        <TableCell component="div">
          Rev.
        </TableCell>
        <TableCell component="div">
          Dato
        </TableCell>
        <TableCell component="div">
          Tittel
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody component="div">
      {documents.map(document => (
        <LinkTableRow
          key={document.id}
          to={`${document.id}/`}
        >
          <TableCell component="div">
            {document.id}
          </TableCell>
          <TableCell component="div">
            {document.rev}
          </TableCell>
          <TableCell component="div">
            {document.date}
          </TableCell>
          <TableCell component="div">
            {document.title}
          </TableCell>
        </LinkTableRow>
      ))}
    </TableBody>
  </Table>
);

export default DocumentTable;
