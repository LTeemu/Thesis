import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en' className='scroll-smooth'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
				<link href='https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap' rel='stylesheet' />
			</Head>
			<body className='mx-auto bg-lightprimary dark:bg-darkprimary'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
