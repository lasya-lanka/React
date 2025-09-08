import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import assests from '../../assets/images/images'
import { logout } from '../../firebase'

const Navbar = () => {
    const navRef = useRef()
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY >= 80){
                navRef.current.classList.add('nav-dark')
            }else{
                navRef.current.classList.remove('nav-dark')
            }
        })
    },[])
  return (
    <div ref={navRef} className='navbar'>
        <div className="navbar-left">
            <img src={assests.logo} alt="" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Language</li>
            </ul>
        </div>
        <div className="navbar-right"> 
            <img src={assests.search_icon} alt="" className='icons' />
            <p>Children</p>
            <img src={assests.bell_icon} alt="" className='icons' />
            <div className="navbar-profile">
                <img src={assests.profile_img} alt="" className='profile' />
                <img src={assests.caret_icon} alt=""  />
                <div className="dropdown">
                    <p onClick={()=>{logout()}}>Sign out of Netflix</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar