import Mug from '../components/Mug'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Companies from '../components/Companies'
import Head from 'next/head'
gsap.registerPlugin(ScrollTrigger)

const Index = () => {
	const { theme } = useTheme()

	useEffect(() => {
		gsap.utils.toArray('.fadein').forEach((element) => {
			gsap.fromTo(element,
				{ y: 0, opacity: 0.25 },
				{
					y: 0, ease: 'linear', opacity: 1, duration: 0.5,
					scrollTrigger: {
						trigger: element,
						start: 'top 87.5%',
						end: 'bottom 12.5%',
						toggleActions: 'play reverse play reverse'
					},
				}
			)
		})
	}, [])

	//The location on the page to which the user has scrolled will be restored by default, disabled with manual due to gsap problems.
	useEffect(() => {
		window.history.scrollRestoration = 'manual'
	}, []);

	return (
		<div className='flex flex-col'>
			<Head><title>{'TL - Home'}</title></Head>
			<div className='relative grid grid-cols-1 px-6 sm:grid-cols-2 w-full max-w-[1400px] sm:mx-auto'>
				<div className='flex flex-col justify-center'>
					<h1 className='dark:animate-textColor'>Coffee mug</h1>
					<p>
						<a href='https://pixabay.com/fi/vectors/kahvia-kuppi-kahvia-kuppi-kofeiini-5009730/' target='_blank' rel='noreferrer' className='font-bold text-cyan-600'>
							SVG image
						</a>
						{' '}from Pixabay, animated with
						<a href='https://greensock.com/' target='_blank' rel='noreferrer' className='text-[#499110] font-extrabold'>
							{' '}GSAP
						</a>
					</p>
				</div>
				<div id='grid' className='flex items-center justify-center min-h-[60vh]'>
					<Mug />
				</div>
			</div>

			<svg preserveAspectRatio='none' viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg' className='fill-lightsecondary dark:fill-darksecondary h-[2.5vw] w-full rotate-180'>
				<path d='M60 120L0 0h120L60 120zm120 0L120 0h120l-60 120zm120 0L240 0h120l-60 120zm120 0L360 0h120l-60 120zm120 0L480 0h120l-60 120zm120 0L600 0h120l-60 120zm120 0L720 0h120l-60 120zm120 0L840 0h120l-60 120zm120 0L960 0h120l-60 120zm120 0L1080 0h120l-60 120z' />
			</svg>

			<div className='flex flex-col items-center w-screen bg-lightsecondary dark:bg-darksecondary'>
				<div className='grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 max-w-[1400px]'>
					<div className='relative row-span-2 min-h-[350px] fadein'>
						<Image
							src={theme == 'dark' ? '/static/images/gold.webp' : '/static/images/stonebrown.webp'}
							alt='Lion'
							layout='fill'
							objectFit='cover'
							className={'[mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [mask-image:url(/static/images/lion.webp)]'}
							placeholder='blur'
							blurDataURL='/static/images/lion.webp'
						/>
					</div>

					<div className='row-span-1 fadein'>
						<h2 className='dark:animate-textColor'>Lion, Sassbook AI Story Writer</h2>
						<p>Lion was a little chap. He looked like a cat, with a round nose and a short tail. His eyes were always on me as I entered the room, his ears were pricked forward, he was as silent as a mouse, like the cat. Now and then he would turn his eyes in my direction and look as meek as the little mouse. &quot; I thought you said you were going straight to the wedding&quot;, said Ralph, in a low voice. Lion took a step toward him, almost afraid to touch him. Not at a word did the other tell his host that Lion was going straight to the wedding. &quot;Well&quot;, I said to Ralph. And then Lion ran to him and kissed him for the first time in his life.</p>
					</div>

					<div className='relative row-span-2 md:row-span-3 min-h-[350px] fadein'>
						<Image
							src={theme == 'dark' ? '/static/images/floral.webp' : '/static/images/stonegreen.webp'}
							alt='Octopus'
							layout='fill'
							objectFit='cover'
							className={'[mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [mask-image:url(/static/images/octopus.webp)]'}
							placeholder='blur'
							blurDataURL='/static/images/octopus.webp'
						/>
					</div>

					<div className='row-span-1 fadein'>
						<h2 className='dark:animate-textColor'>Octopus in a briefcase</h2>
						<p>Octopus in a briefcase, a creature so small that it had been shrunk to almost the size of a human, had the entire back half of its body encased in the case. Its eyes were black and slits, its arms were thin and powerful. At the first minute of my death, I&apos;d be returned to its home. With a small, soft, human hand, the octopus would make sure I got back to my home, to a home I had never been to, a place I never wanted.</p>
					</div>

					<div className='relative row-span-2 min-h-[350px] fadein'>
						<Image
							src={theme == 'dark' ? '/static/images/sea.webp' : '/static/images/stoneblue.webp'}
							alt='Fish'
							layout='fill'
							objectFit='cover'
							className={'[mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [mask-image:url(/static/images/fish.webp)]'}
							placeholder='blur'
							blurDataURL='/static/images/fish.webp'
						/>
					</div>

					<div className='row-span-1 fadein'>
						<h2 className='dark:animate-textColor'>Fish sticks</h2>
						<p>Fish sticks are not to my taste, he declared. They are too good for the sea. He was right. The fish sticks were too perfect for sea food. And there I left him, feeling that I was on a certain level with the great ocean, and that my life was complete.</p>
					</div>
				</div>
			</div>
			<svg preserveAspectRatio='none' viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg' className='fill-lightsecondary dark:fill-darksecondary h-[2.5vw] w-full mb-5'>
				<path d='M60 120L0 0h120L60 120zm120 0L120 0h120l-60 120zm120 0L240 0h120l-60 120zm120 0L360 0h120l-60 120zm120 0L480 0h120l-60 120zm120 0L600 0h120l-60 120zm120 0L720 0h120l-60 120zm120 0L840 0h120l-60 120zm120 0L960 0h120l-60 120zm120 0L1080 0h120l-60 120z' />
			</svg>
			<Companies />
		</div>
	)
}

export default Index