import { useEffect, useRef } from 'react'
import { gsap, Linear, Back } from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import Hamburger from './Hamburger'
import Links from './Links'
gsap.registerPlugin(ScrollToPlugin)

const HamburgerNav = ({ navOpen, setNavOpen }) => {
  const navTL = useRef()

  useEffect(() => {
    navTL.current = gsap.timeline({ defaults: { ease: Linear } })
    navTL.current
      .fromTo('#navContainer', { opacity: 0, height: 0 }, { opacity: 1, duration: 1, height: 'auto' })
      .fromTo('#linkContainer a', { opacity: 0, y: 20 }, { opacity: 1, stagger: 0.15, duration: 0.3, y: 0, ease: Back.easeOut.config(4) }, '<+0.15')
  }, [])

  useEffect(() => {
    navOpen ? navTL.current.timeScale(1).play() : navTL.current.timeScale(2).reverse()
  }, [navOpen])

  return (
    <>
      <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
      <div
        className={`z-50 absolute mt-[50px] right-6 w-max md:hidden dark:bg-slate-900  bg-slate-200 border-2 border-slate-500 opacity-0 rounded-2xl ${navOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        id="navContainer"
      >
        <div className="flex flex-col p-4 text-xl my-children" id='linkContainer'>
          <Links />
        </div>
      </div>
    </>
  )
}

export default HamburgerNav
