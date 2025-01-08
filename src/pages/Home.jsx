import React, { useState } from 'react'
import Hero from '../components/Hero.jsx'
import TopPicks from '../components/TopPicks.jsx'
import Body from '../components/Body.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  const [heading] = useState("Top Picks");
  const [isHomePage] = useState(true);
 
  return (
    <div>
      <Hero />
      <TopPicks heading={heading} isHomePage={isHomePage}/>
      <Body />
      <Footer />
    </div>
  )
}

export default Home