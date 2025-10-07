import React from 'react'
import Slider from './Slider/Slider'
import HomeAbout from './HomeAbout/HomeAbout'
import Clients from './Clients/Clients'

const Home = () => {
  return (
    <>
    <div>HOME</div> 
    <Slider/>

    <HomeAbout/>

    <Clients/>
    </>
  )
}

export default Home