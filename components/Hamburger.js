import { FaBars, FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react'
const Hamburger = ({ navOpen, setNavOpen }) => {
  const [disabled, setDisabled] = useState(false)

  //Hamburger spam cooldown
  useEffect(() => {
    setDisabled(true)
    setTimeout(() => {
      setDisabled(false)
    }, 200)
  }, [navOpen])

  const OpenNav = () => {
    window.scrollY !== 0 && window.scrollTo({ top: 0, behavior: 'instant' })
    setNavOpen(true)
  }

  return (
    <div id="hamburger" className={`z-50 md:hidden cursor-pointer ${disabled ? 'pointer-events-none' : 'pointer-events-auto'}`}>
      {navOpen ? <FaTimes size={35} onClick={() => setNavOpen(false)} /> : <FaBars size={35} onClick={OpenNav} />}
    </div>
  )
}

export default Hamburger
