import { useEffect, useState } from "react";
import axios from "axios";
import "./Contacts.scss";

const Contacts = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchContacts = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.log("Error fetching users:", error);
        });
    };
    fetchContacts();
  }, []);

  return (
    <main>
      <div className="user-cards">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Contacts;
