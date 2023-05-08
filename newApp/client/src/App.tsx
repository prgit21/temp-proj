import { useEffect, useState } from 'react'

import './App.css'
import ButtonList from './components/ButtonList';

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
    <ButtonList/>
    
    </>

  )
}

export default App
