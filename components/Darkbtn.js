import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap/dist/gsap'

const Darkbtn = () => {
	const { theme, setTheme } = useTheme()

	const sunTL = useRef()

	useEffect(() => {
		sunTL.current = gsap.timeline({ defaults: { duration: 0.2 } })
		sunTL.current
			.addLabel('light')
			.fromTo('#sun-shadow1', { boxShadow: '15px 0 0 0 #e3b566, -15px 0 0 0 #e3b566' }, { boxShadow: '0px 0 0 0 transparent, 0px 0 0 0 transparent' }, '<')
			.fromTo('#sun-shadow2', { boxShadow: '15px 0 0 0 #e3b566, -15px 0 0 0 #e3b566', rotation: 90, opacity: 1 }, { boxShadow: '0px 0 0 0 transparent, 0px 0 0 0 transparent', opacity: 0 }, '<')
			.fromTo('#sun-shadow3', { boxShadow: '15px 0 0 0 #d4a149, -15px 0 0 0 #d4a149', rotation: 45, opacity: 1 }, { boxShadow: '0px 0 0 0 transparent, 0px 0 0 0 transparent', opacity: 0 }, '<')
			.fromTo('#sun-shadow4', { boxShadow: '15px 0 0 0 #d4a149, -15px 0 0 0 #d4a149', rotation: -45, opacity: 1 }, { boxShadow: '0px 0 0 0 transparent, 0px 0 0 0 transparent', opacity: 0 }, '<')
			.fromTo('#sun', { width: '55%', height: '55%' }, { width: '90%', height: '90%' }, '>')
			.fromTo('#sun', { backgroundColor: '#e3b566' }, { backgroundColor: '#31267a' }, '>')
			.fromTo('#ball', { height: 0, width: 0, opacity: 0 }, { height: '70%', width: '70%', opacity: 1 }, '<')
			.addLabel('dark')
	}, [])

	useEffect(() => {
		theme === 'light' ? sunTL.current.play() : sunTL.current.reverse()
	}, [theme])

	useEffect(() => {
		theme === 'light' ? sunTL.current.seek('dark') : sunTL.current.seek('light')
	}, [])

	return (
		<div id='darkbtn_container' className='cursor-pointer flex flex-col relative h-[32px] w-[32px] m-auto items-center justify-center'
			onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
			<span className={'w-[55%] h-[55%] bg-[#e3b566] rounded-[50%]'} id='sun'></span>
			<span className='h-[9%] w-[15%] absolute' id='sun-shadow1'></span>
			<span className='h-[9%] w-[15%] absolute' id='sun-shadow2'></span>
			<span className='h-[9%] w-[15%] absolute' id='sun-shadow3'></span>
			<span className='h-[9%] w-[15%] absolute' id='sun-shadow4'></span>
			<span className={'w-[70%] h-[70%] top-0 right-0 absolute bg-slate-300 dark:bg-slate-800 opacity-0 rounded-[50%]'} id='ball'></span>
		</div>
	)
}

export default Darkbtn
