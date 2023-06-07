import { useState } from "react";

const Inputs = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(+event.target.value);
  };

  const AddAge = (event) => {
    setAge(prevAge => prevAge + 10);
  };

  return (
    <div>
        <label htmlFor="name">First name:</label>
        <input id="name" type="text" onChange={handleNameChange}/>
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" onChange={handleAgeChange}/><button onClick={AddAge}>Add 10 years</button>
        <h2>Hey! {name} Your age is {age}</h2>
    </div>
  );
};

export default Inputs;