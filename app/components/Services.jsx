'use client'

import Reveal from './ui/Reveal'
import {
  FiLayout,
  FiServer,
  FiDatabase,
  FiZap,
  FiArrowUpRight,
  FiShield,
  FiLayers,
} from 'react-icons/fi'

const services = [
  {
    num: '01',
    icon: FiLayout,
    title: 'Full-Stack Web Development',
    desc: 'Building responsive SaaS platforms and web applications from initial wireframes to production deployment on Next.js and React.',
    tags: ['Next.js 14', 'React.js', 'TypeScript', 'Tailwind CSS', 'State Management'],
  },
  {
    num: '02',
    icon: FiServer,
    title: 'Backend APIs & Services',
    desc: 'Developing clean REST and GraphQL APIs in Node.js with secure authentication, payment processing, and third-party integrations.',
    tags: ['Node.js', 'Express', 'JWT / Auth', 'REST & GraphQL', 'WebSockets'],
  },
  {
    num: '03',
    icon: FiDatabase,
    title: 'Databases & Schema Design',
    desc: 'Designing relational and document schemas in PostgreSQL and MongoDB, writing clean migrations, and optimizing slow database queries.',
    tags: ['PostgreSQL', 'MongoDB', 'Drizzle ORM', 'Prisma', 'Sequelize'],
  },
  {
    num: '04',
    icon: FiZap,
    title: 'Performance & Deployment',
    desc: 'Setting up Docker containers, CI/CD deployment pipelines on Vercel and AWS, and optimizing application loading speed.',
    tags: ['Docker', 'Vercel / AWS', 'Redis Caching', 'CI/CD Pipelines', 'Monitoring'],
  },
]

export default function Services() {
  return (
    <section id='services' className='pt-20 pb-16 sm:pt-28 sm:pb-20 border-t border-stone-200/80 scroll-mt-20'>
      <Reveal>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12'>
          <div>
            <div className='flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#065F46] mb-2'>
              <span className='h-1.5 w-1.5 rounded-full bg-[#065F46]' />
              <span>What I Do</span>
            </div>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900'>
              Services &amp; Expertise
            </h2>
          </div>
          <p className='text-sm sm:text-base text-stone-600 max-w-md'>
            I build production-ready software from scratch or jump in to strengthen existing product teams.
          </p>
        </div>
      </Reveal>

      {/* Services 2x2 Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch'>
        {services.map((item, index) => {
          const Icon = item.icon
          return (
            <Reveal key={item.title} delay={index * 0.06} className='h-full'>
              <div className='group relative h-full flex flex-col justify-between rounded-2xl border border-stone-200/90 bg-white/90 p-8 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-[#065F46]/40 hover:bg-white hover:shadow-md'>
                <div className='flex-1 flex flex-col'>
                  <div className='flex items-center justify-between mb-6'>
                    <span className='inline-flex items-center justify-center h-12 w-12 rounded-xl border border-[#065F46]/30 bg-[#065F46]/10 text-[#065F46] text-xl transition-transform duration-300 group-hover:scale-110'>
                      <Icon />
                    </span>
                    <span className='text-xs font-mono font-bold text-stone-400 group-hover:text-[#065F46] transition-colors'>
                      {item.num}
                    </span>
                  </div>

                  <h3 className='text-xl sm:text-2xl font-semibold tracking-tight text-stone-900 group-hover:text-[#065F46] transition-colors'>
                    {item.title}
                  </h3>

                  <p className='mt-3 text-sm leading-relaxed text-stone-600'>
                    {item.desc}
                  </p>
                </div>

                <div className='mt-8 pt-6 border-t border-stone-200/80 flex flex-wrap gap-2'>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className='inline-flex items-center rounded-md border border-stone-200 bg-stone-100/80 px-2.5 py-1 text-[0.84rem] font-mono text-stone-700'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
