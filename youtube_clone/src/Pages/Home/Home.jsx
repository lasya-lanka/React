import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";

const Home = ({ sidebar }) => {
  const [catergory, setCategory] = useState(0);
  console.log("categiry", catergory)
  return (
    <>
      <Sidebar
        sidebar={sidebar}
        catergory={catergory}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed catergory={catergory} />
      </div>
    </>
  );
};

export default Home;
