import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Home from './pages/Home.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import SurgicalGuides from './pages/SurgicalGuides.jsx'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Footer from './Components/Footer.jsx'



export default function App() {
  return (
    <Router>
      <div className="font-afacad">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/surgical-guides" element={<SurgicalGuides />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}