import React, { useEffect, useState } from "react";

const UserCards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {2
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  };

  const cardStyle = {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  return (
    <div style={containerStyle}>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} style={cardStyle}>
            <h3>{user.name}</h3>
            <p>👤 {user.username}</p>
            <p>📧 {user.email}</p>
            <p>🏙️ {user.address.city}</p>
            <p>🏢 {user.company.name}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserCards;
