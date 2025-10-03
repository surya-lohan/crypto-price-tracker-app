import React from 'react'
import ContactPage from './Components/ContactPage'
import axios from 'axios'



const response = await axios.get(`${import.meta.env.VITE_CRYPTOPRICE_API_URL}/getCryptoList`, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_FREECRYPTO_API_KEY}`
  }
})


const showResponse = (response) => {
  console.log('Response:', response.data)
  return JSON.stringify(response.data)
}


const App = () => {
  return (
    <>
      <ContactPage/>
      {/* <div class ='text-3xl font-bold underline rounded-2xl'>App</div> */}
    </>

  )
}

export default App