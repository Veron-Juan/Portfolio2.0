
import { Inter } from 'next/font/google'

import PageAbout from './about/page'

import PageProjects from './projects/page'
import PageSkills from './skills/page'
import Contact from './contact/page'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  

  return (
    <main className="flex flex-col gap-9 mt-1 md:mt-[40px] grow">
      
      <PageAbout/>
      <PageProjects/>
      <PageSkills/>
      <Contact/>
      
    </main>
  )
}
