import React, { useState } from 'react'
import TopPicks from '../components/TopPicks'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Books = () => {
  const [heading] = useState("Books");

  return (
    <>
      <div style={{backgroundColor:"#021334"}}>
        <Header />
        <TopPicks heading={heading} showContent={true} isHomePage={false}/>
        <Footer />
      </div>
    </>
  )
}

export default Books