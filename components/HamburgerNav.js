import { useEffect, useRef } from 'react'
import { gsap, Linear, Elastic } from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import Hamburger from './Hamburger'
import Link from 'next/link'
import { links } from '../public/static/links'
import { useRouter } from 'next/router'

gsap.registerPlugin(ScrollToPlugin)

const HamburgerNav = ({ navOpen, setNavOpen, handleLink }) => {
  const navTL = useRef()
  const router = useRouter()

  useEffect(() => {
    navTL.current = gsap.timeline({ defaults: { ease: Linear } })
    navTL.current
      .fromTo('#navContainer', { display: 'none' }, { display: 'block' })
      .fromTo('#navContainer', { height: 0 }, { duration: 0.75, height: 'auto' }, '<')
      .fromTo('#linkContainer li', { y: 20, opacity: 0, pointerEvents: 'none' }, { y: 0, opacity: 1, pointerEvents: 'auto', stagger: 0.15, duration: 1, ease: Elastic.easeOut.config(1, 1) }, '<+0.15')
  }, [])

  useEffect(() => {
    navOpen ? navTL.current.timeScale(1).play() : navTL.current.timeScale(3).reverse()
  }, [navOpen])

  return (
    <>
      <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
      <nav id="navContainer" className='absolute top-[66px] right-6 md:hidden dark:bg-darksecondary bg-slate-200 shadow-[inset_0_0_6px_0px_rgba(0,0,0,0.5)] rounded-xl hidden'>
        <ul id='linkContainer' className="flex flex-col p-4 md:hidden my-children">
          {links.map((link, index) =>
            <li key={index}>
              <Link href={link.href}>
                <a title={link.title} onClick={e => handleLink(e, link.href)} className={`text-xl font-bold ${link.href === router.asPath ? 'text-pink-500 pointer-events-none cursor-default' : 'dark:hover:text-cyan-300 hover:text-[#865125]'}`}  > {link.title}</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  )
}

export default HamburgerNav
