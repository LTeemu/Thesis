import Navbar from './Navbar'
import Footer from './Footer'
import ScrollTop from './ScrollTop.js'

const Layout = ({ children }) => {

	return (
		<div>
			<Navbar />
			<div id='transition'>{children}</div>
			<ScrollTop />
			<Footer />
		</div>
	)
}

export default Layout
