import Head from 'next/head'
import { useEffect, useRef } from 'react'
import { gsap, Expo } from 'gsap'
import { Observer } from 'gsap/dist/Observer'
gsap.registerPlugin(Observer);

const Page2 = () => {
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
      tolerance: 100,
      onUp: () => {
        if (!animating.current) {
          console.log("up");
          gotoSection(-1);
        }
      },
      onDown: () => {
        if (!animating.current) {
          console.log("down");
          gotoSection(+1);
        }
      },
    })

    return () => {
      observer.disable()
    }
  }, [])

  function gotoSection(direction) {
    animating.current = true;

    let oldIndex = index.current;
    let newIndex = wrap.current(index.current + direction);

    let tl = gsap.timeline({
      defaults: { duration: 1, ease: Expo.easeInOut },
      onComplete: () => { animating.current = false }
    })

    tl.set(slides.current[oldIndex], { zIndex: 10 })
      .set(slides.current[newIndex], { xPercent: 0, display: 'flex', })
      .fromTo(slides.current[oldIndex], { xPercent: 0 }, { xPercent: direction * -100 }, '<')
      .fromTo(`.slideText${newIndex}`, { opacity: 0, y: 10 }, { opacity: 1, y: 0, stagger: 0.25, ease: Expo.easeOut }, '<+0.6')
      .set(slides.current[oldIndex], { display: 'hidden', zIndex: 0 })

    index.current = newIndex;
  }

  return (
    <>
      <Head><title>{'TL - Page 2'}</title></Head>
      <div className='w-screen h-[calc(100vh_-_66px_-_59.2px)] flex text-slate-100'>
        <div className='fixed flex-col w-full h-[calc(100vh_-_66px_-_59.2px)] px-6 bg-center bg-cover flex items-center justify-center slide bg_slide1'>
          <h1 className='slideText0'>Slide 1</h1>
          <p className='slideText0'>Scroll & Swipe Vertically</p>
        </div>
        <div className='fixed w-full h-[calc(100vh_-_66px_-_59.2px)] hidden px-6 bg-cover items-center flex-col justify-center slide bg_slide2'>
          <h1 className='slideText1'>Slide 2</h1>
          <p className='max-w-5xl slideText1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nisl eu nunc mollis sagittis. Donec sagittis tincidunt dignissim. Vestibulum consectetur risus augue, at mollis nulla lacinia et. Donec ac risus quis magna blandit laoreet eget at tellus. Cras vel tellus euismod, volutpat quam eget, pretium leo. Aliquam egestas dapibus auctor.</p>
        </div>
        <div className='fixed w-full h-[calc(100vh_-_66px_-_59.2px)] hidden px-6 bg-cover slide items-center flex-col justify-center bg_slide3'>
          <h1 className='slideText2'>Slide 3</h1>
          <p className='max-w-5xl slideText2'>In hac habitasse platea dictumst. Donec malesuada ipsum magna, sed pharetra eros malesuada vitae. Morbi ornare lorem feugiat elit ullamcorper, non sodales nulla sodales. Proin vel lacus consequat, gravida felis id, pellentesque ex. Maecenas id consectetur ipsum. Duis purus lectus, aliquet porttitor facilisis quis, aliquet eget eros. Morbi placerat odio in est dapibus facilisis. </p>
        </div>
      </div>
    </>
  );
}

export default Page2;