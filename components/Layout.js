import Navbar from './Navbar'
import Footer from './Footer'
import ScrollTop from './ScrollTop.js'

const Layout = ({ children }) => {

	return (
		<div>
			<Navbar />
			<div id='transition' className='fixed z-50 w-screen h-screen opacity-0 bg-lightprimary dark:bg-darkprimary'></div>
			{children}
			<ScrollTop />
			<Footer />
		</div>
	)
}

export default Layout
