import React, { useState, useEffect } from "react";
import { FormControl, Button, Input, FormHelperText, FormGroup } from '@mui/material';
import Title from "./Title";


const EditStudent = ({ formData, studentDetail }) => {

      const [data, setData] = useState([])


      useEffect(() => {

            setData({ ...studentDetail })

      }, [studentDetail])


      function submit(e) {
            formData(data);
      }

      function handle(e) {
            const newdata = { ...data }
            newdata[e.target.id] = e.target.value
            setData(newdata)
      }


      return (
            <form onSubmit={(e) => {
                  e.preventDefault();
                  submit()
            }}>
                  <Title>Edit Student</Title>
                  <FormControl fullWidth>

                        <FormGroup>
                              <Input required onChange={(e) => handle(e)} value={data.first_name} id="first_name" aria-describedby="first_name-text" />
                              <FormHelperText id="first_name-text">Enter first name.</FormHelperText>
                        </FormGroup>
                  </FormControl>
                  <FormControl fullWidth>

                        <FormGroup>
                              <Input required onChange={(e) => handle(e)} value={data.last_name} id="last_name" aria-describedby="last_name-text" />
                              <FormHelperText id="last_name-text">Enter Last Name.</FormHelperText>
                        </FormGroup>

                  </FormControl>
                  <FormControl fullWidth>

                        <FormGroup>
                              <Button type="submit" variant='contained'>Update Student</Button>
                        </FormGroup>
                  </FormControl>
            </form>
      );
};

export default EditStudent;