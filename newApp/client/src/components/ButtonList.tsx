import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import axios from "axios";

const ButtonList: React.FC = () => {
  const [buttons, setButtons] = useState<string[]>([]);
  const [ran,setRan]=useState(Math.random())
  const addMoreButton = () => {
    axios.get('http://localhost:5002/addDevice').then(function (res){
    })
    setRan(Math.random())
  };

  const handleButtonClick = (button: string) => {
    console.log(button)
  };

  useEffect(()=>{
    axios.get('http://localhost:5002/lof').then(function (res){
      setButtons(res['data'])
    })
  },[ran])

  const deleteButton = (index: string) => {
    console.log('ishaq',index);
    axios.get(`http://localhost:5002/removeDevice/${index}`).then(function (res){
    })
    setRan(Math.random())
  };

  return (
    <div>
      <h1>List of Devices</h1>
      {buttons.map((button, index) => (
        <div key={index}>
          <Button onClick={() => handleButtonClick(button)}>
            {button}
          </Button>
          <Button onClick={() => deleteButton(button)}>Delete</Button>
        </div>
      ))}
      <Button onClick={addMoreButton}>Add Device</Button>
    </div>
  );
};

export default ButtonList;
