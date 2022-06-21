import Head from 'next/head'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
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
      defaults: { duration: 1, ease: "circ.out" },
      onComplete: () => { animating.current = false }
    })

    /*
    tl.fromTo(slides.current[oldIndex], { xPercent: 0, opacity: 1 }, { xPercent: direction * -100, opacity: 0 })
      .fromTo(slides.current[newIndex], { xPercent: direction * 100, opacity: 0 }, { xPercent: 0, opacity: 1 }, '<')
    */

    tl.fromTo(slides.current[oldIndex], { scaleY: 1, opacity: 1 }, { opacity: 0, scaleY: 0, transformOrigin: direction === 1 ? 'top' : 'bottom' })
      .fromTo(slides.current[newIndex], { scaleY: 0, opacity: 0 }, { opacity: 1, scaleY: 1, transformOrigin: direction === -1 ? 'top' : 'bottom' }, '<')

    index.current = newIndex;
  }

  return (
    <>
      <Head><title>{'TL - Page 2'}</title></Head>
      <div className='w-screen h-[calc(100vh_-_66px_-_59.2px)] flex'>
        <div className='fixed flex-col w-full h-[calc(100vh_-_66px_-_59.2px)] px-6 bg-center bg-cover flex items-center justify-center slide'>
          <h1>Slide 1</h1>
          <p>Scroll & Swipe Vertically</p>
        </div>
        <div className='fixed w-full h-[calc(100vh_-_66px_-_59.2px)] scale-y-0 px-6 bg-cover flex items-center justify-center slide'>
          <h1>Slide 2</h1>
        </div>
        <div className='fixed w-full h-[calc(100vh_-_66px_-_59.2px)] scale-y-0 px-6 bg-cover slide flex items-center justify-center'>
          <h1>Slide 3</h1>
        </div>
      </div>
    </>
  );
}

export default Page2;