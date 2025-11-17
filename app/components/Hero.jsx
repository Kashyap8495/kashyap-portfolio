'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiDownload } from 'react-icons/fi'
import profileImage from '@/app/assets/images/profile-photo.jpeg'

export default function Hero() {
  return (
    <section
      id='home'
      className='pt-32 pb-16 text-center relative scroll-mt-32'
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-4xl md:text-5xl font-extrabold'
      >
        Hi, I'm <span className='text-accent'>Kashyap</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='mt-4 max-w-xl mx-auto text-gray-300'
      >
        Full Stack Developer creating innovative and scalable products with
        modern technologies.
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='w-48 h-48 mx-auto mt-10 relative'
      >
        {/* neon glow */}
        <div className='absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-xl opacity-40'></div>

        {/* circular profile image */}
        <div className='relative rounded-full overflow-hidden w-48 h-48 border-4 border-accent shadow-xl'>
          <Image
            src={profileImage}
            alt='Kashyap'
            fill
            className='object-cover w-48 h-48'
          />
        </div>
      </motion.div>

      <div className='mt-8 flex justify-center gap-4'>
        <a
          href='#contact'
          className='px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-white shadow-lg'
        >
          Get in Touch
        </a>

        <a
          href='/resume.pdf'
          target='_blank'
          className='flex items-center gap-2 px-6 py-2 border border-gray-500 rounded-full'
        >
          <FiDownload /> Resume
        </a>
      </div>
    </section>
  )
}
