import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../Title';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ApiURL from '../../config'


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
                        {bookdata.map(({ count }, index) => (
                              <span key={index}>{count}</span>
                        ))}
                  </Typography>
                  <Typography color="text.secondary" sx={{ flex: 1 }}>
                        {/* {moment()} */}
                  </Typography>
                  <div>
                        <Link color="primary" href="#" onClick={() => { history.push("/books") }}>
                              View Books Issued
                        </Link>
                  </div>
            </React.Fragment>
      );
}
