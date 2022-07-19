import Head from 'next/head'
import { useEffect, useRef } from 'react'
import { gsap, Expo } from 'gsap'
import { Observer } from 'gsap/dist/Observer'
import Image from 'next/image'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

gsap.registerPlugin(Observer);

const Slider = () => {
  const animating = useRef(false)
  const index = useRef(0)
  const slides = useRef()
  const wrap = useRef()

  useEffect(() => {
    slides.current = gsap.utils.toArray('.slide')
    wrap.current = gsap.utils.wrap(0, slides.current.length)

    const observer = Observer.create({
      target: window,
      type: "wheel, touch",
      tolerance: 30,
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

      let tl = gsap.timeline({
        defaults: { duration: 1, ease: Expo.easeInOut },
        onComplete: () => { animating.current = false }
      })

      tl.set(slides.current[oldIndex], { zIndex: 10 })
        .set(slides.current[newIndex], { xPercent: 0, display: 'flex', })
        .set('.slider_arrow', { opacity: 0, pointerEvents: 'none' })
        .fromTo(slides.current[oldIndex], { xPercent: 0 }, { xPercent: direction * -100 }, '<')
        .fromTo(`.slideText${newIndex}`, { opacity: 0, y: 10 }, { opacity: 1, y: 0, stagger: 0.25, ease: Expo.easeOut }, '<+0.6')
        .set(slides.current[oldIndex], { display: 'hidden', zIndex: 0 })
        .set('.slider_arrow', { opacity: 1, pointerEvents: 'all' })
      index.current = newIndex;
    }
  }
  return (
    <>
      <Head><title>{'TL - Slider'}</title></Head>
      <div className='w-screen h-[calc(100vh_-_66px_-_65px)] flex text-slate-100'>

        <button className='absolute left-0 z-20 top-[50%] translate-y-[-50%] ml-1 duration-300 slider_arrow' onClick={() => gotoSection(-1)}>
          <MdKeyboardArrowLeft size={30} />
        </button>

        <button className='absolute right-0 z-20 top-[50%] translate-y-[-50%] mr-1 duration-300 slider_arrow' onClick={() => gotoSection(+1)}>
          <MdKeyboardArrowRight size={30} />
        </button>

        <div className='fixed flex-col w-full h-[calc(100vh_-_66px_-_59.2px)] px-10 bg-center bg-cover flex items-center justify-center slide'>
          <Image src='/static/images/cherry_blossoms.jpg' layout="fill" objectFit="cover" priority className='-z-50' />
          <div className='w-screen h-full bg-[rgba(0,0,0,0.6)] absolute -z-40'></div>
          <h1 className='slideText0'>Slide 1</h1>
          <p className='slideText0'>Mouse Scroll or Swipe Horizontally. <br /> Made with GSAP Observer</p>
        </div>

        <div className='fixed w-full h-[calc(100vh_-_66px_-_59.2px)] hidden px-10 bg-cover items-center flex-col justify-center slide bg_slide2'>
          <Image src='/static/images/castle.jpg' layout="fill" objectFit="cover" className='-z-50' />
          <div className='w-screen h-full bg-[rgba(0,0,0,0.6)] absolute -z-40'></div>
          <h1 className='slideText1'>Slide 2</h1>
          <p className='max-w-5xl slideText1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nisl eu nunc mollis sagittis. Donec sagittis tincidunt dignissim. Vestibulum consectetur risus augue, at mollis nulla lacinia et. Donec ac risus quis magna blandit laoreet eget at tellus. Cras vel tellus euismod, volutpat quam eget, pretium leo. Aliquam egestas dapibus auctor.</p>
        </div>

        <div className='fixed w-full h-[calc(100vh_-_66px_-_59.2px)] hidden px-10 bg-cover slide items-center flex-col justify-center bg_slide3'>
          <Image src='/static/images/jellyfish.jpg' layout="fill" objectFit="cover" className='-z-50' />
          <div className='w-screen h-full bg-[rgba(0,0,0,0.6)] absolute -z-40'></div>
          <h1 className='slideText2'>Slide 3</h1>
          <p className='max-w-5xl slideText2'>In hac habitasse platea dictumst. Donec malesuada ipsum magna, sed pharetra eros malesuada vitae. Morbi ornare lorem feugiat elit ullamcorper, non sodales nulla sodales. Proin vel lacus consequat, gravida felis id, pellentesque ex. Maecenas id consectetur ipsum. Duis purus lectus, aliquet porttitor facilisis quis, aliquet eget eros. Morbi placerat odio in est dapibus facilisis. </p>
        </div>

      </div>
    </>
  );
}

export default Slider;