import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {useState} from 'react';

const Home: NextPage = () => {
  const [nameActive, setNameActive] = useState(false);

  return (
    <>
      <Head>
        <title>Adi Cahya Saputra</title>
      </Head>
      <div className='no-scrollbar'>
        <section className='w-full h-screen bg-blue-900'>
          <div className="container fixed z-20 w-full left-[50%] -translate-x-[50%] top-0 mx-auto p-4 flex flex-col justify-center items-center">
            <div className="mt-16 w-10/12 md:w-6/12">
              <Image src="/head.png" priority width={1024} height={1024} />
            </div>
            <header onClick={() => setNameActive(!nameActive)} className='relative overflow-hidden mt-12 px-2 h-16 flex flex-col justify-end bg-red-600'>
              <h1 className="text-xl py-4 px-8 md:text-2xl font-bold text-white font-mono tracking-widest">
                Adi Cahya Saputra
              </h1>
              <div className={`flex justify-center items-center font-bold font-mono absolute h-full ${nameActive ? 'top-0' : '-top-full'} transition-all duration-500 inset-x-0 py-4 bg-white`}>
                Frontend Engineer
              </div>
            </header>
          </div>
        </section>
        <section className='w-full relative py-12 z-30 backdrop-blur-sm min-h-screen bg-black/30 flex justify-center items-center'>
          <main className='container mx-auto p-2 h-full'>
            <div className='flex flex-col h-full justify-center items-center'>
              <h1 className='py-1.5 mb-4 w-max text-xl text-white font-bold border-b-2 border-white'>Current Skills</h1>
              <div className='flex justify-center items-center space-x-4'>
                <div className='w-10 h-10 bg-white flex justify-center items-center p-2 shadow-md'>
                  <Image src="/icons/nextjs.png" width={30} height={30} />
                </div>
                <div className='w-10 h-10 bg-white flex justify-center items-center p-2 shadow-md'>
                  <Image src="/icons/laravel.png" width={30} height={30} />
                </div>
                <div className='w-10 h-10 bg-white flex justify-center items-center p-2 shadow-md'>
                  <Image src="/icons/tailwind.svg" width={30} height={30} />
                </div>
              </div>
              <h1 className='py-1.5 mb-4 w-max text-xl text-white font-bold border-b-2 border-white mt-16'>My Latest Project</h1>
              <article className='p-3 w-full mx-auto flex justify-center items-center flex-col'>
                <div className='w-full md:w-6/12 aspect-video bg-white'></div>
                <div className='p-2 md:w-6/12 w-full text-center bg-gray-200'>
                  <a href="#" className="text-blue-700 font-light text-lg w-full">Link To Github Project</a>
                </div>
              </article>
              <article className='p-3 w-full mx-auto flex justify-center items-center flex-col'>
                <div className='w-full md:w-6/12 aspect-video bg-white'></div>
                <div className='p-2 md:w-6/12 w-full text-center bg-gray-200'>
                  <a href="#" className="text-blue-700 font-light text-lg w-full">Link To Github Project</a>
                </div>
              </article>
              <article className='p-3 w-full mx-auto flex justify-center items-center flex-col'>
                <div className='w-full md:w-6/12 aspect-video bg-white'></div>
                <div className='p-2 md:w-6/12 w-full text-center bg-gray-200'>
                  <a href="#" className="text-blue-700 font-light text-lg w-full">Link To Github Project</a>
                </div>
              </article>
            </div>
          </main>
        </section>
        <footer className="p-4 bg-zinc-900">
          <div className='container mx-auto'>
            <div className="flex font-mono text-white justify-between items-center">
              <h1>Copyright ©2022</h1>
              <p>Adi Cahya Saputra</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home
