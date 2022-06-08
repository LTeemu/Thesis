import Link from 'next/link'

const Links = () => {
	return (
		<>	
			<Link href="/">
				<a className='font-bold'>Home</a>
			</Link>

			<Link href="/page2">
				<a className='font-bold md:ml-5'>Page 2</a>
			</Link>

			<Link href="/page3">
				<a className='font-bold md:ml-5'>404</a>
			</Link>

			<Link href="/page4">
				<a className='font-bold md:ml-5'>404</a>
			</Link>

			<Link href="/page5">
				<a className='font-bold md:ml-5'>404</a>
			</Link>
		</>
	)
}

export default Links
