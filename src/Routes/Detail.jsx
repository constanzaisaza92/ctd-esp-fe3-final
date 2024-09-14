import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const [{ theme }] = useContextGlobal();
  const [dentista, setDentista] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(({ data }) => setDentista(data));
  }), [id];

  return (
    <main className={theme}>
      <h1 className='title'>Detail Dentist {dentista?.id} </h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentista.name}</td>
            <td>{dentista.email}</td>
            <td>{dentista.phone}</td>
            <td>{dentista.website}</td>
          </tr>
        </tbody> 
      </table>
    </main>
  )
}

export default Detail