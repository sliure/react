import React, { useRef, useState, useEffect } from 'react';

const Colors = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    let backgroundColor = 'white';

    if (inputValue.length > 3 && inputValue.length <= 6) {
      backgroundColor = 'yellow';
    } else if (inputValue.length > 6 && inputValue.length <= 9) {
      backgroundColor = 'green';
    } else if (inputValue.length > 9) {
      backgroundColor = 'red';
    }

    document.body.style.backgroundColor = backgroundColor;
  }, [inputValue]);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default Colors;
