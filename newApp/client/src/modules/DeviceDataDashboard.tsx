import { Button } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DeviceData } from './DeviceData';

interface DeviceProps {
  id: string,
}


export const DeviceDataDashboard = () => {
  const [data, setData] = useState([]);
  const [currDevice,setCurrDevice]=useState("")

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5002/lof')
      .then(response => {
        // Handle successful response
        console.log(response.data, 'showApiSuccess');
        const res = response.data;
        setData(res);
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  }, []);
  
    const [buttons, setButtons] = useState<string[]>([]);
  
    const addMoreButton = () => {
      
      const newButton = `Device ${buttons.length + 1}`;
      setButtons([...buttons, newButton]);
    };
  const navigate = useNavigate();
    
  const deviceName = useParams();

    const handleButtonClick = (deviceName: string) => {
      setCurrDevice(deviceName);  
      const xyz={id:deviceName}
      navigate( `/DeviceData/${deviceName}`)
      // return <DeviceData {...xyz}/>
      
      
    }
  
    // const deleteButton = (index: number) => {
    //   const updatedButtons = [...buttons];
    //   updatedButtons.splice(index, 1);
    //   setButtons(updatedButtons);
    // };
  
   

  return (
    <>
    <h1>List of Devices</h1>
      {data.map((d, index) => (
        <div key={index}>
          <Button onClick={() => handleButtonClick(d)}>
            {d}
          </Button>
          {/* <Button onClick={() => deleteButton(index)}>Delete</Button> */}
        </div>
      ))}
      {/* <Button onClick={addMoreButton}>Add Device</Button> */}
    </>
  );
};



