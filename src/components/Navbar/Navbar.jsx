import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="text" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#personalizedguide' onClick={()=>setMenu("personalizedguide")} className={menu==="personalizedguide"?"active":""} >Personalized Guide</a>
        <a href='#resources' onClick={()=>setMenu("resources")} className={menu==="resources"?"active":""} >Resources</a> 
       <a href='#communityforum' onClick={()=>setMenu("CommunityForum")} className={menu==="CommunityForum"?"active":""} >Community Forum</a> 
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
    </div>
  );
};

export default Navbar;