import React, { useState } from "react";
import { FormControl, Button, Input, FormHelperText, FormGroup } from '@mui/material';
import axios from 'axios';
import ApiURL from "../config";


const AddStudent = () => {

      const [data, setData] = useState({
            first_name: "",
            last_name: ""
      })
      const url = `${ApiURL}/student`
      function submit(e) {
            axios.post(url, {
                  first_name: data.first_name,
                  last_name: data.last_name
            })
                  .then(res => {
                        console.log(res.data)
                  })
      }

      function handle(e) {
            const newdata = { ...data }
            newdata[e.target.id] = e.target.value
            setData(newdata)
            console.log(newdata)
      }

      return (
            <FormControl>
                  <FormGroup>
                        <Input onChange={(e) => handle(e)} value={data.first_name} id="first_name" aria-describedby="first_name-text" />
                        <FormHelperText id="first_name-text">Enter first name.</FormHelperText>
                  </FormGroup>
                  <FormGroup>
                        <Input onChange={(e) => handle(e)} value={data.last_name} id="last_name" aria-describedby="last_name-text" />
                        <FormHelperText id="last_name-text">Enter Last Name.</FormHelperText>
                  </FormGroup>
                  <FormGroup>
                        <Button onClick={(e) => {
                              e.preventDefault();
                              submit()
                        }} variant="outlined">Add Student</Button>
                  </FormGroup>
            </FormControl>
      );
};

export default AddStudent;