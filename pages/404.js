import Image from 'next/image'
import Head from 'next/head'

const Custom404 = () => {
  return (
    //Minus header and footer
    <div className='flex flex-col items-center h-[calc(100vh_-_66px_-_65px)]'>
      <Head><title>{'TL - 404'}</title></Head>
      <h2>This page doesn&apos;t exist</h2>
      <div className='relative w-full h-full max-w-2xl'>
        <Image
          src={'/static/images/oops.webp'}
          alt='404 Note'
          layout='fill'
          objectFit='contain'
          priority={true}
        />
      </div>
    </div>
  );
}

export default Custom404;