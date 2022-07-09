import { gsap } from 'gsap/dist/gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { AiOutlineRocket } from 'react-icons/ai'
gsap.registerPlugin(ScrollToPlugin)
import React, { useState, useEffect } from 'react'

const ScrollTop = () => {
	const [scrollY, setScrollY] = useState(0)
	const handleScroll = () => {
		const scrollPos = window.pageYOffset
		setScrollY(scrollPos)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		scrollY > 300 && (
			<button onClick={() => gsap.to(window, { duration: 0, scrollTo: 0 })} aria-label='Scroll top' className='fixed bottom-0 right-0 z-40 p-1 shadow-[inset_2px_2px_1px_1px_rgba(0,0,0,0.4)] bg-gray-900 cursor-pointer text-slate-100 bg-opacity-70 rounded-tl-xl'>
				<AiOutlineRocket size={50} />
			</button>
		)
	)
}

export default ScrollTop
