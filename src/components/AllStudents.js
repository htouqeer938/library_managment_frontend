import React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
// import { useEffect } from 'react';

// Generate Order Data



function preventDefault(event) {
      event.preventDefault();
}

export default function StudentsList({ studentdata }) {



      return (
            <React.Fragment>
                  <Title>Students List</Title>
                  <Table size="small">
                        <TableHead>
                              <TableRow>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                              </TableRow>
                        </TableHead>
                        <TableBody>
                              {studentdata.map((row) => (
                                    <TableRow key={row.id}>
                                          <TableCell>{row.first_name}</TableCell>
                                          <TableCell>{row.last_name}</TableCell>
                                    </TableRow>
                              ))}
                        </TableBody>
                  </Table>
                  <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                        See All Students
                  </Link>
            </React.Fragment>
      );
}
