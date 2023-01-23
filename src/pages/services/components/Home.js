import React from 'react'
import Hero from './hero'
import TopNav from './topNav'
import CardData from "./cardData";
import Footer from "./footer";

import "../styles/home.css"

function Home() {
  return (
    <div className='home'>
      <TopNav />
      <Hero />
      <CardData />
      <Footer />
    </div>
  )
}

export default Home
