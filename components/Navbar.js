import { useState } from 'react'
import HamburgerNav from './HamburgerNav'
import Darkbtn from './Darkbtn'
import LinksMedium from './LinksMedium'
import ToggleBorder from './ToggleBorder'

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false)
	return (
		<div className='flex justify-between h-[50px] mt-2 mb-6 items-center px-6'>
			<h1>Logo</h1>
			<LinksMedium />
			<div className='flex items ml-children'>
				<ToggleBorder />
				<Darkbtn />
				<HamburgerNav navOpen={navOpen} setNavOpen={setNavOpen} />
			</div>
		</div>
	)
}

export default Navbar