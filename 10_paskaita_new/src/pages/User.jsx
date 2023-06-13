import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import "./User.css";

const User = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleUserDetail = (userId) => {
    navigate(`/users/${userId}`);
  };

  return (
    <main>
      <Header />
      <div className="user-cards">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <button onClick={() => handleUserDetail(user.id)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default User;
