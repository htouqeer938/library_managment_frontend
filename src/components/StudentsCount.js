import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ApiURL from '../config';

export default function StudentsCount() {
  const history = useHistory()

  const [studentdata, getdata] = React.useState([]);

  React.useEffect(() => {
    getAlldataStudent();
  }, []);

  const getAlldataStudent = () => {
    axios.get(`${ApiURL}/studentcount`)
      .then(({ data }) => {
        getdata(data);
      })
      .catch(error => console.error(`Error`, error))
  }

  return (
    <React.Fragment>
      <Title>Total Students</Title>
      <Typography component="p" variant="h4">
        {studentdata.map(({ count }, index) => (
          <span key={index}>{count}</span>
        ))}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {/* {Date().toLocaleString()} */}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={() => { history.push("/students") }}>
          View Students
        </Link>
      </div>
    </React.Fragment>
  );
}
