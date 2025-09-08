import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({title, category}) => {
  const [apiData,setApiData] = useState([])
  
const cardsRef = useRef();
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTMwMGQwOWY5OGY3OWVjMzk5NzE2MDM4Y2E0MWQ2YyIsIm5iZiI6MTc1NjgxMjk1Ni4yOSwic3ViIjoiNjhiNmQ2OWNkMzI3ZGYzOGZhMjAxMzY1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.BDC1gX1uH97xi3x7LO32UPwSxnRnA6dh3PcZ8NMnFAc'
  }
};


const handleWheel = (event)=>{
  event.preventDefault()
  cardsRef.current.scrollLest += event.deltaY;
}
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel',handleWheel)
},[])

  return (
    <div className='titlecards'>
      <h2>{title? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index) =>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt="" />
            <p>{card.original_title}</p>
          </Link>

        })}
      </div>
    </div>
  )
}

export default TitleCards