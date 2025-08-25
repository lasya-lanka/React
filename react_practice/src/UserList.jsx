import React, { useEffect, useState } from "react";

const UserList = () => {
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

  const listStyle = { padding: "20px" };
  const itemStyle = {
    background: "#f9f9f9",
    margin: "10px 0",
    padding: "15px",
    borderLeft: "6px solid #4CAF50",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  };

  return (
    <div style={listStyle}>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} style={itemStyle}>
            <h3>{user.name}</h3>
            <p>📧 {user.email} | 📞 {user.phone}</p>
            <p>🏙️ {user.address.city} | 🏢 {user.company.name}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserList;
