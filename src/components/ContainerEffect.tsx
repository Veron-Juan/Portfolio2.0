'use client'
import { motion } from 'framer-motion'


type Props = {
  children: React.ReactNode
}

function ContainerEffect ({ children }: Props) {
  return (
    <motion.main
    initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeIn', duration: 0.4, delay: 0.3 }}
      className='mt-14   md:mt-4 sm:mx-26 lg:mx-40 xl:mx-60'
    >
      {children}
    </motion.main>
  )
}

export default ContainerEffect