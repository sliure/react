import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main";
import MyWork from "./pages/MyWork";
import Market from "./pages/Market";
import News from "./pages/News";
import About from "./pages/AboutMe";
import Contact from "./pages/ContactMe";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/market" element={<Market />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
