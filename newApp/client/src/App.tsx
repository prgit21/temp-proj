import { useEffect, useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ButtonList } from './components/ButtonList';
import { DeviceData } from './components/DeviceData';

function App() {
  const [backend, setBackend] = useState([{}]);

  useEffect(() => {
    fetch('/api').then(
      response => response.json()
    ).then(
      data => {
        setBackend(data)
      }
    )
  }, [])
  console.log(setBackend, 'data')
  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ButtonList />} />
        <Route path="/Data/:id" element={<DeviceData />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
