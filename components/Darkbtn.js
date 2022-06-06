import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import { useState, useEffect } from 'react'

const Darkbtn = () => {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)
	const [disabled, setDisabled] = useState(false)

	//Darkmode spam cooldown
	useEffect(() => {
		setDisabled(true)
		setTimeout(() => {
			setDisabled(false)
		}, 200)
	}, [theme])

	// Show component when mounted
	useEffect(() => setMounted(true), [])
	if (!mounted) return null

	return (
		<div
			className={`${disabled ? 'pointer-events-none' : 'pointer-events-auto'}`}
		>
			{theme === 'dark' ? (
				<RiSunFill
					size={35}
					color='#e3b566'
					onClick={() => setTheme('light')}
					className='cursor-pointer'
				/>
			) : (
				<RiMoonFill
					size={35}
					color='#31267a'
					onClick={() => setTheme('dark')}
					className='cursor-pointer'
				/>
			)}
		</div>
	)
}

export default Darkbtn
