import React from 'react'

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
      <h1>Crypto Price App</h1>
      <p>{data.symbols[0].symbol}</p>
      <p>{data.symbols[0].last}</p>
      <h2>Here are the top 10 coins </h2>
      {/* <p>{topSymbolsResponse.data}</p> */}
    </div>
  )
}

export default App