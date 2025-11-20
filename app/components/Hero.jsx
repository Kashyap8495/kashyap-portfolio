'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import profileImage from '@/app/assets/images/profile-photo.jpeg'
import Counter from './Counter'

export default function Hero() {
  return (
    <section
      id='home'
      className='pt-32 pb-10 max-w-7xl mx-auto px-6 scroll-mt-32'
    >
      <div className='grid md:grid-cols-2 gap-10 items-center'>
        {/* LEFT SIDE */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-5xl md:text-6xl font-extrabold leading-tight text-white'
          >
            Hi, I'm <br />
            <span className='bg-gradient-to-r from-[#9b5cff] to-[#4ba3ff] bg-clip-text text-transparent'>
              Kashyap
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mt-6 text-gray-300 text-lg leading-relaxed max-w-lg'
          >
            Crafting innovative digital solutions with cutting-edge
            technologies. Transforming ideas into elegant, scalable, and
            efficient applications that drive business success.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='mt-10 flex gap-5'
          >
            <a
              href='#contact'
              className='px-8 py-3 rounded-full bg-gradient-to-r from-[#9b5cff] to-[#4ba3ff] text-white font-medium text-lg shadow-lg hover:scale-105 transition'
            >
              Get in Touch →
            </a>

            <a
              href='#work'
              className='px-8 py-3 rounded-full border-2 border-[#9b5cff] text-white font-medium text-lg hover:bg-white/10 transition flex items-center gap-2'
            >
              View My Work <FiArrowRight />
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE — IMAGE WITH GLOW */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className='relative flex justify-center'
        >
          {/* Glow effect */}
          <div className='absolute w-[320px] h-[320px] rounded-full bg-gradient-to-br from-[#9b5cff] to-[#4ba3ff] blur-[80px] opacity-40'></div>

          {/* Profile */}
          <div className='relative w-[260px] h-[260px] rounded-full overflow-hidden border-[6px] border-[#9b5cff] shadow-xl'>
            <Image
              src={profileImage}
              alt='Kashyap'
              fill
              className='object-cover'
            />
          </div>
        </motion.div>
      </div>

      {/* BOTTOM STATS */}
      <div className='grid md:grid-cols-4 gap-6 mt-16 text-center'>
        {[
          { num: 3.5, suffix: '+', label: 'Years Experience' },
          { num: 15, suffix: '+', label: 'Projects Completed' },
          { num: 12, suffix: '+', label: 'Happy Clients' },
          { num: 100, suffix: '%', label: 'Client Satisfaction' },
        ].map((item, i) => (
          <div
            key={i}
            className='p-6 bg-[#111827]/60 rounded-xl border border-white/10 backdrop-blur-md shadow-lg'
          >
            <div className='text-3xl font-bold text-[#b277ff] flex justify-center'>
              <Counter end={item.num} />
              {item.suffix}
            </div>
            <div className='mt-2 text-gray-300'>{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
