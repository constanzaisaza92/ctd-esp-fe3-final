import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Components/utils/global.context'

const Contact = () => {
  const [{ theme }] = useContextGlobal();
  return (
    <main className={theme} >
      <h2 className='title'>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </main>
  )
}

export default Contact