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
			<AiOutlineRocket
				size={45}
				onClick={() => gsap.to(window, { duration: 0, scrollTo: 0 })}
				className='fixed bottom-0 right-0 p-[3px] text-slate-100 rounded-tl-xl dark:bg-slate-900 bg-gray-900 bg-opacity-60 dark:bg-opacity-60'
			/>
		)
	)
}

export default ScrollTop
