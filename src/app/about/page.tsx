
import Image from 'next/image'
import mern from "/public/mern.svg"
import twitter from "/public/Twitter.svg"
import gmail from "/public/gmail.svg"
import github from "public/GitHub.svg"
import linkedin from "public/LinkedIn.svg"
import work from "/public/work.svg"
import utn from "/public/utn.jpg"
import devlights from "/public/devlights.jpg"
import platzi from "/public/platzi.jpg"
import CircleImage from './components/CircleImage'
import ContainerAbout from './components/ContainerAbout'





export default function PageAbout() {
  return (
    <ContainerAbout>
    <div className='mt-14 mb-14 sm:mx-20 lg:mx-40 xl:mx-60 '   >
      
      <CircleImage/>
      
      <h3 className=' text-2xl sm:text-3xl font-bold leading-10 tracking-tighter   md:mx-0 md:text-3xl  '>I'm Juan Verón.</h3>
      <h1 className='text-transparent'>
        <span className='prueba font-black text-2xl sm:text-5xl lg:text-6xl'>Frontend Developer</span>
        </h1>
      <h3 className='flex w-max flex-col items-center text-2xl font-bold leading-10 tracking-tighter  sm:py-2 md:mx-0 md:text-3xl'>
        About me
        {/* <span className='z-20   inline-flex h-2 w-full animate-[rightGrow_3s_infinite_alternate] rounded-md bg-gradient-to-r from-blue-500 via-blue-700 to-red-600' /> */}
        </h3>
      <p >I'm Self-taught learner and
passionate about front-end development.  I have developed several projects , which have allowed me to put
into practice the skills I have acquired. I am eagerly looking forward to
participating in the creation of new and challenging projects with a great
working group.</p>
      <div className='mt-8 flex justify-between items-center'>
        <a href="/JuanVeron_CV.pdf" target="_blank" className='btn-grad   p-3 md:p-4 md:w-48   rounded-md hover:cursor-pointer'><p className='text-sm md:text-base'>Download CV</p></a>
        <div className='flex items-center gap-2 cursor-pointer'>
          <a href='mailto:juanvp.dev@gmail.com' target='_blank'>
          <Image src={gmail} alt="asd"  width={25}  className='md:w-[32px]'/>
          </a>
          <a href="https://www.linkedin.com/in/juanvp7/" target='_blank'>
          <Image src={linkedin} alt="asd"  width={25} className='md:w-[32px]'/>

          </a>
          <a href="https://github.com/Veron-Juan" target='_blank'>
          <Image src={github} alt="asd"  width={25} className='md:w-[32px]'/>

          </a>
          <a href="https://twitter.com/Juuan_vp" target='_blank'>
          <Image src={twitter}  alt="asd" width={25} className='md:w-[32px]'/>

          </a>

        </div>
      </div>
      <div className='mt-4 flex flex-col' >
        <div className='flex justify-center  gap-4'>
        <div   className='duration-400 relative flex justify-center w-[100px] sm:w-[124px] h-[110px]  md:h-[124px]  flex-col items-center gap-2 p-3 rounded-xl border border-indigo-300/50  shadow-inner transition-all hover:-translate-y-2 hover:bg-indigo-300/50 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:bg-zinc-600/30 dark:hover:shadow-transparent ' >
            <Image  width={50} src={work} alt='projects' />
            <p className='font-bold text-[12px]'>+8 projects</p>
          </div>
        <div className='duration-400 relative flex justify-center w-[100px] sm:w-[124px] h-[110px] md:h-[124px]  flex-col items-center gap-4 rounded-xl border border-indigo-300/50 p-3 shadow-inner transition-all hover:-translate-y-2 hover:bg-indigo-300/50 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:bg-zinc-600/30 dark:hover:shadow-transparent ' >
            <Image width={50}  src={mern} alt='projects' className='rounded-lg' />
            
            <p className='font-bold text-[12px]'>MERN Stack </p>
          </div>
        <div className='duration-400 relative flex justify-center w-[100px] sm:w-[124px] h-[110px] md:h-[124px]   flex-col items-center gap-4 rounded-xl border border-indigo-300/50 p-3 shadow-inner transition-all hover:-translate-y-2 hover:bg-indigo-300/50 dark:border-zinc-700/40 dark:shadow-zinc-700/40  dark:hover:bg-zinc-600/30 dark:hover:shadow-transparent ' >
            <Image width={70}  src={utn} alt='projects' className='rounded-lg' />
            <p className='font-bold text-[12px]'>Student</p>
          </div>
        </div>
      </div>



      <div className='mt-4 flex flex-col'>
        <h3 className=' flex w-max flex-col items-center text-2xl font-bold leading-10 tracking-tighter  sm:py-2 md:mx-0 md:text-3xl'>Certificates</h3>
        <div className='flex justify-normal gap-6'>
        <a className='duration-400 relative flex w-[260px] cursor-pointer flex-col items-center gap-4 rounded-xl border border-indigo-300/50 p-6 shadow-inner transition-all hover:-translate-y-2 hover:bg-indigo-300/50 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:bg-zinc-600/30 dark:hover:shadow-transparent md:min-h-[130px]' >
            <Image  height={80}  src={devlights}  alt='devlights' className='rounded-lg'/>
          </a>
          <a href='https://drive.google.com/drive/folders/1Yv5OqXh4KsvAmLWlABNTfWQ2SeQ639II' target='_blank' className='duration-400 relative flex w-[260px] cursor-pointer flex-col items-center gap-4 rounded-xl border border-indigo-300/50 p-6 shadow-inner transition-all hover:-translate-y-2 hover:bg-indigo-300/50 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:bg-zinc-600/30 dark:hover:shadow-transparent md:min-h-[130px]' >
            <Image height={190} src={platzi} alt='platzi' className='rounded-lg' />
          </a>
          

        </div>

      </div>
    </div>
    </ContainerAbout>
  )
}
