import { useEffect, useState } from 'react'

import './App.css'

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

  return (
<h3>blank</h3>

  )
}

export default App
