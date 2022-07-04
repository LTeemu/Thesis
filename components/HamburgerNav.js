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
      .fromTo('#navContainer', { display: 'none' }, { display: 'block' })
      .fromTo('#navContainer', { height: 0 }, { duration: 1.8, height: 'auto' }, '<')
      .fromTo('#linkContainer a', { opacity: 0, y: 10, pointerEvents: 'none' }, { opacity: 1, pointerEvents: 'auto', stagger: 0.3, duration: 0.3, y: 0, ease: Back.easeOut.config(4) }, '<+0.3')
  }, [])

  useEffect(() => {
    navOpen ? navTL.current.timeScale(1.5).play() : navTL.current.timeScale(3).reverse()
  }, [navOpen])

  return (
    <>
      <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
      <div
        className={`z-50 absolute top-[66px] right-6 md:hidden dark:bg-slate-900 bg-slate-200 shadow-[inset_0_0_6px_0px_rgba(0,0,0,0.5)] rounded-b-2xl`}
        id="navContainer"
      >
        <div className="flex flex-col p-4 text-xl md:hidden my-children" id='linkContainer'>
          <Links />
        </div>
      </div>
    </>
  )
}

export default HamburgerNav
