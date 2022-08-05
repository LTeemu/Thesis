import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap, Expo } from 'gsap'
import { MdOutlineThumbDownOffAlt, MdOutlineThumbUpOffAlt } from 'react-icons/md'

const Cards = () => {
  const animating = useRef(false)
  const index = useRef(0)
  const cardStacks = useRef()
  const wrap = useRef()
  const tl = useRef()

  useEffect(() => {
    const cardHover = () => {
      gsap.to(cardStacks.current[index.current].children[0], { rotate: 0, xPercent: -50, yPercent: -50 });
      gsap.to(cardStacks.current[index.current].children[1], { rotate: 0, xPercent: 50, yPercent: -50 });
      gsap.to(cardStacks.current[index.current].children[2], { rotate: 0, xPercent: -50, yPercent: 50 });
      gsap.to(cardStacks.current[index.current].children[3], { rotate: 0, xPercent: 50, yPercent: 50 });
    }

    const cardReset = () => {
      gsap.to(cardStacks.current[index.current].children[0], { rotate: -18, xPercent: 0, yPercent: 0 });
      gsap.to(cardStacks.current[index.current].children[1], { rotate: -6, xPercent: 0, yPercent: 0 });
      gsap.to(cardStacks.current[index.current].children[2], { rotate: 6, xPercent: 0, yPercent: 0 });
      gsap.to(cardStacks.current[index.current].children[3], { rotate: 18, xPercent: 0, yPercent: 0 });
    }

    cardStacks.current = gsap.utils.toArray('#cardStack')
    wrap.current = gsap.utils.wrap(0, cardStacks.current.length)
    tl.current = gsap.timeline({ defaults: { ease: Expo.easeOut, duration: 1 } })
    tl.current.fromTo(cardStacks.current[0], { scale: 0 }, { scale: 1 })
    cardStacks.current.forEach((stack) => {
      stack.addEventListener("mouseenter", cardHover);
      stack.addEventListener("mouseleave", cardReset);
    })

    return () => {
      cardStacks.current.forEach((stack) => {
        stack.removeEventListener("mouseenter", cardHover);
        stack.removeEventListener("mouseleave", cardReset);
      })
    }
  }, [])

  function gotoSection(direction) {
    if (!animating.current) {
      animating.current = true;
      let oldIndex = index.current;
      let newIndex = wrap.current(index.current + direction);

      tl.current
        .set('.cardBtn', { opacity: 0.6, pointerEvents: 'none' })
        .set(cardStacks.current[newIndex], { pointerEvents: 'none' }, '<')
        .set(cardStacks.current[newIndex].children[0], { rotate: -18, xPercent: 0, yPercent: 0 }, '<')
        .set(cardStacks.current[newIndex].children[1], { rotate: -6, xPercent: 0, yPercent: 0 }, '<')
        .set(cardStacks.current[newIndex].children[2], { rotate: 6, xPercent: 0, yPercent: 0 }, '<')
        .set(cardStacks.current[newIndex].children[3], { rotate: 18, xPercent: 0, yPercent: 0 }, '<')
        .to(cardStacks.current[oldIndex].children, { scale: 0, autoAlpha: 0, x: 100 * direction, stagger: { each: 0.1, from: "random" } }, '>')
        .fromTo(cardStacks.current[newIndex].children, { x: -100 * direction, scale: 0, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, x: 0, stagger: { each: 0.1, from: "random" }, onComplete: () => { index.current = newIndex, animating.current = false } }, '<')
        .set(cardStacks.current[newIndex], { pointerEvents: 'all' }, '>')
        .set('.cardBtn', { opacity: 1, pointerEvents: 'all' }, '<')
    }
  }

  return (
    <>
      <Head><title>{'TL - Cards'}</title></Head>
      <div className='w-screen min-h-[calc(100vh_-_66px_-_65px)] text-slate-100'>

        <div className='relative grid place-items-center h-[calc(100vh_-_66px_-_65px)] min-h-[400px]'>
          <div id='cardStack' className='absolute grid h-full scale-0 place-items-center'>
            <div className='bg-[rgba(228,101,101,0.5)] -rotate-[18deg] card'>
              <Image src='https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_960_720.jpg' alt='Cat 1' layout="fill" objectFit="cover" placeholder='blur' className='rounded-xl' blurDataURL='https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_960_720.jpg' priority={true} />
            </div>
            <div className='bg-[rgba(238,255,86,0.5)] -rotate-6 card'>
              <Image src='https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952_960_720.jpg' alt='Cat 2' layout="fill" objectFit="cover" placeholder='blur' className='rounded-xl' blurDataURL='https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952_960_720.jpg' priority={true} />
            </div>
            <div className='bg-[rgba(172,255,94,0.5)] rotate-6 card'>
              <Image src='https://cdn.pixabay.com/photo/2015/09/09/19/41/cat-932846_960_720.jpg' alt='Cat 3' layout="fill" objectFit="cover" placeholder='blur' className='rounded-xl' blurDataURL='https://cdn.pixabay.com/photo/2015/09/09/19/41/cat-932846_960_720.jpg' priority={true} />
            </div>
            <div className='bg-[rgba(99,250,255,0.5)] rotate-[18deg] card'>
              <Image src='https://cdn.pixabay.com/photo/2020/06/22/08/27/cat-5328304_960_720.jpg' alt='Cat 4' layout="fill" objectFit="cover" placeholder='blur' className='rounded-xl' blurDataURL='https://cdn.pixabay.com/photo/2020/06/22/08/27/cat-5328304_960_720.jpg' priority={true} />
            </div>
          </div>

          <div id='cardStack' className='absolute grid h-full place-items-center'>
            <div className='bg-[rgba(101,228,169,0.5)] -rotate-[18deg] opacity-0 card'>
              <Image src='https://cdn.pixabay.com/photo/2017/09/12/01/25/spider-2740997_960_720.jpg' alt='Cat 1' layout="fill" objectFit="cover" placeholder='blur' className='rounded-xl' blurDataURL='https://cdn.pixabay.com/photo/2017/09/12/01/25/spider-2740997_960_720.jpg' />
            </div>
            <div className='bg-[rgba(210,87,235,0.5)] -rotate-6 opacity-0 card'>
              <Image src='https://cdn.pixabay.com/photo/2014/12/11/19/26/spider-564635_960_720.jpg' alt='Cat 1' layout="fill" objectFit="cover" placeholder='blur' className='rounded-xl' blurDataURL='https://cdn.pixabay.com/photo/2014/12/11/19/26/spider-564635_960_720.jpg' />
            </div>
            <div className='bg-[rgba(255,94,94,0.5)] rotate-6 opacity-0 card'>
              <Image src='https://cdn.pixabay.com/photo/2013/05/14/16/28/spider-111075_960_720.jpg' alt='Cat 1' layout="fill" objectFit="cover" placeholder='blur' className='rounded-xl' blurDataURL='https://cdn.pixabay.com/photo/2013/05/14/16/28/spider-111075_960_720.jpg' />
            </div>
            <div className='bg-[rgba(255,193,99,0.5)] rotate-[18deg] opacity-0 card'>
              <Image src='https://cdn.pixabay.com/photo/2016/11/19/15/20/dog-1839808_960_720.jpg' alt='Cat 1' layout="fill" objectFit="cover" placeholder='blur' className='rounded-xl' blurDataURL='https://cdn.pixabay.com/photo/2016/11/19/15/20/dog-1839808_960_720.jpg' />
            </div>
          </div>

          <div id='cardStack' className='absolute grid h-full place-items-center'>
            <div className='bg-[rgba(245,248,90,0.5)] -rotate-[18deg] opacity-0 card'>
              <Image src='https://cdn.pixabay.com/photo/2014/12/11/19/19/ant-564617_960_720.jpg' alt='Cat 1' layout="fill" objectFit="cover" objectPosition="75% center" placeholder='blur' className='rounded-xl' blurDataURL='https://cdn.pixabay.com/photo/2014/12/11/19/19/ant-564617_960_720.jpg' />
            </div>
            <div className='bg-[rgba(210,87,235,0.5)] -rotate-6 opacity-0 card'>
              <Image src='https://cdn.pixabay.com/photo/2019/08/20/05/48/fly-4417790_960_720.jpg' alt='Cat 1' layout="fill" objectFit="cover" objectPosition="75% center" placeholder='blur' className='rounded-xl' blurDataURL='https://cdn.pixabay.com/photo/2019/08/20/05/48/fly-4417790_960_720.jpg' />
            </div>
            <div className='bg-[rgba(252,223,97,0.5)] rotate-6 opacity-0 card'>
              <Image src='https://cdn.pixabay.com/photo/2017/06/04/18/20/tick-2371782_960_720.jpg' alt='Cat 1' layout="fill" objectFit="cover" placeholder='blur' className='rounded-xl' blurDataURL='https://cdn.pixabay.com/photo/2017/06/04/18/20/tick-2371782_960_720.jpg' />
            </div>
            <div className='bg-[rgba(222,93,248,0.5)] rotate-[18deg] opacity-0 card'>
              <Image src='https://cdn.pixabay.com/photo/2016/08/11/23/17/dragonfly-1587252_960_720.jpg' alt='Cat 1' layout="fill" objectFit="cover" placeholder='blur' className='rounded-xl' blurDataURL='https://cdn.pixabay.com/photo/2016/08/11/23/17/dragonfly-1587252_960_720.jpg' />
            </div>
          </div>

          <div className='flex absolute bottom-2 place-content-center gap-[15%]' >
            <button className='p-3 text-red-700 duration-300 rounded-full backdrop-invert-[10%] border-[3px] border-red-700 cardBtn' onClick={() => gotoSection(-1)}>
              <MdOutlineThumbDownOffAlt size={40} />
            </button>

            <button className='p-3 text-green-600 duration-300 rounded-full backdrop-invert-[10%] cardBtn border-[3px] border-green-600' onClick={() => gotoSection(+1)}>
              <MdOutlineThumbUpOffAlt size={40} />
            </button>
          </div>
        </div>


      </div>

    </>
  );
}

export default Cards;