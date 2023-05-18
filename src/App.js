import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Pricing from './pages/Pricing'
import Home from './pages/Home'
import View from './pages/View'
import PricePage from './pages/PricePage'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<View />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pricing/:id" element={<PricePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
