import axios from 'axios';
import { useEffect, useState } from 'react';


export const DeviceDataDashboard =()=>{
    
  const [data,setData]=useState([])


useEffect(()=>{
  axios.get('http://127.0.0.1:5002/lof')
  .then(response => {
    // Handle successful response
    console.log(response.data,'showApiSuccess');
    const res = response.data
    setData(res)
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });
},[])

  
  

    return (
      <>
      {/* {data?data.map((x)=>{
        return <a href={'http://localhost:5002/device/'+x}>{x}</a>
      }):null} */}
      <h3>div</h3>
      
      </>
    )
}




