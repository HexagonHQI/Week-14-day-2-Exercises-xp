import React, { useState } from 'react';

function Phone() {
  // Initialize state variables
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
  });

  // Function to change the color of the phone
  const changeColor = () => {
    setPhone(prevPhone => ({
      ...prevPhone,
      color: 'blue' // Update the color to blue
    }));
  };

  return (
    <div>
      <h1>Phone Details</h1>
      <p>Brand: {phone.brand}</p>
      <p>Model: {phone.model}</p>
      <p>Color: {phone.color}</p>
      <p>Year: {phone.year}</p>
      <button onClick={changeColor}>Change Color to Blue</button> {/* Button to change color */}
    </div>
  );
}

export default Phone;
