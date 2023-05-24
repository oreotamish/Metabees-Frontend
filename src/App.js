import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Pricing from './pages/Pricing'
import Home from './pages/Home'
import View from './pages/View'
import PricePage from './pages/PricePage'
import About from './pages/About'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import PasswordReset from './pages/PasswordReset/PasswordReset'

import { UserContextProvider } from './UserContext'

function App() {
  
  return (
    <UserContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/view" element={<View />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pricing/:id" element={<PricePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/passwordreset/:id/:token" element={<PasswordReset />} />
        </Routes>
      </Router>
    </UserContextProvider>
  )
}

export default App
