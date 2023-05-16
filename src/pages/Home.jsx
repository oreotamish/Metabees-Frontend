import React from 'react'
import bgVideo from '../assets/homeBg.mp4'
import './Home.css'

function Home() {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="video-background">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="bg-transparent text-white content">
        <h1 className="font-bold text-3xl">
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
  )
}

export default Home
