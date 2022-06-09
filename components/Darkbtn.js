import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import { useState, useEffect } from 'react'

const Darkbtn = () => {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	// Show component when mounted
	useEffect(() => setMounted(true), [])
	if (!mounted) return null

	return (
		<div>
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
