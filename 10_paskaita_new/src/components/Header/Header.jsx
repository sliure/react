import {  Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div>
      <div className="nav">
        <p>
          <Link to="/">Main</Link>
        </p>
        <p>
          <Link to="/users">User</Link>
        </p>
      </div>
    </div>
  );
};

export default Header;
