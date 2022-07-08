import { useState } from 'react'
import HamburgerNav from './HamburgerNav'
import Darkbtn from './Darkbtn'
import Links from './Links'
import ToggleBorder from './ToggleBorder'
import Link from 'next/dist/client/link'

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false)

	return (
		<div className='flex justify-between h-[50px] my-2 items-center px-6'>
			<Link href="/">
				<a className='text-4xl font-bold'>Logo</a>
			</Link>
			<div className='flex-row hidden text-lg md:flex'>
				<Links />
			</div>
			<div className='flex items ml-children'>
				<ToggleBorder />
				<Darkbtn />
				<HamburgerNav navOpen={navOpen} setNavOpen={setNavOpen} />
			</div>
		</div>
	)
}

export default Navbar