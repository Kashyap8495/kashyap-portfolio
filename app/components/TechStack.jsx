'use client'
import {
  SiTailwindcss,
  SiMui,
  SiAntdesign,
  SiNextdotjs,
  SiTypescript,
  SiReact,
} from 'react-icons/si'

export default function TechStack() {
  const items = [
    {
      icon: <SiTailwindcss size={42} className='text-[#38BDF8]' />,
      label: 'Tailwind CSS',
    },
    { icon: <SiMui size={42} className='text-[#007FFF]' />, label: 'MUI' },
    {
      icon: <SiAntdesign size={42} className='text-[#0170FE]' />,
      label: 'Ant Design',
    },
    {
      icon: <SiNextdotjs size={42} className='text-white' />,
      label: 'Next.js',
    },
    {
      icon: <SiTypescript size={42} className='text-[#3178C6]' />,
      label: 'TypeScript',
    },
    {
      icon: <SiReact size={42} className='text-[#61DBFB] animate-spin-slow' />,
      label: 'React',
    },
  ]

  return (
    <section id='technology' className='mt-20 text-center scroll-mt-32'>
      <h2 className='text-3xl font-bold text-accent mb-10'>
        Technologies I Use
      </h2>
      <div className='flex gap-8 justify-items-center'>
        {items.map((t, i) => (
          <div
            key={i}
            className='p-6 bg-black/20 rounded-xl border border-white/10 shadow-lg backdrop-blur-md w-36 flex flex-col items-center hover:scale-110 transition cursor-pointer'
          >
            {t.icon}
            <span className='mt-3 text-sm text-gray-300 font-medium'>
              {t.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
