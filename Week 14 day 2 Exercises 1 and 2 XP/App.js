import React from 'react';
import Car from './Components/Car'; // Import the Car component

const carinfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div className="App">
      <Car model={carinfo.model} />
    </div>
  );
}

export default App;
