import axios from "axios";
import { useEffect, useState } from "react"

interface DeviceProps{
    id?:string
}


export const DeviceData =({id}:DeviceProps)=>{
    const [data,setData]= useState(null);
    console.log(id,'this ID')
    useEffect(()=>{
    axios
      .get("http://127.0.0.1:5002/device/device-1")
      .then(response => {
        console.log(response.data, 'showApiSuccess2');
        const res = response.data;
        setData(res);
      })
      .catch(error => {
        // Handle error
        console.error(error,'logError');
      });
    },[data])
    return (
        <>
        {data}
        <h3>123 double chec</h3>
        </>
    )
}