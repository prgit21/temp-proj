import React, { useState } from 'react';
import { Button } from '@mui/material';

const ButtonList: React.FC = () => {
  const [buttons, setButtons] = useState<string[]>(['Device 1', 'Device 2']);

  const addMoreButton = () => {
    const newButton = `Device ${buttons.length + 1}`;
    setButtons([...buttons, newButton]);
  };

  const handleButtonClick = (button: string) => {
    console.log(button, 'clicked');
    // Perform any other actions
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
