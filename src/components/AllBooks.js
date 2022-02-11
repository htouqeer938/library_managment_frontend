import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import AddBook from './AddBookfrm'

import Box from '@mui/material/Box';
import axios from 'axios';
import ApiURL from '../config';
import { Grid } from '@mui/material';

const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      pt: 2,
      px: 4,
      pb: 3,
};

export default function BooksList() {


      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);


      const [Bookdata, getdata] = React.useState([]);

      React.useEffect(() => {
            getAlldataBook();
      }, []);


      const addBook = ({ book_name,
            author,
            borrowed_by_student,
            date_of_borrow,
            expected_date_return
      }) => {
            axios.post(`${ApiURL}/book`, {
                  book_name,
                  author,
                  borrowed_by_student,
                  date_of_borrow,
                  expected_date_return
            })
                  .then(res => {
                        console.log(res.data)
                        getAlldataBook();
                  })
      }

      const getAlldataBook = () => {
            axios.get(`${ApiURL}/book`)
                  .then(({ data }) => {
                        getdata(data);
                  })
                  .catch(error => console.error(`Error`, error))
      }

      return (
            <React.Fragment>
                  <Grid container spacing={2}>
                        <Grid item alignItems={"start"} lg={6} md={6}>
                              <Title>Books List</Title>
                        </Grid>
                        <Grid item alignItems={"end"} sx={{ textAlign: "end" }} lg={6} md={6}>
                              <Button onClick={handleOpen} variant='contained' startIcon={<AddIcon />}>
                                    Add Book
                              </Button>
                        </Grid>

                  </Grid>


                  <Modal
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="keep-mounted-modal-title"
                        aria-describedby="keep-mounted-modal-description"
                  >
                        <Box sx={{ ...style, width: 400 }}>
                              <AddBook formData={(data) => {
                                    addBook(data)
                              }} />
                        </Box>
                  </Modal>


                  <Table size="small">
                        <TableHead>
                              <TableRow>
                                    <TableCell style={{ fontWeight: 600 }}>Book Name</TableCell>
                                    <TableCell style={{ fontWeight: 600 }}>Author</TableCell>
                                    <TableCell style={{ fontWeight: 600 }}>Borrowed by Student</TableCell>
                                    <TableCell style={{ fontWeight: 600 }}>Borrow Date</TableCell>
                                    <TableCell style={{ fontWeight: 600 }}>Expected Date Return</TableCell>
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
            </React.Fragment >
      );
}
