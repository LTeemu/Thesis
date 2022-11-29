import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { gsap, Expo } from 'gsap'
import { MdOutlineThumbDownOffAlt, MdOutlineThumbUpOffAlt } from 'react-icons/md'
import { cards } from '../public/static/cards'

const Cards = () => {
  const animating = useRef(false)
  const index = useRef(0)
  const cardStacks = useRef()
  const wrap = useRef()
  const tl = useRef()

  let initialCards = [rCard(), rCard(), rCard(), rCard()];
  const blankCard = { href: "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", alt: "blank" }
  const [cardsOne, setCardsOne] = useState(initialCards)
  const [cardsTwo, setCardsTwo] = useState([blankCard, blankCard, blankCard, blankCard])

  useEffect(() => {
    //50% no gap
    const cardHover = () => {
      gsap.to(cardStacks.current[index.current].children[0], { rotate: 0, xPercent: -53, yPercent: -51.5 });
      gsap.to(cardStacks.current[index.current].children[1], { rotate: 0, xPercent: 53, yPercent: -51.5 });
      gsap.to(cardStacks.current[index.current].children[2], { rotate: 0, xPercent: -53, yPercent: 51.5 });
      gsap.to(cardStacks.current[index.current].children[3], { rotate: 0, xPercent: 53, yPercent: 51.5 });
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

    //Set random bgs to first cardStack on load
    gsap.set(cardStacks.current[0].children[0], { backgroundColor: rColor })
    gsap.set(cardStacks.current[0].children[1], { backgroundColor: rColor }, '<')
    gsap.set(cardStacks.current[0].children[2], { backgroundColor: rColor }, '<')
    gsap.set(cardStacks.current[0].children[3], { backgroundColor: rColor }, '<')

    return () => {
      cardStacks.current.forEach((stack) => {
        stack.removeEventListener("mouseenter", cardHover);
        stack.removeEventListener("mouseleave", cardReset);
      })
    }
  }, [])

  function rColor() {
    return `rgba(${gsap.utils.random(50, 200)}, ${gsap.utils.random(50, 200)}, ${gsap.utils.random(50, 200)}, 0.7)`;
  }

  function rCard() { return gsap.utils.random(cards) }

  function newCards() {
    index.current === 0
      ? setCardsTwo([rCard(), rCard(), rCard(), rCard()])
      : setCardsOne([rCard(), rCard(), rCard(), rCard()]);
  }

  function clearOldCards(index) {
    index === 0
      ? setCardsOne([rCard(), rCard(), rCard(), rCard()])
      : setCardsTwo([blankCard, blankCard, blankCard, blankCard]);
  }

  function gotoSection(direction) {
    if (!animating.current) {
      animating.current = true;
      let oldIndex = index.current;
      let newIndex = wrap.current(index.current + 1);

      tl.current
        .set('.cardBtn', { opacity: 0.6, pointerEvents: 'none' })
        .add(newCards, '<')
        .set(cardStacks.current[newIndex], { pointerEvents: 'none' }, '<')
        .set(cardStacks.current[newIndex].children[0], { rotate: -18, xPercent: 0, yPercent: 0, backgroundColor: rColor }, '<')
        .set(cardStacks.current[newIndex].children[1], { rotate: -6, xPercent: 0, yPercent: 0, backgroundColor: rColor }, '<')
        .set(cardStacks.current[newIndex].children[2], { rotate: 6, xPercent: 0, yPercent: 0, backgroundColor: rColor }, '<')
        .set(cardStacks.current[newIndex].children[3], { rotate: 18, xPercent: 0, yPercent: 0, backgroundColor: rColor }, '<')
        .to(cardStacks.current[oldIndex].children, { scale: 0, autoAlpha: 0, xPercent: 100 * direction, yPercent: 25, stagger: { each: 0.1, from: "random" }, onComplete: () => clearOldCards(oldIndex) }, '>')
        .fromTo(cardStacks.current[newIndex].children, { scale: 0, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, stagger: { each: 0.1, from: "random" }, onComplete: () => { index.current = newIndex, animating.current = false } }, '<')
        .set(cardStacks.current[newIndex], { pointerEvents: 'all' }, '>')
        .set('.cardBtn', { opacity: 1, pointerEvents: 'all' }, '<')
    }
  }

  return (
    <>
      <Head>
        <title>{'TL - Cards'}</title>
        <meta
          name="description"
          content="Card animation made with GSAP."
          key="desc"
        />
      </Head>

      <div className='flex flex-col relative items-center justify-center flex-1 min-h-[350px] max-h-[200vw]'>
        <div id='cardStack' className='absolute grid self-center h-full scale-0 place-items-center'>
          <div className='-rotate-[18deg] card'>
            <Image src={cardsOne[0].href} alt={cardsOne[0].alt} layout="fill" objectFit="cover" placeholder='blur' className='rounded-xl' blurDataURL={cardsOne[0].href} priority={true} />
          </div>
          <div className='-rotate-6 card'>
            <Image src={cardsOne[1].href} alt={cardsOne[1].alt} layout="fill" objectFit="cover" placeholder='blur' className='rounded-xl' blurDataURL={cardsOne[1].href} priority={true} />
          </div>
          <div className='rotate-6 card'>
            <Image src={cardsOne[2].href} alt={cardsOne[2].alt} layout="fill" objectFit="cover" placeholder='blur' className='rounded-xl' blurDataURL={cardsOne[2].href} priority={true} />
          </div>
          <div className='rotate-[18deg] card'>
            <Image src={cardsOne[3].href} alt={cardsOne[3].alt} layout="fill" objectFit="cover" placeholder='blur' className='rounded-xl' blurDataURL={cardsOne[3].href} priority={true} />
          </div>
        </div>

        <div id='cardStack' className='absolute grid self-center h-full place-items-center'>
          <div className='-rotate-[18deg] opacity-0 card'>
            <Image src={cardsTwo[0].href} alt={cardsTwo[0].alt} layout="fill" objectFit="cover" placeholder='blur' className='rounded-xl' blurDataURL={cardsTwo[0].href} priority={true} />
          </div>
          <div className='opacity-0 -rotate-6 card'>
            <Image src={cardsTwo[1].href} alt={cardsTwo[1].alt} layout="fill" objectFit="cover" placeholder='blur' className='rounded-xl' blurDataURL={cardsTwo[1].href} priority={true} />
          </div>
          <div className='opacity-0 rotate-6 card'>
            <Image src={cardsTwo[2].href} alt={cardsTwo[2].alt} layout="fill" objectFit="cover" placeholder='blur' className='rounded-xl' blurDataURL={cardsTwo[2].href} priority={true} />
          </div>
          <div className='rotate-[18deg] opacity-0 card'>
            <Image src={cardsTwo[3].href} alt={cardsTwo[3].alt} layout="fill" objectFit="cover" placeholder='blur' className='rounded-xl' blurDataURL={cardsTwo[3].href} priority={true} />
          </div>
        </div>
      </div>
      <div className='flex py-2 place-content-center gap-[15%] self-center' >
        <button aria-label='Dislike' className='p-3 text-red-700 duration-300 rounded-full backdrop-invert-[10%] border-[3px] border-red-700 cardBtn' onClick={() => gotoSection(-1)}>
          <MdOutlineThumbDownOffAlt style={{ fontSize: '2rem' }} />
        </button>

        <button aria-label='Like' className='p-3 text-green-600 duration-300 rounded-full backdrop-invert-[10%] cardBtn border-[3px] border-green-600' onClick={() => gotoSection(+1)}>
          <MdOutlineThumbUpOffAlt style={{ fontSize: '2rem' }} />
        </button>
      </div>
    </>
  );
}

export default Cards;