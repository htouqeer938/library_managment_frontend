import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ApiURL from '../config'


export default function BooksCount() {
      const history = useHistory()

      const [bookdata, getdata] = React.useState([]);

      React.useEffect(() => {
            getAlldatabook();
      }, []);

      const getAlldatabook = () => {
            axios.get(`${ApiURL}/bookcount`)
                  .then(({ data }) => {
                        getdata(data);
                  })
                  .catch(error => console.error(`Error`, error))
      }

      return (
            <React.Fragment>
                  <Title>Books Issued</Title>
                  <Typography component="p" variant="h4">
                        {bookdata.map((i) => (
                              <div>{i.count}</div>
                        ))}
                  </Typography>
                  <Typography color="text.secondary" sx={{ flex: 1 }}>
                        {Date().toLocaleString()}
                  </Typography>
                  <div>
                        <Link color="primary" href="#" onClick={() => { history.push("/books") }}>
                              View Books
                        </Link>
                  </div>
            </React.Fragment>
      );
}
