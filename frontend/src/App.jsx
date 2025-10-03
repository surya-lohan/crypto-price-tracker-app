import React from 'react'

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
    <div>{showResponse(response)}</div>
  )
}

export default App