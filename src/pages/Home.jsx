import bgVideo from '../assets/homeBg.mp4'
import multipleWorlds from '../assets/multipleWorlds.mp4'
import Pricing from './Pricing'
import Footer from '../components/Footer'
import Products from '../components/Products'
import computer from '../assets/computer.png'
import mobile from '../assets/mobile.png'
import tablet from '../assets/tablet.png'
import vr from '../assets/vr.png'
import './Home.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    console.log('using effect')
    Axios.get('http://localhost:3000/auth/login/success')
      .then((response) => {
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])
  return (
    <div>
      {/* Home Video */}
      <div className="video-container">
        <video autoPlay loop muted className="video-background">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="bg-transparent text-white video-content">
          <h1 className="sm:font-bold sm:text-3xl home-heading">
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
          <button
            className="home-enter-btn"
            onClick={() => navigate('/waitlist')}
          >
            ENTER
          </button>
        </div>
      </div>

      {/* Products */}

      <Products />

      {/* Pricing */}

      <Pricing />

      {/* Device Support */}
      <div className="mt-10 relative w-full h-full flex flex-col overflow-x-hidden">
        <h1 className="m-auto font-bold text-[#864bc9] text-2xl home-heading">
          Multi Device Support
        </h1>
        <div className="flex flex-col lg:flex-row p-6">
          <div className="main-card">
            <div className="sub-card text-white font-bold">
              <div className="flex flex-col items-center">
                <img className="h-1/2 w-1/2" src={computer} alt="PC" />
                <p className="mt-1">Desktop / Laptop</p>
              </div>
            </div>
          </div>
          <div className="main-card">
            <div className="sub-card text-white font-bold">
              <div className="flex flex-col items-center">
                <img className="h-1/2 w-1/2" src={mobile} alt="Mobile" />
                <p className="mt-1">Smartphone</p>
              </div>
            </div>
          </div>
          <div className="main-card">
            <div className="sub-card text-white font-bold">
              <div className="flex flex-col items-center">
                <img className="h-1/2 w-1/2" src={tablet} alt="PC" />
                <p className="mt-1">Tablet / iPad</p>
              </div>
            </div>
          </div>
          <div className="main-card">
            <div className="sub-card text-white font-bold">
              <div className="flex flex-col items-center">
                <img className="h-1/2 w-1/2" src={vr} alt="PC" />
                <p className="mt-1">VR Headset</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multiple Worlds */}
      <div className="mt-10 mb-2 video-container">
        <video autoPlay loop muted className="video-background">
          <source src={multipleWorlds} type="video/mp4" />
        </video>
        <div className="bg-transparent text-white video-content">
          <h1 className="sm:font-bold sm:text-3xl home-heading">
            <span className="text-[#915cce]">
              MUL<span className="text-[#853fd6]">TI</span>
              <span className="text-[#8c4ad8]">PLE</span>
            </span>
            <span className="text-[#9957e6]"> W</span>
            <span className="text-[#8041c7]">O</span>
            <span className="text-[#8153b6]">RL</span>
            <span className="text-[#853cda]">DS</span>
          </h1>
        </div>
      </div>

      {/* Powered By */}

      <div className="mt-10 relative w-full h-full flex flex-col items-center justify-center overflow-x-hidden">
        <h1 className="m-auto mb-2 text-[#864bc9] font-bold text-2xl home-heading">
          Powered By
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center p-6">
          <img
            className="w-1/2 lg:w-1/4 m-auto"
            src="https://images.pexels.com/photos/8998295/pexels-photo-8998295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="PC"
          />
          <img
            className="w-1/2 lg:w-1/4 m-auto"
            src="https://images.pexels.com/photos/8998292/pexels-photo-8998292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Mobile"
          />
        </div>
      </div>

      {/* Footer */}

      <Footer />
    </div>
  )
}

export default Home
