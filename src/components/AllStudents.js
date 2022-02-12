import React from 'react';
import { Table, Grid } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Title from './Title';
import AddStudent from './AddStudentfrm';
import EditStudent from './EditStudent';
import Box from '@mui/material/Box';
import axios from 'axios';
import ApiURL from '../config';

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

export default function StudentsList() {

      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      const [openedit, setOpenedit] = React.useState(false);
      const handleOpenedit = () => setOpenedit(true);
      const handleCloseedit = () => setOpenedit(false);


      const [studentdata, setStudentData] = React.useState([]);

      const [studentDetail, setStudentDetail] = React.useState({});


      React.useEffect(() => {
            getAlldataStudent();
      }, []);

      const clearstate = () => setStudentData([])

      const addStudent = ({ first_name, last_name }) => {
            axios.post(`${ApiURL}/student`, {
                  first_name,
                  last_name
            })
                  .then(res => {
                        console.log(res.data)
                        getAlldataStudent()
                        clearstate();
                  })
      }

      const updatestudent = ({ id, first_name, last_name }) => {
            axios.put(`${ApiURL}/student/${id}`, {
                  first_name,
                  last_name
            })
                  .then(res => {
                        console.log(res.data)
                        getAlldataStudent()
                        clearstate();
                  })
      }

      const getAlldataStudent = () => {
            axios.get(`${ApiURL}/student`)
                  .then(({ data }) => {
                        setStudentData(data);
                  })
                  .catch(error => console.error(`Error`, error))
      }

      const getStudentByID = (id) => {
            axios.get(`${ApiURL}/student/${id}`)
                  .then(({ data }) => {
                        // console.log(data)
                        setStudentDetail(data);
                  })
                  .catch(error => console.error(`Error`, error))
      }

      const editmodal = (id) => {
            getStudentByID(id);
            // if (Object.entries(studentDetail).length > 0) {
            handleOpenedit();
            // }
      }

      const deleteStudent = (id) => {
            axios.delete(`${ApiURL}/student/${id}`)
                  .then(() => {
                        console.log('Delete successful');
                        getAlldataStudent()
                        clearstate();
                  })
                  .catch(error => console.error(`Error`, error))
      }
      return (
            <React.Fragment >


                  <Grid container spacing={2}>
                        <Grid item alignItems={"start"} lg={6} md={6}>
                              <Title>Students List</Title>
                        </Grid>
                        <Grid item alignItems={"end"} sx={{ textAlign: "end" }} lg={6} md={6}>
                              <Button onClick={handleOpen} variant='contained' startIcon={<AddIcon />}>
                                    Add Student
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
                              <AddStudent formData={(data) => {
                                    addStudent(data)
                              }} />
                        </Box>
                  </Modal>


                  <Modal
                        keepMounted
                        open={openedit}
                        onClose={handleCloseedit}
                        aria-labelledby="keep-mounted-modal-title"
                        aria-describedby="keep-mounted-modal-description"
                  >
                        <Box sx={{ ...style, width: 400 }}>
                              <EditStudent studentDetail={studentDetail} formData={(data) => {
                                    updatestudent(data)
                              }} />
                        </Box>
                  </Modal>


                  <Table size="small">
                        <TableHead>
                              <TableRow>
                                    <TableCell style={{ fontWeight: 600 }}>First Name</TableCell>
                                    <TableCell style={{ fontWeight: 600 }}>Last Name</TableCell>
                                    <TableCell style={{ fontWeight: 600 }}>Actions</TableCell>
                              </TableRow>
                        </TableHead>
                        <TableBody>
                              {studentdata.map((row) => (
                                    <TableRow key={row.id}>
                                          <TableCell>{row.first_name}</TableCell>
                                          <TableCell>{row.last_name}</TableCell>
                                          <TableCell>
                                                <EditIcon onClick={() => editmodal(row.id)} />
                                                <DeleteIcon onClick={() => deleteStudent(row.id)} />
                                          </TableCell>
                                    </TableRow>
                              ))}
                        </TableBody>
                  </Table>
            </React.Fragment >
      );
}
