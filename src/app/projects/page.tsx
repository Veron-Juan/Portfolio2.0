'use client'
import ContainerEffect from '@/components/ContainerEffect'
import React from 'react'
import Link from 'next/link'
import { projects } from '@/data/projects'
import CardProject from './components/CardProject'
import { motion } from 'framer-motion'

export default function PageProjects() {
  return (
    <ContainerEffect>
        <h2  className=' flex w-max flex-col items-center pb-4 text-4xl font-bold leading-10 tracking-tighter  sm:pb-8 md:mx-0 md:text-6xl '>
        Projects
        <span className='z-20 mt-4  inline-flex h-2 w-full animate-[rightGrow_3s_infinite_alternate] rounded-md bg-gradient-to-r from-blue-500 via-blue-700 to-fuchsia-500' />
      </h2>
      <div className='mt-8 flex flex-wrap justify-center gap-8 md:mt-10 md:gap-4  '>
      {projects.slice(0, 8).map((project) => (
          // <Link
          //   key={project.id}
          //   href='/projects/[id]'
          //   as={`/projects/${project.id}`}
          // >
          //   <FeaturedProject key={project.id} project={project} />
          // </Link>
          <div key={project.id} className='' >
            <CardProject  project={project} />
          </div>
        ))}
        
      </div>
    </ContainerEffect>
  )
}
