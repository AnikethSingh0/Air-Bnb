import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import Info from './Info';
import Housing from './Housing';
const Home = () => {
  return (
    <div className="max-w-[1800px] mx-auto ">
        <Navbar />
        <Hero />
        <Info/>
        <Housing/>
    </div>
  )
}

export default Home