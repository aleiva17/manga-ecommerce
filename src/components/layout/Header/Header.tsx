import CartWidget from "./CartWidget"
import NavBar from "./NavBar"
import { useState } from "react"
import { Link } from 'react-router-dom'

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [quantityProducts, setQuantityProducts] = useState(0)

  const handleMobileBtn = () => {
    setMobileMenu(!mobileMenu)
  }

  return (
    <header className="bg-primary-classic">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          {/* LEFT SIDE */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavBar isMobile={ false } />
          </nav>
          {/* MOBILE BUTTON */}
          <div className="md:hidden flex items-center">
            <button onClick={ handleMobileBtn } className="text-txt-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* CENTER */}
          <div className="flex space-x-4">
            {/* NAV LOGO */}
            <Link to="/" className="flex items-center py-5 px-2 text-txt-primary hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 text-accent-classic" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="font-bold md:text-lg">Manga Store</span>
            </Link>
          </div>
          {/* RIGHT SIDE */}
          <div className="flex items-center space-x-1">
            <CartWidget quantity={ quantityProducts } />
          </div>
        </div>
      </div>
      {/* MOBILE MENU */}
      <nav className={`${ !mobileMenu && "hidden" } md:hidden`}>
        <NavBar isMobile={ true } />
      </nav>
    </header>
  )
}

export default Header