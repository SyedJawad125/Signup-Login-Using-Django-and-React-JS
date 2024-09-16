import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerSlider from './Banner_slider'
import '../App.css'

// npm install react-slick slick-carousel

const Home = () => {

  return (
    <div className="home-container">
      <div className="banner-slider">
        <BannerSlider />
      </div>
    </div>
  )
}
      
export default Home