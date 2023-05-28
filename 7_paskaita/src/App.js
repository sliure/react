import Information from "./components/Information/Information";
import "./App.css";

const App = () => {
  return (
    <div>
      <Information
        header="Printerio"
        descripcion={`You can choose from various pictures or upload your own. If you would like to order a printed picture, please contact us!`}
      />
    </div>
  );
};

export default App;
