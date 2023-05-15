import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp'
import LogIn2 from './pages/LogIn/LogIn'
import Pricing from './pages/Pricing/Pricing'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn2 />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
