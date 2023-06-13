import React, { useEffect, useState } from "react";

const Profile = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        setProfiles(data.results);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <main>
        <div>
          {profiles.length > 0 && (
            <img alt="" src={profiles[0].picture.large} />
          )}
        </div>
        <div>
          <h2>About me:</h2>
          {profiles.length > 0 && (
            <div>
              <p>Name: {profiles[0].name.first}</p>
              <p>Last name: {profiles[0].name.last}</p>
              <p>Email: {profiles[0].email}</p>
              <p>Gender: {profiles[0].gender}</p>
              <p>
                Location: {profiles[0].location.city},
                {profiles[0].location.country}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;
