import ContainerEffect from '@/components/ContainerEffect'
import React from 'react'
import { skills } from '@/data/skills'
import Image from 'next/image'

export default function PageSkills() {
  return (
    <ContainerEffect>
        <div className='mt-4 flex flex-col'>
        <h2 className=' flex w-max flex-col items-center pb-4 text-4xl font-bold leading-10 tracking-tighter  sm:pb-8 md:mx-0 md:text-6xl '>
        Skills
        <span className='z-20 mt-4  inline-flex h-2 w-full animate-[rightGrow_3s_infinite_alternate] rounded-md bg-gradient-to-r from-blue-500 via-blue-700 to-fuchsia-500' />
      </h2>
        <div className='flex flex-wrap items-center justify-center gap-6'>
            {skills.map((skill)=>{
                return(
                    <div key={skill.id} className='duration-400 relative flex w-[160px] h-[160px] cursor-pointer flex-col items-center justify-center gap-4 bg-slate-300 rounded-xl border border-indigo-300/50 p-6 shadow-inner transition-all hover:-translate-y-2 hover:bg-indigo-300/50 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:bg-zinc-600/30 dark:hover:shadow-transparent ' >
            <Image width={80} height={80}  src={skill.img} alt="asddas" />
            
          </div>
                )
            })}

        
          
          

        </div>

      </div>
    </ContainerEffect>
  )
}
