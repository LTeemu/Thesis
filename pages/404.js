import Image from 'next/image'
import Head from 'next/head'

const Custom404 = () => {
  return (
    <div className='flex flex-col items-center flex-1'>
      <Head><title>{'TL - 404'}</title></Head>
      <p className='z-10 mt-2 text-2xl'>This page doesn&apos;t exist</p>
      <div className='relative h-[80vw] w-[80vw] max-h-[700px] m-auto'>
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
    </div>
  );
}

export default Custom404;