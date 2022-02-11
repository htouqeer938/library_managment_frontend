import React, { useState } from "react";
import { FormControl, Button, Input, FormHelperText, FormGroup } from '@mui/material';


const AddStudent = ({ formData }) => {

      const [data, setData] = useState({
            first_name: "",
            last_name: ""
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
            <form onSubmit={(e) => {
                  e.preventDefault();
                  submit()
            }}>
                  <FormControl fullWidth>
                        <FormGroup>
                              <Input required onChange={(e) => handle(e)} value={data.first_name} id="first_name" aria-describedby="first_name-text" />
                              <FormHelperText id="first_name-text">Enter first name.</FormHelperText>
                        </FormGroup>
                        <FormGroup>
                              <Input required onChange={(e) => handle(e)} value={data.last_name} id="last_name" aria-describedby="last_name-text" />
                              <FormHelperText id="last_name-text">Enter Last Name.</FormHelperText>
                        </FormGroup>
                        <FormGroup>
                              <Button type="submit" variant="outlined">Add Student</Button>
                        </FormGroup>
                  </FormControl>
            </form>
      );
};

export default AddStudent;