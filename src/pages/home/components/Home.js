import React from 'react'
import Hero from './hero'
import TopNav from './topNav'
import DailyTips from "./dailyTips";
import CardData from "./cardData";
import Footer from "./footer";

import "../styles/home.css"

function Home() {
  return (
    <div className='home'>
      <TopNav />
        <DailyTips/>
      <Hero />
      <CardData />
      <Footer />
    </div>
  )
}

export default Home
