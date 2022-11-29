import Navbar from './Navbar'
import Footer from './Footer'
import ScrollTop from './ScrollTop.js'
import Transition from './Transition'

const Layout = ({ children }) => {

	return (
		<div className='flex flex-col w-screen min-h-screen overflow-hidden'>
			<Navbar />
			<Transition />
			<main className='relative flex flex-col flex-1'>
				{children}
			</main>
			<ScrollTop />
			<Footer />
		</div>
	)
}

export default Layout
