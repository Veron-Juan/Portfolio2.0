import React from 'react'
import gmail from "/public/gmail.svg"
import Image from 'next/image'
import ContainerEffect from '@/components/ContainerEffect'

export default function Contact() {
  return (
    <ContainerEffect>
        <a href='mailto:juanvp.dev@gmail.com'>
      <h2 className=' flex w-max flex-col items-center pb-4 text-4xl font-bold leading-10 tracking-tighter  sm:pb-8 md:mx-0 md:text-6xl '>
        Contact me
        <span className='z-20 mt-4  inline-flex h-2 w-full animate-[rightGrow_3s_infinite_alternate] rounded-md bg-gradient-to-r from-blue-500 via-blue-700 to-fuchsia-500' />
      </h2>
      <div className='duration-400 relative flex mx-auto min-w-[300px] max-w-[610px] cursor-pointer flex-col items-center gap-4 rounded-xl border border-indigo-300/50 p-6 shadow-inner transition-all hover:-translate-y-2 hover:bg-indigo-300/50 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:bg-zinc-600/30 dark:hover:shadow-transparent  ' >
        <h3 className='font-semibold text-lg'>Thank you for reaching this section, let's get in touch!</h3>
        <div className='flex justify-center items-center gap-3'>
        <Image src={gmail} alt='juanvp.dev@gmail.com' />
        <h3 className='font-medium '>
            juanvp.dev@gmail.com
        </h3>

        </div>
      </div>
      </a>
    </ContainerEffect>
  )
}
