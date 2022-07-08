import Navbar from './Navbar'
import Footer from './Footer'
import ScrollTop from '../components/ScrollTop'

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<div>{children}</div>
			<ScrollTop />
			<Footer />
		</>
	)
}

export default Layout
