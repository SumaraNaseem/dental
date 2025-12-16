import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Navbarlogo.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-52 mx-auto py-2 md:py-3  ">
        <div className="flex items-center justify-between ">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeMenu} className="block">
              <img 
                src={logo} 
                alt="Guided Excellence Logo" 
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-[65px] lg:w-[65px] transition-all"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-base xl:text-[20px] font-regular font-afacad">
            <Link 
              to="/how-it-works" 
              className="hover:text-blue-900 transition-colors duration-200 px-2 py-1"
            >
              How It Works
            </Link>
            <Link 
              to="/surgical-guides" 
              className="hover:text-blue-900 transition-colors duration-200 px-2 py-1"
            >
              Surgical Guides
            </Link>
            <Link 
              to="/pricing" 
              className="hover:text-blue-900 transition-colors duration-200 px-2 py-1"
            >
              Pricing
            </Link>
            <Link 
              to="/blog" 
              className="hover:text-blue-900 transition-colors duration-200 px-2 py-1"
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className="hover:text-blue-900 transition-colors duration-200 px-2 py-1"
            >
              About
            </Link>
            <Link 
              to="/contact-us" 
              className="hover:text-blue-900 transition-colors duration-200 px-2 py-1"
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex  items-center space-x-2 xl:space-x-3 text-sm xl:text-[20px] font-bold font-afacad">
            <button className="px-3 xl:px-4 py-1.5 xl:py-4 rounded-full border-2 border-[#0C1152] bg-white text-[#0C1152] uppercase hover:bg-blue-50 transition-colors duration-200 text-xs xl:text-base whitespace-nowrap">
              BOOK A FREE CONSULT
            </button>
            <button className="px-3 xl:px-4 py-1.5 xl:py-4 rounded-full bg-[#0C1152] text-white uppercase hover:bg-[#0C1152] transition-colors duration-200 text-xs xl:text-base whitespace-nowrap">
              SUBMIT YOUR CASE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-blue-900 hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-900"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 top-[73px] bg-white z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full overflow-y-auto px-4 py-6">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-4 mb-6 text-lg font-regular font-afacad">
              <Link 
                to="/how-it-works" 
                onClick={closeMenu}
                className="hover:text-blue-900 transition-colors duration-200 py-2 border-b border-gray-200"
              >
                How It Works
              </Link>
              <Link 
                to="/surgical-guides" 
                onClick={closeMenu}
                className="hover:text-blue-900 transition-colors duration-200 py-2 border-b border-gray-200"
              >
                Surgical Guides
              </Link>
              <Link 
                to="/pricing" 
                onClick={closeMenu}
                className="hover:text-blue-900 transition-colors duration-200 py-2 border-b border-gray-200"
              >
                Pricing
              </Link>
              <Link 
                to="/blog" 
                onClick={closeMenu}
                className="hover:text-blue-900 transition-colors duration-200 py-2 border-b border-gray-200"
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                onClick={closeMenu}
                className="hover:text-blue-900 transition-colors duration-200 py-2 border-b border-gray-200"
              >
                About
              </Link>
              <Link 
                to="/contact-us" 
                onClick={closeMenu}
                className="hover:text-blue-900 transition-colors duration-200 py-2 border-b border-gray-200"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col space-y-3 mt-auto pt-6">
              <button 
                onClick={closeMenu}
                className="w-full px-4 py-3 rounded-full border-2 border-blue-900 bg-white text-blue-900 uppercase font-bold font-afacad hover:bg-blue-50 transition-colors duration-200 text-base"
              >
                BOOK A FREE CONSULT
              </button>
              <button 
                onClick={closeMenu}
                className="w-full px-4 py-3 rounded-full bg-blue-900 text-white uppercase font-bold font-afacad hover:bg-blue-800 transition-colors duration-200 text-base"
              >
                SUBMIT YOUR CASE
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 top-[73px]"
            onClick={closeMenu}
          />
        )}
      </div>
    </nav>
  )
}

export default Navbar
