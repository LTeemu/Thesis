import { useEffect, useRef } from 'react'
import { gsap, Linear, Back } from 'gsap/dist/gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import Hamburger from './Hamburger'

gsap.registerPlugin(ScrollToPlugin)

const HamburgerNav = ({ navOpen, setNavOpen }) => {
  const ScrollToTarget = (target) => {
    setNavOpen(false)
    gsap.to(window, { duration: 0, scrollTo: target })
  }

  const navTL = useRef()
	
  useEffect(() => {
    navTL.current = gsap.timeline({ defaults: { ease: Linear } })
    navTL.current
      .fromTo('#navContainer', { opacity: 0, height: 0 }, { opacity: 1, duration: 1, height: 'auto' })
      .fromTo('#navContainer ul button', { opacity: 0, y: 20 }, { opacity: 1, stagger: 0.15, duration: 0.3, y: 0, ease: Back.easeOut.config(4) }, '<+0.15')
  }, [])

  useEffect(() => {
    navOpen ? navTL.current.timeScale(1).play() : navTL.current.timeScale(2).reverse()
  }, [navOpen])

  return (
    <>
      <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
      <div
        className={`z-50 absolute mt-[50px] right-6 w-max md:hidden dark:bg-slate-900  bg-slate-200 border-2 border-slate-500 opacity-0 rounded-2xl ${
          navOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        id="navContainer"
      >
        <ul className="flex flex-col p-4 text-xl my-children">
          <button type="button" onClick={() => ScrollToTarget('#link1')} id="mobilelink" className="font-bold">
            Scroll1
          </button>

          <button type="button" onClick={() => ScrollToTarget('#link2')} id="mobilelink" className="font-bold">
            Scroll2
          </button>

          <button className="font-bold md:ml-5">Link</button>
          <button className="font-bold md:ml-5">Link</button>
          <button className="font-bold md:ml-5">Link</button>
        </ul>
      </div>
    </>
  )
}

export default HamburgerNav
