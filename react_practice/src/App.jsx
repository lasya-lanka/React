import React from 'react';
import Child from "./Child";
import Child1 from "./Child1";
import Child3 from "./Child3";
import Child4 from "./Child4";
const App = () => {
  // 4. Passing Functions
  const handleGreet = (name)=> {
    alert(`Hello,${name}!`)
  }


  // 3. Passing Objects / Arrays
  // const user = { name: "Lasya", city: "Hyderabad" };
  // const skills = ["JS", "React", "Node"];
  
  // 2. Passing Variables
  // const course = 'React'
  // const duration = 3
   return (
     <>

     {/* <Child name = 'lasya' age = {22} isStudent={true}/> */}
     {/* <Child1 course={course} duration={duration}/> */}
     {/* <Child3 user={user} skills={skills} /> */}
     <Child4 onGreet={handleGreet}/>
     </>
   )
}

export default App