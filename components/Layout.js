import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollTop from './ScrollTop.js'
import { useRouter } from 'next/router'
import { gsap } from 'gsap';

const Layout = ({ children }) => {
	const router = useRouter()

	useEffect(() => {
		const aniStart = (url) => {
			if (url !== router.asPath) {
				const tl = gsap.timeline();
				tl.set('#transition', { opacity: 0 })
					.to('#transition', {
						opacity: 1,
						duration: 0.6,
						ease: 'linear',
					});
			}
		}

		router.events.on('routeChangeStart', aniStart);
		return () => {
			router.events.off('routeChangeStart', aniStart);
		};
	}, [router]);

	return (
		<div>
			<Navbar />
			<div id='transition'>{children}</div>
			<ScrollTop />
			<Footer />
		</div>
	)
}

export default Layout
