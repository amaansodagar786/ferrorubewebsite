import {React , useEffect } from 'react'
import Slider from './Slider/Slider'
import HomeAbout from './HomeAbout/HomeAbout'
import Clients from './Clients/Clients'

const Home = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <>
    {/* <div>HOME</div>   */}
    <Slider/>

    <HomeAbout/>

    <Clients/>
    </>
  )
}

export default Home