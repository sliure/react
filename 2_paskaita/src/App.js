//import Car from "./components/Car";
//import FuncCar from "./components/FuncCar";
//import FuncBestCar from "./components/FuncBestCar";
//import Counter from "./components/Counter";
//import Welcome from "./components/Welcome";
//import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Button from "./components/Button";
import Mood from "./components/Mood";

const App = () => {
  return (
    <div>
      <div>
        <Hero title={"HEY!"} subtitle={"Yeah"} />
      </div>

      <div>
        <Button variant={"outlined"} title={"Hey!"} />
        <Button variant={"text"} title={"Press"} />
        <Button variant={"contained"} title={"Me"} />
      </div>

      <div>
        <Mood />
      </div>
      {/* <div>
        <h2>Class</h2>
        <Car />
        <br />
        <br />
        <br />
        <h2>Function with one state</h2>
        <FuncCar />
        <br />
        <br />
        <br />
        <h2>Function with separate states</h2>
        <FuncBestCar />

        <div>
          <Counter />
        </div>
      </div> */}
    </div>
  );
};

export default App;
