import Mug from '../components/Mug'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Companies from '../components/Companies'
gsap.registerPlugin(ScrollTrigger)

const Index = () => {
	const { theme } = useTheme()
	/*
	useEffect(() => {
		gsap.utils.toArray('.grid').forEach((element) => {
			gsap.fromTo(
				element,
				{ y: 20, opacity: 0, duration: 1 },
				{
					y: 0,
					opacity: 1,z
					stagger: 0.1,
					duration: 1,
					scrollTrigger: {
						trigger: element,
						start: 'top 95%',
						end: 'bottom 5%',
						markers: true,
						toggleActions: 'play complete',
					},
				}
			)
		})
	}, [])
	*/

	//The location on the page to which the user has scrolled will be restored by default, disabled with manual due to gsap problems.
	useEffect(() => {
		window.history.scrollRestoration = 'manual'
	}, []);

	return (
		<div className='flex flex-col'>
			<div className='relative grid grid-cols-1 px-6 sm:grid-cols-2 w-full max-w-[1400px] sm:mx-auto'>
				<div className='flex flex-col justify-center'>
					<h1 className='dark:animate-textColor'>Coffee mug</h1>
					<p>
						{' '}
						<a
							href='https://pixabay.com/fi/vectors/kahvia-kuppi-kahvia-kuppi-kofeiini-5009730/'
							target='_blank'
							rel='noreferrer'
							className='font-bold text-cyan-600'
						>
							SVG image
						</a>{' '}
						from Pixabay, animated with{' '}
						<a
							href='https://greensock.com/'
							target='_blank'
							rel='noreferrer'
							className='text-[#499110] font-extrabold'
						>
							GSAP
						</a>
					</p>
				</div>
				<div
					id='grid'
					className='flex items-center justify-center min-h-[60vh]'
				>
					<Mug />
				</div>
			</div>

			<svg
				preserveAspectRatio='none'
				viewBox='0 0 1200 120'
				xmlns='http://www.w3.org/2000/svg'
				className='fill-slate-200 dark:fill-gray-900 h-[2.5vw] w-full rotate-180 -mb-[1px]'
			>
				<path d='M60 120L0 0h120L60 120zm120 0L120 0h120l-60 120zm120 0L240 0h120l-60 120zm120 0L360 0h120l-60 120zm120 0L480 0h120l-60 120zm120 0L600 0h120l-60 120zm120 0L720 0h120l-60 120zm120 0L840 0h120l-60 120zm120 0L960 0h120l-60 120zm120 0L1080 0h120l-60 120z' />
			</svg>

			<div className='flex flex-col items-center w-screen bg-slate-200 dark:bg-gray-900'>
				<div
					className='grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 max-w-[1400px]'
					id='link1'
				>
					<div className='relative row-span-2 min-h-[350px]'>
						<Image
							src={theme == 'dark' ? '/static/images/gold-gb3c2c7cc9_640-min.jpg' : '/static/images/stonebrown-gba1689dda_640-min.jpg'}
							alt='image1'
							layout='fill'
							objectFit='cover'
							className={'[mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [mask-image:url(/static/images/lion-g8e83b75e5_640-min.png)]'}
						/>
					</div>

					<div className='row-span-1'>
						<h2 className='dark:animate-textColor'>Lion, Sassbook AI Story Writer</h2>
						<p>
							Lion was a little chap. He looked like a cat, with a round nose and a short tail. His eyes were always on me as I entered the room, his ears were pricked forward, he was as silent as a mouse, like the cat. Now and then he would turn his eyes in my direction and look as meek as the little mouse. "I thought you said you were going straight to the wedding," said Ralph, in a low voice. Lion took a step toward him, almost afraid to touch him. Not at a word did the other tell his host that Lion was goingstraighttothewedding."Well," I said to Ralph. And then Lion ran to him and kissed him for the first time in his life.
						</p>
					</div>

					<div className='relative row-span-2 md:row-span-3 min-h-[350px]'>
						<Image
							src={theme == 'dark' ? '/static/images/floral-gf53e5d3f7_640-min.png' : '/static/images/stonegreen-ge638a8717_640-min.jpg'}
							alt='image2'
							layout='fill'
							objectFit='cover'
							className={'[mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [mask-image:url(/static/images/octopus-g1e66bf027_640-min.png)]'}
						/>
					</div>

					<div className='row-span-1'>
						<h2 className='dark:animate-textColor'>Octopus in a briefcase</h2>
						<p>
							Octopus in a briefcase , a creature so small that it had been shrunk to almost the size of a human, had the entire back half of its body encased in the case. Its eyes were black and slits, its arms were thin and powerful. At the first minute of my death, I'd be returned to its home. With a small, soft, human hand, the octopus would make sure I got back to my home, to a home I had never been to, a place I never wanted .
						</p>
					</div>

					<div className='relative row-span-2 min-h-[350px]'>
						<Image
							src={theme == 'dark' ? '/static/images/sea-g7b36c973c_1280.jpg' : '/static/images/stoneblue-g2e266dc48_640-min.jpg'}
							alt='image3'
							layout='fill'
							objectFit='cover'
							className={'[mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [mask-image:url(/static/images/fish-g2619bb8ac_640-min.png)]'}
						/>
					</div>

					<div className='row-span-1' id='link2'>
						<h2 className='dark:animate-textColor'>Fish sticks</h2>
						<p>
							Fish sticks are not to my taste, he declared; they are too good for the sea. He was right; the fish sticks were too perfect for sea food. And there I left him, feeling that I was on a certain level with the great ocean, and that my life was complete.
						</p>
					</div>
				</div>
			</div>
			<svg
				preserveAspectRatio='none'
				viewBox='0 0 1200 120'
				xmlns='http://www.w3.org/2000/svg'
				className='fill-slate-200 dark:fill-gray-900 h-[2.5vw] w-full mb-5 -mt-[1px]'
			>
				<path d='M60 120L0 0h120L60 120zm120 0L120 0h120l-60 120zm120 0L240 0h120l-60 120zm120 0L360 0h120l-60 120zm120 0L480 0h120l-60 120zm120 0L600 0h120l-60 120zm120 0L720 0h120l-60 120zm120 0L840 0h120l-60 120zm120 0L960 0h120l-60 120zm120 0L1080 0h120l-60 120z' />
			</svg>
			<Companies />
		</div>
	)
}

export default Index