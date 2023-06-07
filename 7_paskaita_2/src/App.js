import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Card from "./components/Context/Card";
import Text from "./components/Context/Text";

const App = () => {
  return (
    <ThemeProvider>
      <Card
        title={"Dream bed"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
        }
        imageUrl={
          "https://www.thespruce.com/thmb/Rup8masV3lF0MiJZsZ_Sk526J-8=/3000x0/filters:no_upscale():max_bytes(150000):strip_icc()/stunning-master-bedroom-design-ideas-4125545-hero-5782adcdc758407b884d92da7dbcbcbd.jpg"
        }
      />
      <Text
        title={"Hey!"}
        subtitle={
          "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
        }
      />
    </ThemeProvider>
  );
};

export default App;
