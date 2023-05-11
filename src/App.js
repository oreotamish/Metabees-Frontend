import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
// import LogIn from './pages/LogIn'
import LogIn2 from './pages/LogIn2/Login2'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn2 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
