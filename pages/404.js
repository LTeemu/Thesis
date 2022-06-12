import Image from 'next/image'
import Head from 'next/head'

const custom404 = () => {
  return (
    //Minus header and footer
    <div className='flex flex-col items-center h-[calc(100vh_-_66px_-_59.2px)]'>
      <Head><title>{'TL - 404'}</title></Head>
      <h2>This page doesn&apos;t exist</h2>
      <div className='relative w-screen max-w-lg'>
        <Image
          src={'/static/images/oops-gbb906866a_1280-removebg-preview-min.png'}
          alt='404 Note'
          layout='responsive'
          objectFit='contain'
          width='100%'
          height='100%'
        />
      </div>
    </div>
  );
}

export default custom404;