import Car from "./components/Car";
import FuncCar from "./components/FuncCar";
import FuncBestCar from "./components/FuncBestCar";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
