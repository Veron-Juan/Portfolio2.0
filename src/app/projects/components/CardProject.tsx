import Image from 'next/image'
import github from "/public/GitHub.svg"
import page from "/public/extLink.svg"
import lofimusic from "/public/lofimusic.png"

type Stack = {
    name: string;
    color: string;
  }

export interface Project {
    id: number;
    name: string;
    stack: Stack[];
    description: string;
    img: string;
    url: string;
    code: string;
    progress: boolean;
    date: string;
  }

type Props = {
  project: Project
}

function CardProject ({ project }: Props) {
  return (
    <div className='duration-400 flex max-w-sm cursor-pointer flex-col  rounded-xl border border-indigo-300/50  bg-white p-0  transition-all hover:-translate-y-4  dark:border-zinc-700/40 dark:bg-transparent dark:shadow-zinc-800  '>
      <div className='flex-1'>
        <div className='relative w-[300px] mx-auto mt-2 '>
          <Image
          
          className='rounded-lg h-52'
          width={350}
          height={150}
          
          src={project?.img}
          alt='lofi music'
          
          />
        </div>
      </div>

      <div className='flex flex-1 flex-col gap-4 p-5 pb-6'>
        <div className='flex items-center gap-3'>
          <h2 className='flex text-xl font-semibold '>
            {project?.name}
          </h2>
        </div>

        <ul className='flex gap-3 text-xs   md:text-[13px]'>
          {project?.stack.map((technology) => (
            <li
              className={`truncate rounded-sm border-2 border-zinc-500/20 ${technology.color} p-1 font-semibold`}
              key={technology.name}
            >
              {technology.name}
            </li>
          ))}
        </ul>

        <p className='text-sm  sm:text-base'>
          {project?.description}
        </p>

        
          <div className='flex items-center gap-8' >
            <a href={project.url} target='_blank' className='group inline-flex items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 text-sm font-extrabold text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-700/50 dark:text-zinc-200 dark:hover:bg-zinc-700/70 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70  '>
            <Image
              src={page}
              alt='github'
              />
              Visit</a>
            <a href={project.code} target='_blank'  className='group inline-flex items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 text-sm font-extrabold text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-700/50 dark:text-zinc-200 dark:hover:bg-zinc-700/70 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70  '>
              <Image
              src={github}
              width={25}
              alt='github'
              />
              Code
              
              </a>
            
          </div>
        
      </div>
    </div>
  )
}

export default CardProject