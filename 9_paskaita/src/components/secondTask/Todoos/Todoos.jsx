import React, { useState } from "react";
import Todoo from "../Todoo/Todoo";
import "./Todoos.css"; // Import CSS file for Todoos component

const Todoos = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="todoos-container">
      <h2 className="todoos-title">You have {todos.length} Todoos</h2>
      {todos.map((todo, index) => (
        <Todoo key={index} text={todo} />
      ))}
      <input
        type="text"
        className="todoos-input"
        placeholder="Enter Item"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="todoos-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Todoos;

