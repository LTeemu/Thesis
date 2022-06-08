import Image from 'next/image'

const custom404 = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2>This page doesn't exist</h2>
      <div className='relative w-screen max-w-lg'>
        <Image
          src={'/static/images/oops-gbb906866a_1280-removebg-preview-min.png'}
          alt='image1'
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