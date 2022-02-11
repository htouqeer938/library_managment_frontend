import React, { useState } from "react";
import { FormControl, Button, Input, FormHelperText, FormGroup } from '@mui/material';


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
            newdata[e.target.id] = e.target.value
            setData(newdata)
      }


      return (
            <FormControl>
                  <FormGroup>
                        <Input onChange={(e) => handle(e)} value={data.book_name} id="book_name" aria-describedby="first_name-text" />
                        <FormHelperText id="first_name-text">Enter book name</FormHelperText>
                  </FormGroup>
                  <FormGroup>
                        <Input onChange={(e) => handle(e)} value={data.author} id="author" aria-describedby="last_name-text" />
                        <FormHelperText id="last_name-text">Enter author</FormHelperText>
                  </FormGroup>
                  <FormGroup>
                        <Input onChange={(e) => handle(e)} value={data.borrowed_by_student} id="borrowed_by_student" aria-describedby="first_name-text" />
                        <FormHelperText id="first_name-text">Enter borrowed student</FormHelperText>
                  </FormGroup>
                  <FormGroup>
                        <Input type="date" onChange={(e) => handle(e)} value={data.date_of_borrow} id="date_of_borrow" aria-describedby="last_name-text" />
                        <FormHelperText id="last_name-text">Enter borrow date</FormHelperText>
                  </FormGroup>
                  <FormGroup>
                        <Input type="date" onChange={(e) => handle(e)} value={data.expected_date_return} id="expected_date_return" aria-describedby="first_name-text" />
                        <FormHelperText id="first_name-text">Enter expected return Date</FormHelperText>
                  </FormGroup>
                  <FormGroup>
                        <Button onClick={(e) => {
                              e.preventDefault();
                              submit()
                        }} variant="outlined">Add Book</Button>
                  </FormGroup>
            </FormControl>
      );
};

export default AddBook;