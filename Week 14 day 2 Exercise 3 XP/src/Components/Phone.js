import React, { useState } from 'react';

function Phone() {
  // Initialize state variables
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
  });

  return (
    <div>
      <h1>Phone Details</h1>
      <p>Brand: {phone.brand}</p>
      <p>Model: {phone.model}</p>
      <p>Color: {phone.color}</p>
      <p>Year: {phone.year}</p>
    </div>
  );
}

export default Phone;
