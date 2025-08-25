import React, { useEffect, useState } from "react";

const AccordionUsers = () => {
  const [users, setUsers] = useState([]);
  const [openId, setOpenId] = useState(null);

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

  const itemStyle = {
    margin: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
  };

  const headerStyle = {
    backgroundColor: "#af4c5cff",
    color: "#fff",
    padding: "12px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const bodyStyle = {
    padding: "12px",
    backgroundColor: "#f9f9f9",
    fontSize: "14px",
  };

  return (
    <div style={{ padding: "20px" }}>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} style={itemStyle}>
            <div
              style={headerStyle}
              onClick={() => setOpenId(openId === user.id ? null : user.id)}
            >
              {user.name}
            </div>
            {openId === user.id && (
              <div style={bodyStyle}>
                <p>📧 {user.email}</p>
                <p>📞 {user.phone}</p>
                <p>🏙️ {user.address.city}</p>
                <p>🏢 {user.company.name}</p>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AccordionUsers;
