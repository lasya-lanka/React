import React, { useEffect, useState } from 'react'

const UsersTable = () => {
    const [users,setUsers] = useState([])
    useEffect(() =>{
        const fetchUsers = async() => {
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await response.json()
                console.log(data);
                
                setUsers(data)
            }catch (error){
                console.error("Error fetching users: ",error);
            }
        }
        fetchUsers()
    },[])
  return (
    <>
    <div style={{padding:"20px"}}>
        <h2>Users Table</h2>
        <table border='1' cellPadding='10' cellSpacing='0'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0?(users.map((user) =>(
                    <tr key ={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                    </tr>
                ))):(
                    <tr>
                        <td colSpan='5'>Loading...</td>
                    </tr>
                )}
            </tbody>

        </table>
    </div>
    </>
  )
}

export default UsersTable