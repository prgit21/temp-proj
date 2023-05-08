import axios from "axios";
import { useEffect, useState } from "react"

interface DeviceProps{
    id:string
}


export const DeviceData =({id}:DeviceProps)=>{
    const [data,setData]= useState(null);
    const queryString = window.location.search;
    useEffect(()=>{
        axios
      .get(`http://127.0.0.1:5002/device/${id}`)
      .then(response => {
        console.log("ishaq",queryString);
        console.log(response.data, 'showApiSuccess2');
        const res = response.data;
        setData(res);
      })
      .catch(error => {
        // Handle error
        console.error(error,'logError');
      });
    })
    return (
        <>
        <h3>{data}</h3>
        <h3>123 double chec</h3>
        </>
    )
}