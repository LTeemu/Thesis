import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react';

const Custom404 = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <>
      <Head>
        <title>{'TL - 404'}</title>
        <meta
          name="description"
          content="Oops! This page doesn't exist :("
          key="desc"
        />
      </Head>

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
          onLoadingComplete={() => setImgLoaded(true)}
          className={`bg-no-repeat aspect-square ${imgLoaded ? 'animate-unblur' : ''}`}
        />
      </div>
    </>
  );
}

export default Custom404;