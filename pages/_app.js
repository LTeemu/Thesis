import '../styles/globals.css'
import Layout from '../components/Layout'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute='class' defaultTheme='light'>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)
}

export default MyApp
