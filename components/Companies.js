import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { SteppedEase } from 'gsap'

const Companies = () => {
	const tl1 = useRef()
	const tl2 = useRef()
	const tl3 = useRef()
	useEffect(() => {
		tl1.current = gsap.timeline({
			defaults: {
				repeat: Infinity,
				ease: 'linear',
			},
		})

		tl2.current = gsap.timeline({
			defaults: {
				repeat: Infinity,
				ease: 'linear',
			},
		})

		tl3.current = gsap.timeline({
			defaults: {
				repeat: Infinity,
				ease: 'linear',
			},
		})

		tl1.current.fromTo(
			'#companies1',
			{ xPercent: 0 },
			{ xPercent: -50, duration: 14 }
		)
		tl2.current.fromTo(
			'#companies2',
			{ xPercent: -50 },
			{
				xPercent: 0,
				duration: 12,
			}
		)
		tl3.current.fromTo(
			'#companies3',
			{ xPercent: -50 },
			{
				xPercent: 0,
				duration: 12,
				ease: SteppedEase.config(7),
			}
		)
	}, [])

	return (
		<div className='w-full overflow-x-hidden'>
			<div
				className='flex w-min min-w-[200%] justify-around dark:text-orange-400 border-[rgba(0,0,0,0.1)] py-1'
				id='companies1'
				onMouseEnter={() => tl1.current.timeScale(0.2)}
				onMouseLeave={() => tl1.current.timeScale(1)}
			>
				<h2>Potato</h2>
				<h2>Carrot</h2>
				<h2>Cucumber</h2>
				<h2>Cabbage</h2>
				<h2>Apple</h2>
				<h2>Orange</h2>
				<h2>Lettuce</h2>
				{/*copypaste*/}
				<h2>Potato</h2>
				<h2>Carrot</h2>
				<h2>Cucumber</h2>
				<h2>Cabbage</h2>
				<h2>Apple</h2>
				<h2>Orange</h2>
				<h2>Lettuce</h2>
			</div>

			<div
				className='flex w-min min-w-[200%] justify-around dark:text-lime-400 border-y-4 border-[rgba(0,0,0,0.1)] py-1'
				id='companies2'
				onMouseEnter={() => tl2.current.timeScale(2.5)}
				onMouseLeave={() => tl2.current.timeScale(1)}
			>
				<h2>Pineapple</h2>
				<h2>Coconut</h2>
				<h2>Banana</h2>
				<h2>Tomato</h2>
				<h2>Watermelon</h2>
				{/*copypaste*/}
				<h2>Pineapple</h2>
				<h2>Coconut</h2>
				<h2>Banana</h2>
				<h2>Tomato</h2>
				<h2>Watermelon</h2>
			</div>

			<div
				className='flex w-min min-w-[200%] justify-around dark:text-cyan-400 border-b-4 border-[rgba(0,0,0,0.1)] py-1'
				id='companies3'
				onMouseEnter={() => tl3.current.timeScale(0.01)}
				onMouseLeave={() => tl3.current.timeScale(1)}
			>
				<h2>Potato</h2>
				<h2>Carrot</h2>
				<h2>Cucumber</h2>
				<h2>Cabbage</h2>
				<h2>Apple</h2>
				<h2>Orange</h2>
				<h2>Lettuce</h2>
				{/*copypaste*/}
				<h2>Potato</h2>
				<h2>Carrot</h2>
				<h2>Cucumber</h2>
				<h2>Cabbage</h2>
				<h2>Apple</h2>
				<h2>Orange</h2>
				<h2>Lettuce</h2>
			</div>
		</div>
	)
}

export default Companies
