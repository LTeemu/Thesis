import { useEffect, useRef } from 'react'
import { gsap, SteppedEase } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Marquee = () => {
	const anim1 = useRef()
	const anim2 = useRef()
	const anim3 = useRef()

	useEffect(() => {
		//Marquee1 from -50% to 0%
		anim1.current = gsap.to('#marquee1', {
			xPercent: -50,
			duration: 16,
			ease: 'linear',
			repeat: Infinity,
			scrollTrigger: {
				trigger: "#marquee1",
				toggleActions: 'play pause resume pause',
				markers: false,
			}
		})

		//Marquee2 from -50% to 0%
		gsap.set("#marquee2", { xPercent: -50 })
		anim2.current = gsap.to('#marquee2', {
			xPercent: 0,
			duration: 16,
			ease: 'linear',
			repeat: Infinity,
			scrollTrigger: {
				trigger: "#marquee2",
				toggleActions: 'play pause resume pause',
				markers: false,
			}
		})

		//Marquee3 from 0% to -50%
		anim3.current = gsap.to('#marquee3', {
			xPercent: -50,
			duration: 16,
			ease: SteppedEase.config(7),
			repeat: Infinity,
			scrollTrigger: {
				trigger: "#marquee3",
				toggleActions: 'play pause resume pause',
				markers: false,
			}
		})
	}, [])

	return (
		<div className='w-full overflow-x-hidden' tabIndex={-1}>
			<div
				className='flex w-min min-w-[200%] justify-around dark:text-orange-400 border-[rgba(0,0,0,0.1)] py-1'
				id='marquee1'
				onMouseEnter={() => anim1.current.timeScale(0.3)}
				onMouseLeave={() => anim1.current.timeScale(1)}
			>
				<p>Potato</p>
				<p>Carrot</p>
				<p>Cucumber</p>
				<p>Cabbage</p>
				<p>Apple</p>
				<p>Orange</p>
				<p>Lettuce</p>
				{/*copypaste*/}
				<p>Potato</p>
				<p>Carrot</p>
				<p>Cucumber</p>
				<p>Cabbage</p>
				<p>Apple</p>
				<p>Orange</p>
				<p>Lettuce</p>
			</div>

			<div
				className='flex w-min min-w-[200%] justify-around dark:text-lime-400 border-y-4 border-[rgba(0,0,0,0.1)] py-1'
				id='marquee2'
				onMouseEnter={() => anim2.current.timeScale(2)}
				onMouseLeave={() => anim2.current.timeScale(1)}
			>
				<p>Pineapple</p>
				<p>Coconut</p>
				<p>Banana</p>
				<p>Tomato</p>
				<p>Watermelon</p>
				{/*copypaste*/}
				<p>Pineapple</p>
				<p>Coconut</p>
				<p>Banana</p>
				<p>Tomato</p>
				<p>Watermelon</p>
			</div>

			<div
				className='flex w-min min-w-[200%] justify-around dark:text-cyan-400 border-b-4 border-[rgba(0,0,0,0.1)] py-1'
				id='marquee3'
				onMouseEnter={() => anim3.current.timeScale(0.01)}
				onMouseLeave={() => anim3.current.timeScale(1)}
			>
				<p>Potato</p>
				<p>Carrot</p>
				<p>Cucumber</p>
				<p>Cabbage</p>
				<p>Apple</p>
				<p>Orange</p>
				<p>Lettuce</p>
				{/*copypaste*/}
				<p>Potato</p>
				<p>Carrot</p>
				<p>Cucumber</p>
				<p>Cabbage</p>
				<p>Apple</p>
				<p>Orange</p>
				<p>Lettuce</p>
			</div>
		</div>
	)
}

export default Marquee