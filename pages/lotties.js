import { useRef, useEffect } from 'react'
import lottie from 'lottie-web'

const lotties = () => {
  const lottieRef = useRef()

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../public/static/lottie/enjoying-sloth.json'),
      rendererSettings: {
        //className: '',
      }
    });
    return () => animation.destroy();
  }, [])

  return (
    <div>

      <div className='mx-auto max-w-7xl'>
        <div className='7xl:border-l-[#d7743e] 7xl:border-b-[#31a56bee] 7xl:border-l-[0.25rem] 7xl:border-b-[0.25rem] rounded-bl-[33%] pr-6'>
          <div className='flex max-h-[600px] relative'>
            <div ref={lottieRef} className='w-[50vw] max-w-[600px]'></div>
            <h1 className='flex m-auto text-3xl font-extrabold tracking-wider text-transparent md:text-5xl sm:text-4xl'>
              <a href='https://lottiefiles.com/108020-enjoying-sloth' alt="Lottie Sloth" target={'_blank'} className='bg-clip-text from-green-500 to-orange-500 bg-gradient-to-tr'>Lottie Sloth</a>
            </h1>
          </div>
        </div>
        <div className='px-6'>
          <p className='mt-10'>A sloth swings on a branch and a red panda emerges from the bushes. The pangolin, too, has emerged from a bush and is hanging on to a tree branch. In fact, you can see sloths, pangs, and pandas on the same tree, but it is the panda that has the "hand". </p>
        </div>
      </div>
    </div>
  );
}

export default lotties;