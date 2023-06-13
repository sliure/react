import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import "./UserId.css";

const UserId = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="card">
          <h2>User Details</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>Company: {user.company.name}</p>
          <p>
            Address: {user.address.street}, {user.address.suite},{" "}
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserId;
