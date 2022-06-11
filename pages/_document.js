import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='english' className='scroll-smooth'>
			<Head>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body className='mx-auto bg-slate-300 dark:bg-slate-800'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
