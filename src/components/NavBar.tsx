import { useState } from "react"

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const handleMobileBtn = () => {
    setShowMobileMenu(!showMobileMenu)
  }
  
  return (
    <header className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          {/* LEFT SIDE */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Mangas</a>
            <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Novelas Ligeras</a>
          </nav>
          {/* MOBILE BUTTON */}
          <div className="md:hidden flex items-center">
            <button onClick={ handleMobileBtn }>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* CENTER */}
          <div className="flex space-x-4">
            {/* NAV LOGO */}
            <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="font-bold md:text-lg">Manga Store</span>
            </a>
          </div>
          {/* RIGHT SIDE */}
          <div className="flex items-center space-x-1">
            <button className="flex items-center py-2 px-3 hover:bg-yellow-300 bg-yellow-400  hover:text-yellow-800 text-yellow-900 rounded transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span className="font-bold mx-1">(0)</span>
              <span className="hidden md:flex">Carrito</span>
            </button>
          </div>
        </div>
      </div>
      {/* MOBILE MENU */}
      <nav className={`${ !showMobileMenu && "hidden" } md:hidden`}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Mangas</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Novelas Ligeras</a>
      </nav>
    </header>
  )  
}

export default NavBar