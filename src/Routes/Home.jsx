import React, { useEffect } from 'react'
import axios from 'axios'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

const Home = () => {
  const [{ data, theme }, dispatch] = useContextGlobal();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => 
    dispatch({ type: 'dentistas', data })
    );
  }, [])
  
  return (
    <main className={theme}>
      <h1 className='title'>Home</h1>
      <div className='card-grid'>
        {data?.map(dentista => <Card key={dentista.id} {...dentista }/>)}
      </div>
    </main>
  )
}

export default Home