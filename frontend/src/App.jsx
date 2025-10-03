import React from 'react'

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/'

const App = () => {
  return (
    <div class='text-3xl font-bold underline' >App</div>
  )
}

export default App