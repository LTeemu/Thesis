import Image from 'next/image'
import Head from 'next/head'

const Custom404 = () => {
  return (
    <>
      <Head><title>{'TL - 404'}</title></Head>
      <p className='z-10 self-center mt-2 text-2xl'>This page doesn&apos;t exist</p>
      <div className='relative flex items-center self-center justify-center flex-1 w-full max-w-lg'>
        <Image
          priority={true}
          src={'/static/images/oops.webp'}
          alt='404 Note'
          layout='fill'
          objectFit='contain'
          objectPosition='center'
          placeholder='blur'
          blurDataURL='/static/images/oops.webp'
          className='bg-no-repeat aspect-square'
        />
      </div>
    </>
  );
}

export default Custom404;