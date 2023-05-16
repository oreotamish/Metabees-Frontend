import React from 'react'
import bgVideo from '../assets/homeBg.mp4'
import './Home.css'
import Footer from '../components/Footer'
import Pricing from './Pricing'

function Home() {
  return (
    <>
      {/* Video Slide */}
      <div className="video-container">
        <video autoPlay loop muted className="video-background">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="bg-transparent text-white video-content">
          <h1 className="sm:font-bold sm:text-3xl">
            <span className="text-[#6e25c0]">
              T<span className="text-[#853fd6]">h</span>
              <span className="text-[#8c4ad8]">e</span>
            </span>
            <span className="text-[#9957e6]"> Future</span>{' '}
            <span className="text-[#8041c7]">Of</span>{' '}
            <span className="text-[#b889ee]">E</span>
            <span className="text-[#a46ee2]">-Commerce</span>{' '}
            <span className="text-[#853cda]">Is</span>{' '}
            <span className="text-[#9252db]">Here</span>
          </h1>
          <button className="home-enter-btn">ENTER</button>
        </div>
      </div>

      {/* Device Support Slide */}
      <div className="mt-10 relative w-full h-full flex flex-col overflow-x-hidden">
        <h1 className="m-auto text-white font-bold">Multi Device Support</h1>
        <div className="flex flex-col lg:flex-row p-6">
          <div class="main-card">
            <div class="sub-card text-white font-bold">PC</div>
          </div>
          <div class="main-card">
            <div class="sub-card text-white font-bold">Mobile</div>
          </div>
          <div class="main-card">
            <div class="sub-card text-white font-bold">Tablet</div>
          </div>
          <div class="main-card">
            <div class="sub-card text-white font-bold">VR</div>
          </div>
        </div>
      </div>

      {/* Powered By Slide */}
      <Pricing />
      <Footer />
    </>
  )
}

export default Home
