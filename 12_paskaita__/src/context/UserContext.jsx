import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LOGIN_ROUTE } from "../routes/const";
import { checkUserCredentials } from "../utils/user";

const UserContext = createContext({
  user: null,
  isLoggedIn: false,
  handleLogin: () => null,
  handleLogout: () => null,
  handleRegister: () => null,
  handleUpdateUser: () => null,
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user"))); // null | {email: "test", password: "asd123"}
  const isLoggedIn = !!user; // null | {email: "test", password: "asd123"}
  const navigate = useNavigate();
  // !!null => false
  // !!{email: "test", password: "asd123"} => true

  const handleLogin = (user, setError) => {
    axios
      .get("http://localhost:3000/users")
      .then((resp) => resp.data)
      .then((response) => {
        const existingUser = checkUserCredentials(response, user);
        if (existingUser) {
          setUser(existingUser);
          localStorage.setItem("user", JSON.stringify(existingUser));
        } else {
          setError("User email or password is incorrect.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.setItem("user", null);
    navigate(LOGIN_ROUTE);
  };

  const handleRegister = (newUser) => {
    axios
      .post("http://localhost:3000/users", newUser)
      .then(() => {
        navigate(LOGIN_ROUTE);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdateUser = (updatingUser) => {
    axios
      .put(`http://localhost:3000/users/${user.id}`, updatingUser)
      .then((resp) => resp.data)
      .then((response) => {
        setUser(response);
        localStorage.setItem("user", JSON.stringify(response));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn,
        handleLogin,
        handleLogout,
        handleRegister,
        handleUpdateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
