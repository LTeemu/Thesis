import Mug from '../components/Mug'
import Head from 'next/head'

const Page2 = () => {
  return (
    //Minus header and footer
    <div className='h-[calc(100vh_-_66px_-_59.2px)] flex justify-center'>
      <Head><title>{'TL - Page 2'}</title></Head>
      <Mug />
    </div >
  );
}

export default Page2;