import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
// import PassComponent from './DeviceData';

export const ButtonList: React.FC = () => {
  const navigate = useNavigate();
  const [ran, setRan] = useState(Math.random())
  const [buttons, setButtons] = useState<string[]>([]);

  useEffect(() => {
    axios.get('http://13.233.56.210:5002/lof').then(function (res) {
      setButtons(res['data'])
      const resp = res.data
      console.log(resp)
    })
  }, [ran])


  const addMoreButton = () => {
    axios.get('http://13.233.56.210:5002/addDevice').then(function (res) {
      console.log(res)
    })
    setRan(Math.random())
  };

  const handleButtonClick = (button: string) => {
    console.log(button)
    navigate(`/Data/${button}`)
  };



  const deleteButton = (index: string) => {
    console.log('ishaq', index);
    axios.get(`http://13.233.56.210:5002/removeDevice/${index}`).then(function (res) {
      console.log(res)
    })
    setRan(Math.random())
  };

  const fetch = (idex: any) => {
    console.log('entering idx', idex)
    axios.get(`http://13.233.56.210:5002/device/${idex}`).then(function (res) { console.log(res, 'whatRes'); const time = res.data; alert(JSON.stringify(time)) })
    console.log(idex, 'clogs123')
  }



  return (
    <div>
      <h1>List of Devices</h1>
      {buttons.map((button, index) => (
        <div key={index}>
          <Button onClick={() => handleButtonClick(button)}>
            {button}
          </Button>
          <Button onClick={() => deleteButton(button)}>Delete</Button>
          <Button onClick={() => fetch(button)}>Quick Fetch</Button>

        </div>
      ))}
      <Button onClick={addMoreButton}>Add Device</Button>
      {/* <Navigate to={"/Data"} state={{}} /> */}

    </div>
  );
};


