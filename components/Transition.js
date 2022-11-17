import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const Transition = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoading(true))
    return () => {
      router.events.off('routeChangeStart', () => setLoading(true))
    }
  }, [])

  useEffect(() => {
    router.isReady && setLoading(false);
  }, [router])

  return (
    <div id='transition' className={`fixed z-[51] w-screen h-full pointer-events-none ${loading ? 'animate-loadingBG' : 'animate-none'}`} style={{ animationDelay: '1200ms' }}>
      <div className='w-0 h-[20%] absolute bg-lightprimary dark:bg-darkprimary invert-[0.03] transitionBar'></div>
      <div className='w-0 h-[20%] translate-y-[100%] absolute bg-lightprimary dark:bg-darkprimary invert-[0.06] transitionBar'></div>
      <div className='w-0 h-[20%] translate-y-[200%] absolute bg-lightprimary dark:bg-darkprimary invert-[0.03] transitionBar'></div>
      <div className='w-0 h-[20%] translate-y-[300%] absolute bg-lightprimary dark:bg-darkprimary invert-[0.06] transitionBar'></div>
      <div className='w-0 h-[20%] translate-y-[400%] absolute bg-lightprimary dark:bg-darkprimary invert-[0.03] transitionBar'></div>
    </div>
  );
}

export default Transition;