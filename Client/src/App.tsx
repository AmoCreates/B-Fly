import React, { useEffect } from 'react'
import API from './api/axios.js';

const App = () => {
  useEffect(() => {
    const connect = async () => {
      const res = await API.get('http://localhost:3000/connect')
      console.log(res);
    }

    connect();
  }, [])

  return (
    <div className=''>
      APP Page
    </div>
  )
}

export default App
