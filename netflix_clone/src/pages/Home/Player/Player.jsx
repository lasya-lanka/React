import React, { useEffect, useState } from "react";
import "./Player.css";
// import Back from "/LASYA/React/netflix_clone/src/assets/images/images";
//import search_icon from '../../assets/search_icon.svg?url'
// import back_arrow_icon from "/back_arrow_icon.png";
import assets from "../../../assets/images/images";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {

  const {id}= useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] =useState({
    name:'',
    key:"",
    published_at:'',
    type:''
  })
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTMwMGQwOWY5OGY3OWVjMzk5NzE2MDM4Y2E0MWQ2YyIsIm5iZiI6MTc1NjgxMjk1Ni4yOSwic3ViIjoiNjhiNmQ2OWNkMzI3ZGYzOGZhMjAxMzY1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.BDC1gX1uH97xi3x7LO32UPwSxnRnA6dh3PcZ8NMnFAc'
  }
};

useEffect(()=> {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));

},[])

  return (
    <div className="player">
      <img src={assets.back_arrow} alt="back" onClick={() =>{navigate(-2)}} />

      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameborder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
