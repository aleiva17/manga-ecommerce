import { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom'

interface INavBar {
  isMobile: boolean
}

const NavBar = ({ isMobile }: INavBar) => {
  const [navStyle, setNavStyle] = useState("")
  
  useEffect(() => {
    isMobile ? 
      setNavStyle("block py-2 px-4 text-sm text-txt-primary bg-primary-dark hover:bg-primary-light") :
      setNavStyle("py-5 px-3 text-txt-primary hover:text-accent-classic")
  }, [isMobile])

  return (
    <>
      <NavLink to="/" className={ navStyle }>Inicio</NavLink>
      <NavLink to="/category/mangas" className={ navStyle }>Mangas</NavLink>
      <NavLink to="/category/novelas" className={ navStyle }>Novelas Ligeras</NavLink>
    </>
  )
}

export default NavBar