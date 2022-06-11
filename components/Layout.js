import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<div>{children}</div>
			<Footer />
		</>
	)
}

export default Layout
