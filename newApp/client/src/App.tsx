import { useEffect, useState } from 'react'

import './App.css'
import ButtonList from './components/ButtonList';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { DeviceDataDashboard } from './modules/DeviceDataDashboard';
import { DeviceData } from './modules/DeviceData';

function App() {
  const [backend,setBackend] = useState([{}]);
  
  useEffect(()=>
  {
    fetch('/lof').then(
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
        <Route path="/" element={<DeviceDataDashboard/>} />            
        <Route path="/DeviceDataDashBoard" element={<DeviceDataDashboard/>} />            
        <Route path="/DeviceData/:id" element={<DeviceData id={'/device-1'}/>} />            

    </Routes>
  </BrowserRouter>
    </>

  )
}

export default App
