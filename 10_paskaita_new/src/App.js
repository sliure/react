import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import User from "./pages/User";
import UserId from "./pages/UserId";
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/:id" element={<UserId />} />
      </Routes>
    </div>
  );
};

export default App;
