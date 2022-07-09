import { useTheme } from 'next-themes'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const Darkbtn = () => {
	const { theme, setTheme } = useTheme()

	//Stop wrong icon flashing on load
	const [loadComplete, setLoadComplete] = useState(false)

	const sunTL = useRef()
	useEffect(() => {
		sunTL.current = gsap.timeline({ defaults: { duration: 0.3 } })
		sunTL.current
			.addLabel('sun')
			.fromTo('#sun-shadow1', { boxShadow: '15px 0 0 0 #e3b566, -15px 0 0 0 #e3b566', opacity: 1 }, { boxShadow: '0px 0 0 0 transparent, 0px 0 0 0 transparent', opacity: 0 }, '<')
			.fromTo('#sun-shadow2', { boxShadow: '15px 0 0 0 #e3b566, -15px 0 0 0 #e3b566', rotation: 90, opacity: 1 }, { boxShadow: '0px 0 0 0 transparent, 0px 0 0 0 transparent', opacity: 0 }, '<')
			.fromTo('#sun-shadow3', { boxShadow: '15px 0 0 0 #d4a149, -15px 0 0 0 #d4a149', rotation: 45, opacity: 1 }, { boxShadow: '0px 0 0 0 transparent, 0px 0 0 0 transparent', opacity: 0 }, '<')
			.fromTo('#sun-shadow4', { boxShadow: '15px 0 0 0 #d4a149, -15px 0 0 0 #d4a149', rotation: -45, opacity: 1 }, { boxShadow: '0px 0 0 0 transparent, 0px 0 0 0 transparent', opacity: 0 }, '<')
			.fromTo('#sun', { width: '40%', height: '40%', backgroundColor: '#e3b566' }, { width: '90%', height: '90%', backgroundColor: '#31267a' }, '<+0.1')
			.fromTo('#ball', { height: 0, width: 0 }, { height: '70%', width: '70%' }, '<')
			.addLabel('moon')

		theme === 'light' ? sunTL.current.seek('moon').pause() : sunTL.current.seek('sun').pause()
		setLoadComplete(true)
	}, [])

	useEffect(() => {
		theme === 'light' ? sunTL.current.play() : sunTL.current.reverse()
	}, [theme])

	return (
		<button id='darkbtn_container' className={`cursor-pointer flex flex-col relative h-[40px] w-[40px] m-auto items-center justify-center ${loadComplete ? 'visible' : 'invisible'}`}
			onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
			<span className={'w-[40%] h-[40%] bg-[#e3b566] rounded-[50%] shadow-[inset_-1px_-1px_2px_1px_rgba(0,0,0,0.4)]'} id='sun'></span>
			<span className='h-[9%] w-[15%] absolute opacity-1' id='sun-shadow1'></span>
			<span className='h-[9%] w-[15%] absolute opacity-1' id='sun-shadow2'></span>
			<span className='h-[9%] w-[15%] absolute opacity-1' id='sun-shadow3'></span>
			<span className='h-[9%] w-[15%] absolute opacity-1' id='sun-shadow4'></span>
			<span className='w-[70%] h-[70%] top-0 right-0 absolute bg-slate-300 dark:bg-slate-800 rounded-[50%] dark:h-0 dark:w-0' id='ball'></span>
		</button>
	)
}

export default Darkbtn
