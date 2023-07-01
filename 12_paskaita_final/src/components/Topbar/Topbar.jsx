import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { PROFILE_ROUTE, topbarNavigationItems } from "../../routes/const";
import { showUserFullName } from "../../utils/user";
import { FaUserCircle } from "react-icons/fa";
import "./Topbar.scss";

const Topbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="navigation">
      <div>
        <img
          src="https://us.123rf.com/450wm/barrazain/barrazain2003/barrazain200301284/143378312-uj-logo-letter-monogram-with-triangle-shape-design-template-isolated-on-black-background.jpg?ver=6"
          alt=""
        />
      </div>
      <div className="navigation-items">
        {topbarNavigationItems.map((navItem) => (
          <Link to={navItem.route} key={navItem.title}>
            {navItem.title}
          </Link>
        ))}
      </div>
      <Link to={PROFILE_ROUTE} className="user-container">
        <FaUserCircle />
        {showUserFullName(user)}
      </Link>
    </nav>
  );
};

export default Topbar;
