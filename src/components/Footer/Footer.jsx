import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="text"/>
            <p>Greenway Guru, your personalized sustainability guide! Our mission is to empower you with tailored tips and resources to help you live a more sustainable lifestyle. our guide offers practical advice and actionable steps based on your unique preferences and circumstances </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>

        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link >Guide</Link></li>
            <li><Link>Tips</Link></li>
            <li><Link >Resources</Link></li>
            </ul>

        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
            <li>+91 123456789</li>
            <li>contact@Greenway.com</li>
            </ul>
            
        </div>

      </div>
      <hr/>
      <p className="footer-copyright">copyright 2024 @GreenwayGuru.com-All Right Reserved.</p>
    </div>
  )
}

export default Footer
