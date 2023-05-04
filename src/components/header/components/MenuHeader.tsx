'use client'
import Link from 'next/link'
import ThemeChanger from './ThemeChanguer'




const links = [
   
  {
    label: 'About',
    route: '/'
  },
  {
    label: 'Projects',
    route: '/projects'
  },
  {
    label: 'Skills',
    route: '/skills'
  },
  {
    label: 'Contact',
    route: '/contact'
  }
]

function MenuHeader () {
  

  return (
    
    <nav className='pointer-events-auto ml-10 flex items-center gap-2  '>
        
      <ul className='flex  rounded-full bg-gray-500/40 px-3 sm:px-6 text-xs sm:text-base font-bold text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/50 dark:text-zinc-200 dark:ring-white/10 hover:prueba '>
        {links.map(({ label, route }) => (
          <li className='' key={label}>
            <Link
                  className='relative block px-[6px] py-2 text-zinc-900 transition  dark:text-white hover:text-violet-700 dark:hover:text-violet-700'
                  href={route}
                >
                  {label}
                </Link>
            
          </li>
        ))}
      </ul>
      <ThemeChanger/>
      
            
            
            
             
            
      
      
    </nav>
    
  )
}

export default MenuHeader