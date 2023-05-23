import "./App.css";
import Product from "./components/Product";

const App = () => {
  return (
    <div>
      <Product
        image={
          "https://i.pinimg.com/564x/18/26/dc/1826dc18e0a19ee0ff11532079e7b67d.jpg"
        }
        title={"Calendar of the year of 2023"}
        price={"10.00"}
        description={
          <div>
            12 unique designs
            <br />
            <br />
            <br />
            The little dazzling battery-powered car will be flying around
            streets circuits.
            <br />
            <br />
            <br />
            The Mini will share duties with the BMW i8 Roadster which was
            revealed by Brooklyn Beckham in Mexico last year.
            <br />
            <br />
            <br />
            The new safety car will appear at the next two races in Rome.
          </div>
        }
        availability={"10"}
        category={"Calendars"}
      />
    </div>
  );
};

export default App;
