import React from 'react'
import './Home.css'
import Header from '../../Header/Header'
import Resources from '../../Resources/Resources'
import Guide from '../../Guide/Guide'
import PersonlizedGuide from '../../PersonalizedGuide/PersonalizedGuide'
import CommunityForum from '../../CommunityForum/CommunityForum'
const Home = () => {


  return (
    <div>
        <Header/> 
      <Resources/>
      <PersonlizedGuide/>
      <Guide/> 
      <CommunityForum/>  
    </div>
  )
}

export default Home
