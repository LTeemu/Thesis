import { gsap } from 'gsap/dist/gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

const LinksMedium = () => {
	const ScrollToTarget = (target) => {
		gsap.to(window, { duration: 0, scrollTo: target })
	}
	return (
		<ul className='flex-row hidden text-lg md:flex'>
			<button className='font-bold' onClick={() => ScrollToTarget('#link1')}>
				Scroll1
			</button>

			<button
				className='font-bold md:ml-5'
				onClick={() => ScrollToTarget('#link2')}
			>
				Scroll2
			</button>

			<button className='font-bold md:ml-5'>Link</button>

			<button className='font-bold md:ml-5'>Link</button>

			<button className='font-bold md:ml-5'>Link</button>
		</ul>
	)
}

export default LinksMedium
