import { useState, useEffect } from "react"

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
      <a href="#" className={ navStyle }>Mangas</a>
      <a href="#" className={ navStyle } >Novelas Ligeras</a>
    </>
  )
}

export default NavBar