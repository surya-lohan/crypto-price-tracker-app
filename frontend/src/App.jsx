import React from 'react'
import ContactPage from './Components/ContactPage'
import axios from 'axios'



const symbolResponse = await axios.get(`${import.meta.env.VITE_CRYPTOPRICE_API_URL}/getData`, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_FREECRYPTO_API_KEY}`
  },
  params: {
    currency: 'USD',
    symbol: 'BTC'
  }
})

const topSymbolsResponse = await axios.get(`${import.meta.env.VITE_CRYPTOPRICE_API_URL}/getTop`, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_FREECRYPTO_API_KEY}`
  },
  params: {
    top: 10,
  }
})

const data = symbolResponse.data

console.log(data.symbols[0].last)
console.log(topSymbolsResponse.data)

const App = () => {
  return (
    <div>
      {data.symbols[0].last}
      
    </div>
  )
}

export default App