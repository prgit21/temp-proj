import React, { useState } from 'react';
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom'





const ButtonList: React.FC = () => {
  const [buttons, setButtons] = useState<string[]>([]);

  const addMoreButton = () => {
    
    const newButton = `Device ${buttons.length + 1}`;
    setButtons([...buttons, newButton]);
  };
const navigate = useNavigate();
  

  const handleButtonClick = (button: string) => {

    navigate('/DeviceDataDashBoard')
    
  };

  const deleteButton = (index: number) => {
    const updatedButtons = [...buttons];
    updatedButtons.splice(index, 1);
    setButtons(updatedButtons);
  };

  return (
    <div>
      <h1>List of Devices</h1>
      {buttons.map((button, index) => (
        <div key={index}>
          <Button onClick={() => handleButtonClick(button)}>
            {button}
          </Button>
          <Button onClick={() => deleteButton(index)}>Delete</Button>
        </div>
      ))}
      <Button onClick={addMoreButton}>Add Device</Button>
    </div>
  );
};

export default ButtonList;
