// 'use client'
// import { motion } from 'framer-motion'
// import Image from 'next/image'

// export default function ProjectCard({ title, tech, img, link }) {
//   return (
//     <motion.a
//       whileHover={{ scale: 1.03 }}
//       transition={{ duration: 0.3 }}
//       href={link}
//       target='_blank'
//       className='block bg-black/20 border border-white/10 rounded-xl overflow-hidden shadow-lg'
//     >
//       <div className='relative h-40 w-full'>
//         <Image src={img} fill className='object-cover' alt='project' />
//       </div>
//       <div className='p-4 text-left'>
//         <div className='text-accent text-sm'>{tech}</div>
//         <div className='text-lg font-semibold mt-1'>{title}</div>
//       </div>
//     </motion.a>
//   )
// }

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
          className='object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-110'
          alt={title}
        />
      </div>

      {/* Strong Gradient Overlay for visibility */}
      <div
        className='absolute inset-0
        bg-gradient-to-b from-black/70 via-black/80 to-black/90
        opacity-0 group-hover:opacity-100
        transition-all duration-500'
      ></div>

      {/* Hover Content */}
      <div
        className='absolute inset-0 flex flex-col items-center justify-center
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
    </motion.a>
  )
}
