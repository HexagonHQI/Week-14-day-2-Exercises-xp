import React, { useState, useEffect } from 'react';

function Color() {
  // State variable for favorite color
  const [favoriteColor, setFavoriteColor] = useState('red');

  // useEffect hook to handle side effects after component render
  useEffect(() => {
    alert('useEffect reached');
  }, []); 

  
  const changeColor = () => {
    setFavoriteColor('blue');
  };

  return (
    <div>
      <h1>{favoriteColor}</h1> 
      <button onClick={changeColor}>Change Color to Blue</button> {/* Button to change color */}
    </div>
  );
}

export default Color;
