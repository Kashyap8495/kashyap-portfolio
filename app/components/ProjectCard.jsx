'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProjectCard({ title, tech, img, link }) {
  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      href={link}
      target='_blank'
      className='block bg-black/20 border border-white/10 rounded-xl overflow-hidden shadow-lg'
    >
      <div className='relative h-40 w-full'>
        <Image src={img} fill className='object-cover' alt='project' />
      </div>
      <div className='p-4 text-left'>
        <div className='text-accent text-sm'>{tech}</div>
        <div className='text-lg font-semibold mt-1'>{title}</div>
      </div>
    </motion.a>
  )
}
