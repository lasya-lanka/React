import React from 'react'
import './Navbar.css'
import assets from "../../assets/Images/images.js";

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className="nav-left flex-div">
            <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false )} src={assets.menu} alt="menu-icon" />
            <img className='logo' src={assets.logo} alt='logo' />
        </div>
        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
                <input type="text" placeholder='Search'/>
                 <img src={assets.search} alt="search" />
            </div>
        </div>
        <div className="nav-right flex-div">
            <img src={assets.upload} alt="upload" />
            <img src={assets.more} alt="more" />
            <img src={assets.notification} alt="notification" />
            <img src={assets.jack} className='user-icon' alt="user_profile" />

        </div>
    </nav>
  )
}

export default Navbar