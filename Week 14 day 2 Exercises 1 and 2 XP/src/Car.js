import React, { useState } from 'react';

function Car({ model }) {
  const [color, setColor] = useState('red'); // Initialize color state with 'red'

  return <h1>This car is {color} {model}</h1>;
}

export default Car;
