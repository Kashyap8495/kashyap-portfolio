'use client'
import { FaReact, FaServer, FaCogs } from 'react-icons/fa'

export default function Services() {
  const list = [
    {
      icon: <FaReact size={28} className='text-accent' />,
      title: 'Frontend Development',
      desc: 'Beautiful, fast and responsive UI using React, Next.js & Tailwind.',
    },
    {
      icon: <FaServer size={28} className='text-accent' />,
      title: 'Backend Development',
      desc: 'Robust REST APIs with Node.js, Express & scalable architecture.',
    },
    {
      icon: <FaCogs size={28} className='text-accent' />,
      title: 'SaaS Solutions',
      desc: 'Production‑ready SaaS dashboards, auth systems & automation.',
    },
  ]

  return (
    <section id='services' className='mt-20 text-center scroll-mt-32'>
      <h2 className='text-3xl font-bold text-accent'>My Services</h2>
      <p className='mb-10 text-gray-400 mb-12'>
        Delivering high-quality solutions tailored to your needs
      </p>

      <div className='grid md:grid-cols-3 gap-6'>
        {list.map((s) => (
          <div
            key={s.title}
            className='p-8 bg-black/20 hover:bg-black/30 border border-white/10 backdrop-blur-md rounded-xl transition shadow-lg'
          >
            <div className='mb-4 flex justify-center'>{s.icon}</div>
            <h3 className='text-lg font-semibold mb-2'>{s.title}</h3>
            <p className='text-sm text-gray-300'>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
