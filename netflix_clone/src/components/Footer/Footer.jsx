import React from 'react'
import './Footer.css'
import assests from '../../assets/images/images'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={assests.youtube_icon} alt="" />
        <img src={assests.twitter_icon} alt="" />
        <img src={assests.instagram_icon} alt="" />
        <img src={assests.facebook_icon} alt="" />
      </div>
      <ul>
        <li>Audio Decreption</li>
        <li>Help Center </li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Telations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privecy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 1997- 2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer