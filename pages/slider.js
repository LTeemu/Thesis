import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap, Expo, Elastic } from 'gsap'
import { Observer } from 'gsap/dist/Observer'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

gsap.registerPlugin(Observer);

const Slider = () => {
  const animating = useRef(false)
  const index = useRef(0)
  const slides = useRef()
  const wrap = useRef()
  const tl = useRef()

  useEffect(() => {
    slides.current = gsap.utils.toArray('.slide')
    wrap.current = gsap.utils.wrap(0, slides.current.length)

    const observer = Observer.create({
      target: window,
      type: "wheel, touch",
      tolerance: 50,
      onRight: () => {
        gotoSection(-1);
      },
      onLeft: () => {
        gotoSection(+1);
      },
      onWheel: () => {
        if (observer.velocityY < 0) {
          gotoSection(-1);
        }
        else if (observer.velocityY > 0) {
          gotoSection(+1);
        }
      },
    })
    return () => {
      observer.disable()
    }
  }, [])

  function gotoSection(direction) {
    if (!animating.current) {
      animating.current = true;

      let oldIndex = index.current;
      let newIndex = wrap.current(index.current + direction);
      tl.current = gsap.timeline({
        defaults: { ease: Expo.easeOut, duration: 1 }
      })

      tl.current
        .set(slides.current[oldIndex], { zIndex: 10 })
        .set(slides.current[newIndex], { xPercent: 0, autoAlpha: 1, }, '<')
        .set('.slider_arrow', { autoAlpha: 0, pointerEvents: 'none' }, '<')
        .addLabel('slideStart', '>')
        .fromTo(slides.current[oldIndex], { xPercent: 0 }, { xPercent: direction * -100 }, '<')
        .set(slides.current[oldIndex], { autoAlpha: 0, zIndex: 0 }, '>')
        .fromTo(`.slideText${newIndex}`, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, stagger: 0.2 }, 'slideStart')
        .set('.slider_arrow', { autoAlpha: 1, pointerEvents: 'all', onComplete: () => { index.current = newIndex, animating.current = false } }, '>')
    }
  }
  return (
    <>
      <Head><title>{'TL - Slider'}</title></Head>
      <div className='w-screen h-[calc(100vh_-_66px_-_65px)] flex text-slate-100'>

        <button className='absolute left-0 z-20 top-[50%] translate-y-[-50%] ml-1 slider_arrow' onClick={() => gotoSection(-1)}>
          <MdKeyboardArrowLeft size={30} />
        </button>

        <button className='absolute right-0 z-20 top-[50%] translate-y-[-50%] mr-1 slider_arrow' onClick={() => gotoSection(+1)}>
          <MdKeyboardArrowRight size={30} />
        </button>

        <div className='flex fixed flex-col w-full h-[calc(100vh_-_66px_-_59.2px)] px-10 bg-center bg-cover items-center justify-center slide'>
          <Image src='/static/images/cherry_blossoms.webp' alt='Cherry Blossoms' layout="fill" objectFit="cover" className='-z-50' placeholder='blur' blurDataURL='/static/images/cherry_blossoms.webp' />
          <div className='w-screen h-full bg-[rgba(0,0,0,0.6)] absolute -z-40'></div>
          <h1 className='slideText0'>Slide 1</h1>
          <p className='slideText0'>Mouse Scroll or Swipe Horizontally. <br /> Made with GSAP Observer</p>
        </div>

        <div className='flex fixed w-full h-[calc(100vh_-_66px_-_59.2px)] invisible px-10 items-center flex-col justify-center slide'>
          <Image src='/static/images/castle.webp' alt='Castle' layout="fill" objectFit="cover" className='-z-50' placeholder='blur' blurDataURL='/static/images/castle.webp' />
          <div className='w-screen h-full bg-[rgba(0,0,0,0.6)] absolute -z-40'></div>
          <h1 className='slideText1'>Slide 2</h1>
          <p className='max-w-5xl slideText1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nisl eu nunc mollis sagittis. Donec sagittis tincidunt dignissim. Vestibulum consectetur risus augue, at mollis nulla lacinia et. Donec ac risus quis magna blandit laoreet eget at tellus. Cras vel tellus euismod, volutpat quam eget, pretium leo. Aliquam egestas dapibus auctor.</p>
        </div>

        <div className='flex fixed w-full h-[calc(100vh_-_66px_-_59.2px)] invisible px-10 slide items-center flex-col justify-center slide'>
          <Image src='/static/images/jellyfish.webp' alt='Jellyfish' layout="fill" objectFit="cover" className='-z-50' placeholder='blur' blurDataURL='/static/images/jellyfish.webp' />
          <div className='w-screen h-full bg-[rgba(0,0,0,0.6)] absolute -z-40'></div>
          <h1 className='slideText2'>Slide 3</h1>
          <p className='max-w-5xl slideText2'>In hac habitasse platea dictumst. Donec malesuada ipsum magna, sed pharetra eros malesuada vitae. Morbi ornare lorem feugiat elit ullamcorper, non sodales nulla sodales. Proin vel lacus consequat, gravida felis id, pellentesque ex. Maecenas id consectetur ipsum. Duis purus lectus, aliquet porttitor facilisis quis, aliquet eget eros. Morbi placerat odio in est dapibus facilisis. </p>
        </div>

      </div>
    </>
  );
}

export default Slider;