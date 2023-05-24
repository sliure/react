import "./App.css";
import Product from "./components/Product";

const App = () => {
  return (
    <div>
      <Product
        image={
          "https://i.pinimg.com/564x/18/26/dc/1826dc18e0a19ee0ff11532079e7b67d.jpg"
        }
        title={"Yearcalendar 2023 in color Green"}
        price={10}
        description={
          <div>
            12 unique designs
            <br />
            <br />
            <br />
            Like a giant size A3 paper with all the details you would expect.
            <br />
            <br />
            <br />
            Size: 50x70cm
            <br />
            Color: 2 color PMS print
            <br />
            <br />
            <br />
            We ship worldwide from Sweden. Get your now!
          </div>
        }
        availability={10}
        category={"Calendars"}
      />
    </div>
  );
};

export default App;
