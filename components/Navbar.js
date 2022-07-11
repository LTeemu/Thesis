import { useState } from 'react'
import HamburgerNav from './HamburgerNav'
import Darkbtn from './Darkbtn'
import ToggleBorder from './ToggleBorder'
import Link from 'next/dist/client/link'
import { links } from '../public/static/data'

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false)

	return (
		<div className='flex justify-between h-[50px] my-2 items-center px-6'>
			<Link href="/">
				<a className='text-4xl font-bold'>Logo</a>
			</Link>
			<div className='flex-row hidden md:flex ml-children'>
				{links.map((link, index) =>
					<Link href={link.href} key={index}>
						<a className='text-xl font-bold hover:text-[#744622] dark:hover:text-cyan-300'>{link.title}</a>
					</Link>
				)}
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