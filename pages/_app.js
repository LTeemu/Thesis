import '../styles/globals.scss'
import Layout from '../components/Layout'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute='class' defaultTheme='light'>
			<Head>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name="google-site-verification" content="AxyPfun3tuhThDWPAH4wV9PAda1FJUYVpfJJDKqBHio" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)
}

export default MyApp
