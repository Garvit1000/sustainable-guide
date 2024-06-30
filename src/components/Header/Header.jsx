import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Header = () => {

  return (

    <header class="header">

    <div class="container">
  
      <div class="header-content">
  
        <h1>Your Sustainable Guide</h1>
  
        <p>Empowering you to make a difference, one step at a time.</p>
  
  
      </div>
  
      <div class="header-image-container">

      <img src={assets.green} alt="Header Image" class="header-image"/>

      <p class="image-text">Explore our comprehensive guide to living a more sustainable lifestyle.</p>

    </div>
  
    </div>
  
  </header>

  );

};

export default Header
