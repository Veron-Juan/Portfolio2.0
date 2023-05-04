'use client'
import { motion } from 'framer-motion'


type Props = {
  children: React.ReactNode
}

export default function ContainerAbout({ children }: Props) {
  return (
    <motion.main
      layout
      className='flex flex-col gap-9 mt-1 md:mt-[10px] grow'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ ease: 'linear', duration: 0.25 }}
    >
      {children}
    </motion.main>
  )
}
