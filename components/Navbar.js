import { useState, useEffect } from 'react'
import HamburgerNav from './HamburgerNav'
import Darkbtn from './Darkbtn'
import ToggleBorder from './ToggleBorder'
import Link from 'next/dist/client/link'
import { links } from '../public/static/data'
import { useRouter } from 'next/router'
import { gsap, Power4 } from 'gsap';

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false)
	const router = useRouter()
	const tl = gsap.timeline();

	const handleLink = (e, href) => {
		e.preventDefault();
		if (href !== router.asPath) {
			const tl = gsap.timeline();
			tl.to('#transition', { opacity: 0, duration: 0.5, ease: Power4.easeOut, onComplete: () => router.push(href) })
			navOpen && setNavOpen(false)
		}
	}

	useEffect(() => {
		const routeChangeAnim = () => {
			tl.to('#transition', {
				opacity: 1,
				duration: 0.5,
				ease: Power4.easeIn,
			});
		}

		router.events.on('routeChangeStart', routeChangeAnim);

		return () => {
			router.events.off('routeChangeStart', routeChangeAnim);
		};
	}, [router]);

	return (
		<div className='flex justify-between h-[50px] my-2 items-center px-6'>
			<Link href="/">
				<a onClick={e => handleLink(e, '/')} className={`text-4xl font-bold ${router.asPath === '/' && 'cursor-default'}`}>Logo</a>
			</Link>
			<div className='flex-row hidden md:flex ml-children'>
				{links.map((link, index) =>
					<Link href={link.href} key={index}>
						<a onClick={e => handleLink(e, link.href)} title={link.title} className={`text-xl font-bold ${link.href === router.asPath ? 'text-pink-500 pointer-events-none cursor-default' : 'dark:hover:text-cyan-300 hover:text-[#865125]'}`}>{link.title}</a>
					</Link>
				)}
			</div>
			<div className='flex items ml-children'>
				<ToggleBorder />
				<Darkbtn />
				<HamburgerNav navOpen={navOpen} setNavOpen={setNavOpen} handleLink={handleLink} />
			</div>
		</div>
	)
}

export default Navbar
