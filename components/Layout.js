import Navbar from './Navbar'
import Footer from './Footer'
import ScrollTop from './ScrollTop.js'
import Transition from './Transition'

const Layout = ({ children }) => {

	return (
		<div>
			<Navbar />
			<Transition />
			{children}
			<ScrollTop />
			<Footer />
		</div>
	)
}

export default Layout
