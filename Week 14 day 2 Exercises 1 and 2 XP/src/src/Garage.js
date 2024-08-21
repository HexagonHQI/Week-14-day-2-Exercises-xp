import React, { useState } from 'react';
import Garage from './Garage'; // Import the Garage component

function Car({ model }) {
  const [color, setColor] = useState('red'); // Initialize color state with 'red'

  return (
    <div>
      <h1>This car is {color} {model}</h1>
      <Garage size="small" /> {/* Use the Garage component with size 'small' */}
    </div>
  );
}

export default Car;
