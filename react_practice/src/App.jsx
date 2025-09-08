import React from 'react';
import Child from "./Child";
import Child1 from "./Child1";
import Child3 from "./Child3";
import Child4 from "./Child4";
// import Useeffect from './Useeffect';
import { BrowserRouter as Router, Routes, Route,NavLink, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Team from "./Team";
import History from "./History";
import UsersTable from './UsersTable';
import UserCards from './UserCards';
import UserList from './UserList';
import ProfileCards from './ProfileCards';
import AccordionUsers from './AccordionUsers';

const App = () => {
  const navStyle = {
    backgroundColor:'gray',
    color:'rgba(255, 255, 255, 1)',
    padding:'20px',
    textAlign:'right',
    borderRadius: "8px",
    textDecoration: 'none'
    
  } 
  const headStyle = {
    textAlign:'center',
    backgroundColor:'gray',
    color:'white'
    
  }
  // const numbers = [1,2,3,4,5]
  // 4. Passing Functions
  // const handleGreet = (name)=> {
  //   alert(`Hello,${name}!`)
  // }

  // 3. Passing Objects / Arrays
  // const user = { name: "Lasya", city: "Hyderabad" };
  // const skills = ["JS", "React", "Node"];
  
  // 2. Passing Variables
  // const course = 'React'
  // const duration = 3
   return (

    <>
     <Router>
      <div>
        <h1 style={headStyle}>Nested Routing example</h1>
        <nav style={navStyle}>
          <NavLink to="/userstable" style={{marginRight:'10px',color:'white'}}>UsersTable</NavLink>
          <NavLink to="/usercards" style={{marginRight:'10px',color:'white'}}>UserCards</NavLink>
          <NavLink to="/userlist" style={{marginRight:'10px',color:'white'}}>UserList</NavLink>
          <NavLink to="/profilecards" style={{marginRight:'10px',color:'white'}}>ProfileCards</NavLink>
          <NavLink to="/accordionusers" style={{color:'white'}}>AccordionUsers</NavLink>
        </nav>
          <hr />
        <Routes>
          <Route path='/userstable' element={<UsersTable/>}/>
          <Route path='/usercards' element={<UserCards/>}/>
          <Route path='/userlist' element={<UserList/>}/>
          <Route path='/profilecards' element={<ProfileCards/>}/>
          <Route path='/accordionusers' element={<AccordionUsers/>}/>
        </Routes>
      </div>
     </Router>
     {/* <UsersTable/> */}
     {/* <UserCards/> */}
     {/* <UserList/> */}
     {/* <ProfileCards/> */}
     {/* <AccordionUsers/> */}

      {/* <Useeffect/> */}
      {/* {numbers.map((numbers) => (numbers*2))} */}
      {/* <Child name = 'lasya' age = {22} isStudent={true}/> */}
      {/* <Child1 course={course} duration={duration}/> */}
      {/* <Child3 user={user} skills={skills} /> */}
      {/* <Child4 onGreet={handleGreet}/> */}

    </>
   );
}

export default App;