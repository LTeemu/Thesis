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
			<div className='fixed bottom-0 right-0 bg-gray-900 dark:bg-slate-900 bg-opacity-60 dark:bg-opacity-60 rounded-tl-xl' onClick={() => gsap.to(window, { duration: 0, scrollTo: 0 })}>
				<AiOutlineRocket
					size={45}
					className='p-[3px] text-slate-100'
				/>
			</div>
		)
	)
}

export default ScrollTop
