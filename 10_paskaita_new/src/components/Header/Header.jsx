import { Routes, Route, Link } from "react-router-dom";
import Main from "../../pages/Main";
import User from "../../pages/User";
import "./Header.css"

const Header = () => {
  return (
    <div>
      <div className="nav">
        <p>
          <Link to="/main">Main</Link>
        </p>
        <p>
          <Link to="/users">User</Link>
        </p>
      </div>


      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/users" element={<User />} />
      </Routes>
    </div>
  );
};

export default Header;
