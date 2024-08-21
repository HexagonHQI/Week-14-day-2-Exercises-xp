import React, { useState } from 'react';

function Events() {
  // State for managing toggle
  const [isToggleOn, setIsToggleOn] = useState(true);

  // Arrow function for button click event
  const clickMe = () => {
    alert('I was clicked');
  };

  // Function to handle key down events
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`You pressed Enter with input: ${event.target.value}`);
    }
  };

  // Function to toggle the state
  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={clickMe}>Click Me</button>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Type something and press Enter"
      />
      <button onClick={handleToggle}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default Events;
