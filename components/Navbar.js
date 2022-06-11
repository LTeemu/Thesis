import { useState } from 'react'
import HamburgerNav from './HamburgerNav'
import Darkbtn from './Darkbtn'
import Links from './Links'
import ToggleBorder from './ToggleBorder'
import Link from 'next/dist/client/link'
import ScrollTop from '../components/ScrollTop'

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false)
	return (
		<div className='flex justify-between h-[50px] my-2 items-center px-6'>
			<Link href="/">
				<a className='text-4xl font-bold'>Logo</a>
			</Link>
			<ul className='flex-row hidden text-lg md:flex'>
				<Links />
			</ul>
			<div className='flex items ml-children'>
				<ToggleBorder />
				<Darkbtn />
				<HamburgerNav navOpen={navOpen} setNavOpen={setNavOpen} />
			</div>
			<ScrollTop />
		</div>
	)
}

export default Navbar