import { useEffect, useRef } from 'react'
import { gsap, SteppedEase } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Companies = () => {
	const anim1 = useRef()
	const anim2 = useRef()
	const anim3 = useRef()

	useEffect(() => {
		//Companies1 from -50% to 0%
		anim1.current = gsap.to('#companies1', {
			xPercent: -50,
			duration: 14,
			ease: 'linear',
			repeat: Infinity,
			scrollTrigger: {
				trigger: "#companies1",
				toggleActions: 'play pause resume pause',
				markers: false,
			}
		})

		//Companies2 from -50% to 0%
		gsap.set("#companies2", { xPercent: -50 })
		anim2.current = gsap.to('#companies2', {
			xPercent: 0,
			duration: 12,
			ease: 'linear',
			repeat: Infinity,
			scrollTrigger: {
				trigger: "#companies2",
				toggleActions: 'play pause resume pause',
				markers: false,
			}
		})

		//Companies3 from 0% to -50%
		anim3.current = gsap.to('#companies3', {
			xPercent: -50,
			duration: 12,
			ease: SteppedEase.config(7),
			repeat: Infinity,
			scrollTrigger: {
				trigger: "#companies3",
				toggleActions: 'play pause resume pause',
				markers: false,
			}
		})
	}, [])

	return (
		<div className='w-full overflow-x-hidden' tabIndex={-1}>
			<div
				className='flex w-min min-w-[200%] justify-around dark:text-orange-400 border-[rgba(0,0,0,0.1)] py-1'
				id='companies1'
				onMouseEnter={() => anim1.current.timeScale(0.3)}
				onMouseLeave={() => anim1.current.timeScale(1)}
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
				onMouseEnter={() => anim2.current.timeScale(2)}
				onMouseLeave={() => anim2.current.timeScale(1)}
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
				onMouseEnter={() => anim3.current.timeScale(0.01)}
				onMouseLeave={() => anim3.current.timeScale(1)}
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
