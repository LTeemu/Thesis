import '../styles/globals.css'
import Layout from '../components/Layout'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute='class' defaultTheme='light'>
			<Head>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name="google-site-verification" content="3JkPx1SLLuX61efUKK3dtabVXwvuGxCo1fUbiUICgQo" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)
}

export default MyApp
