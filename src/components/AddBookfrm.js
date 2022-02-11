import React, { useState } from "react";
import { FormControl, Button, Input, FormHelperText, FormGroup, Select, MenuItem } from '@mui/material';
import axios from "axios";
import ApiURL from "../config";

const AddBook = ({ formData }) => {

      const [data, setData] = useState({
            book_name: "",
            author: "",
            borrowed_by_student: "",
            date_of_borrow: "",
            expected_date_return: ""
      })

      function submit(e) {
            formData(data);
      }

      function handle(e) {
            const newdata = { ...data }
            newdata[e.target.name] = e.target.value
            setData(newdata)
            console.log(newdata)

      }

      const [studentdata, getdata] = React.useState([]);

      React.useEffect(() => {
            getAlldataStudent();
      }, []);

      const getAlldataStudent = () => {
            axios.get(`${ApiURL}/student`)
                  .then(({ data }) => {
                        getdata(data);
                        console.log(data)
                  })
                  .catch(error => console.error(`Error`, error))
      }

      return (
            <form onSubmit={(e) => {
                  e.preventDefault();
                  submit()
            }}>
                  <FormControl fullWidth>
                        <FormGroup>
                              <Input onChange={(e) => handle(e)} value={data.book_name} name="book_name" aria-describedby="first_name-text" required />
                              <FormHelperText id="first_name-text">Enter book name</FormHelperText>
                        </FormGroup>
                        <FormGroup>
                              <Input onChange={(e) => handle(e)} value={data.author} name="author" aria-describedby="last_name-text" required />
                              <FormHelperText id="last_name-text">Enter author</FormHelperText>
                        </FormGroup>
                        <FormGroup>
                              {/* <Input onChange={(e) => handle(e)} value={data.borrowed_by_student} id="borrowed_by_student" aria-describedby="first_name-text" /> */}
                              <Select
                                    name="borrowed_by_student"
                                    value={data.borrowed_by_student}
                                    aria-describedby="first_name-text"
                                    onChange={(e) => handle(e)}
                                    required
                              >
                                    {studentdata.map((student) => (

                                          <MenuItem key={student.id} value={student.first_name}>{student.first_name}</MenuItem>

                                    ))}
                              </Select>
                              <FormHelperText id="first_name-text">Enter borrowed student</FormHelperText>
                        </FormGroup>
                        <FormGroup>
                              <Input required type="date" onChange={(e) => handle(e)} value={data.date_of_borrow} name="date_of_borrow" aria-describedby="last_name-text" />
                              <FormHelperText id="last_name-text">Enter borrow date</FormHelperText>
                        </FormGroup>
                        <FormGroup>
                              <Input required type="date" onChange={(e) => handle(e)} value={data.expected_date_return} name="expected_date_return" aria-describedby="first_name-text" />
                              <FormHelperText id="first_name-text">Enter expected return Date</FormHelperText>
                        </FormGroup>
                        <FormGroup>
                              <Button variant="outlined" type="submit">Add Book</Button>
                        </FormGroup>
                  </FormControl>
            </form>
      );
};

export default AddBook;