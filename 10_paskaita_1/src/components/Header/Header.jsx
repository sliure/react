import { Routes, Route, Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import Main from "../../pages/Main";
import MyWork from "../../pages/MyWork";
import Market from "../../pages/Market";
import News from "../../pages/News";
import About from "../../pages/About";
import Contact from "../../pages/Contact";

const Header = () => {
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

export default Header;
