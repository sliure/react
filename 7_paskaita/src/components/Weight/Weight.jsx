import React, { useState } from 'react';

const Weight = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const convertAll = () => {
    const kilograms = +inputValue;
    const tonnes = kilograms * 0.001;
    const grams = kilograms * 1000;
    const pounds = kilograms * 2.20462262185;

    setInputValue(`Tonnes: ${tonnes.toFixed(2)}, Grams: ${grams}, Pounds: ${pounds.toFixed(2)}`);
  };

  return (
    <div>
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <button onClick={convertAll}>Convert to All</button>
      <h2>Converted Values: {inputValue}</h2>
    </div>
  );
}

export default Weight;

