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

export default function BooksList({ Bookdata }) {



      return (
            <React.Fragment>
                  <Title>Books List</Title>
                  <Table size="small">
                        <TableHead>
                              <TableRow>
                                    <TableCell>Book Name</TableCell>
                                    <TableCell>Author</TableCell>
                                    <TableCell>Borrowed by Student</TableCell>
                                    <TableCell>Borrow Date</TableCell>
                                    <TableCell>Expected Date Return</TableCell>
                              </TableRow>
                        </TableHead>
                        <TableBody>
                              {Bookdata.map((row) => (
                                    <TableRow key={row.id}>
                                          <TableCell>{row.book_name}</TableCell>
                                          <TableCell>{row.author}</TableCell>
                                          <TableCell>{row.borrowed_by_student}</TableCell>
                                          <TableCell>{row.date_of_borrow}</TableCell>
                                          <TableCell>{row.expected_date_return}</TableCell>
                                    </TableRow>
                              ))}
                        </TableBody>
                  </Table>
                  <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                        See All Books
                  </Link>
            </React.Fragment>
      );
}
