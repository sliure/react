import { Link } from "react-router-dom";
import { MAIN_ROUTE, CONTACTS_ROUTE, PROFILE_ROUTE } from "../../routes/const";
import "./Topbar.css";

const Topbar = () => {
  return (
    <nav className="navigation">
      <div>Logo</div>
      <div>
        <Link to={MAIN_ROUTE}>Home</Link>
      </div>
      <div>
        <Link to={CONTACTS_ROUTE}>Contacts</Link>
      </div>
      <div>
        <Link to={PROFILE_ROUTE}>Profile</Link>
      </div>
    </nav>
  );
};

export default Topbar;
