import { useEffect, useRef } from 'react'
import { gsap, Linear, Back } from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import Hamburger from './Hamburger'
import Link from 'next/link'
import { links } from '../public/static/data'
import { useRouter } from 'next/router'

gsap.registerPlugin(ScrollToPlugin)

const HamburgerNav = ({ navOpen, setNavOpen, handleLink }) => {
  const navTL = useRef()
  const router = useRouter()

  useEffect(() => {
    navTL.current = gsap.timeline({ defaults: { ease: Linear } })
    navTL.current
      .fromTo('#navContainer', { display: 'none' }, { display: 'block' })
      .fromTo('#navContainer', { height: 0 }, { duration: 1.8, height: 'auto' }, '<')
      .fromTo('#linkContainer a', { opacity: 0, y: 10, pointerEvents: 'none' }, { opacity: 1, pointerEvents: 'auto', stagger: 0.3, duration: 0.3, y: 0, ease: Back.easeOut.config(4) }, '<+0.3')
    //.fromTo('#navContainer', { borderTopLeftRadius: 0, borderTopRightRadius: 0 }, { borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' })
  }, [])

  useEffect(() => {
    navOpen ? navTL.current.timeScale(2).play() : navTL.current.timeScale(5).reverse()
  }, [navOpen])

  return (
    <>
      <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
      <div id="navContainer" className='z-50 absolute top-[66px] right-6 md:hidden dark:bg-darksecondary bg-slate-200 shadow-[inset_0_0_6px_0px_rgba(0,0,0,0.5)] rounded-2xl hidden'>
        <div id='linkContainer' className="flex flex-col p-4 md:hidden my-children">
          {links.map((link, index) =>
            <Link href={link.href} key={index}>
              <a title={link.title} onClick={e => handleLink(e, link.href)} className={`text-xl font-bold ${link.href === router.asPath ? 'text-pink-500 pointer-events-none cursor-default' : 'dark:hover:text-cyan-300 hover:text-[#865125]'}`}  > {link.title}</a>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default HamburgerNav
