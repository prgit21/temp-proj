import { useEffect, useState } from 'react'

import './App.css'
import ButtonList from './components/ButtonList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DeviceDataDashboard } from './modules/DeviceDataDashboard';

function App() {
  const [backend,setBackend] = useState([{}]);
  
  useEffect(()=>
  {
    fetch('/api').then(
      response =>response.json()
    ).then(
      data =>{
        setBackend(data)
      }
    )
  },[])
console.log(setBackend,'data')
  return (
    
    <>

    <BrowserRouter>
    
    
    <Routes>    
        <Route path="/DashBoard" element={<ButtonList/>} />            
        <Route path="/DeviceDataDashBoard" element={<DeviceDataDashboard/>} />            

    </Routes>
  </BrowserRouter>
    </>

  )
}

export default App
