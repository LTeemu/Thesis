import { useEffect, useRef } from 'react'
import { gsap } from 'gsap/dist/gsap'
const Hamburger = ({ navOpen, setNavOpen }) => {

  const burgerTL = useRef()

  useEffect(() => {
    burgerTL.current = gsap.timeline({ defaults: { duration: 0.2 } })
    burgerTL.current
      .to('#burger_top', { yPercent: -50, top: "50%" })
      .to('#burger_bottom', { yPercent: -50, top: "50%" }, '<')
      .to('#burger_top', { rotate: 45 }, '>')
      .to('#burger_middle', { rotate: -45 }, '<')
      .to('#burger_bottom', { rotate: -45 }, '<')
  }, [])

  useEffect(() => {
    navOpen ? burgerTL.current.play() : burgerTL.current.reverse()
  }, [navOpen])

  return (
    <button type='button' id='burger_container' aria-label='Open menu' className='cursor-pointer flex flex-col relative h-[40px] w-[40px] justify-center my-auto md:hidden' onClick={() => setNavOpen(!navOpen)}>
      <span id='burger_top' className='absolute w-full top-[0%] bg-[#b56d32] rounded-md h-1/5 shadow-[inset_-1px_-1px_2px_1px_rgba(0,0,0,0.4)]'></span>
      <span id='burger_middle' className='absolute w-full bg-[#764723] rounded-md h-1/5 shadow-[inset_-1px_-1px_2px_1px_rgba(0,0,0,0.4)]'></span>
      <span id='burger_bottom' className='absolute w-full bottom-[0%]  bg-[#b56d32] rounded-md h-1/5 shadow-[inset_-1px_-1px_2px_1px_rgba(0,0,0,0.4)]'></span>
    </button>
  )
}

export default Hamburger
