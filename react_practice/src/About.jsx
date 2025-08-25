import React from 'react';
import { Link,Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
        <h2>About Page</h2>
        <p>This is the About page. Learn more about us here.</p>
        <nav>
            <Link to="team" style={{ marginRight: "10px" }}>Our Team</Link>
            <Link to="history">Our History</Link>
            
        </nav>
        <Outlet/>
        <hr />
    </div>
  )
}

export default About