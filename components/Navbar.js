import { useState, useRef, useEffect } from 'react'
import HamburgerNav from './HamburgerNav'
import Darkbtn from './Darkbtn'
import ToggleBorder from './ToggleBorder'
import Link from 'next/dist/client/link'
import { links } from '../public/static/links'
import { useRouter } from 'next/router'
import { gsap, Sine } from 'gsap'

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false)
	const [bordersVisible, setBordersVisible] = useState(false)
	const [animating, setAnimating] = useState(false)
	const router = useRouter()
	const transitionTL = useRef()
	transitionTL.current = gsap.timeline();

	const handleLink = (e, href) => {
		e.preventDefault();
		if (href !== router.asPath && !animating) {
			setAnimating(true)
			router.prefetch(href)
			transitionTL.current.to('.transitionBar', { left: 0, right: 'unset', width: '100%', duration: 0.4, ease: Sine.easeIn, stagger: { each: 0.05, from: 'top' }, onComplete: () => router.push(href) })
			navOpen && setNavOpen(false)
			bordersVisible && setBordersVisible(false)
		}
	}

	useEffect(() => {
		router.isReady && transitionTL.current.to('.transitionBar', { left: 'unset', right: 0, width: 0, duration: 0.4, ease: Sine.easeOut, stagger: { each: 0.05, from: 'bottom' }, onComplete: () => setAnimating(false) })
	}, [router])

	return (
		<div className='flex items-center justify-between px-6 py-3'>
			<Link href="/">
				<a onClick={e => handleLink(e, '/')} className={`text-4xl font-bold ${(router.asPath === '/' || animating) && 'pointer-events-none'}`}>Logo</a>
			</Link>
			<div className='flex-row hidden md:flex ml-children'>
				{links.map((link, index) =>
					<Link href={link.href} key={index}>
						<a onClick={e => handleLink(e, link.href)} title={link.title} className={`text-xl font-bold ${link.href === router.asPath ? 'text-pink-500' : 'dark:hover:text-cyan-300 hover:text-[#865125]'} ${(link.href === router.asPath || animating) && 'pointer-events-none'}`}>{link.title}</a>
					</Link>
				)}
			</div>
			<div className='flex items ml-children'>
				<ToggleBorder bordersVisible={bordersVisible} setBordersVisible={setBordersVisible} />
				<Darkbtn />
				<HamburgerNav navOpen={navOpen} setNavOpen={setNavOpen} handleLink={handleLink} />
			</div>
		</div>
	)
}

export default Navbar
