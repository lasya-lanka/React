import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import assests from '../../assets/images/images'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={assests.hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={assests.hero_title} alt=""className='caption-img' />
          <p>Discovering his ties to a secret ancient order,
             a young man living in modern Istanbul embarks on quest
              to save the coty from an immortal enemy.</p>
              <div className="hero-btns">
                <button className='btn'><img src={assests.play_icon} alt="" />Play</button>
                <button className='btn dark-btn'><img src={assests.info_icon} alt="" />More info</button>
              </div>  
              <TitleCards />          
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={'top_rated'}/>
        <TitleCards title={"Only on Netflix"} category={'popular'}/>
        <TitleCards title={"Upcoming..."} category={'upcoming'}/>
        <TitleCards title={"Top picks for you"} category={'now_playing'}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home