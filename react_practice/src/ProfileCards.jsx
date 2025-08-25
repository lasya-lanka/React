import React, { useEffect, useState } from "react";

const ProfileCards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    padding: "20px",
  };

  const cardStyle = {
    width: "250px",
    background: "#fff",
    borderRadius: "12px",
    padding: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const avatarStyle = {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "#4CAF50",
    color: "#fff",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 10px auto",
  };

  return (
    <div style={containerStyle}>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} style={cardStyle}>
            <div style={avatarStyle}>{user.name[0]}</div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
            <p>{user.company.name}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfileCards;
