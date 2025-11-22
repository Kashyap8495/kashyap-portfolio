'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProjectCard({ title, tech, img, link }) {
  return (
    <motion.a
      href={link}
      target='_blank'
      className='group block relative rounded-xl overflow-hidden border border-white/10 bg-black/20 shadow-lg'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image */}
      <div className='relative h-56 w-full'>
        <Image
          src={img}
          fill
          alt={title}
          className='object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-110'
        />
      </div>

      {/* DESKTOP: Hover Gradient Overlay */}
      <div
        className='absolute inset-0 hidden md:block
        bg-gradient-to-b from-black/70 via-black/80 to-black/90
        opacity-0 group-hover:opacity-100
        transition-all duration-500'
      ></div>

      {/* DESKTOP: Hover Content */}
      <div
        className='absolute inset-0 hidden md:flex flex-col items-center justify-center
        opacity-0 group-hover:opacity-100
        transition-all duration-500 p-4 text-center'
      >
        <h3 className='text-lg font-semibold text-white drop-shadow-xl'>
          {title}
        </h3>
        <p className='text-sm text-accent mt-2 font-medium drop-shadow-xl'>
          {tech}
        </p>
      </div>

      {/* MOBILE: Always-visible glass blur background */}
      <div
        className='absolute bottom-0 left-0 right-0 md:hidden
  p-4 backdrop-blur-lg bg-black/60
  flex flex-col items-start justify-end'
      >
        <h3 className='text-base font-semibold text-white drop-shadow-xl'>
          {title}
        </h3>
        <p className='text-xs text-accent mt-1 font-medium drop-shadow-xl'>
          {tech}
        </p>
      </div>
    </motion.a>
  )
}
