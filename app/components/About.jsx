'use client'

import Image from 'next/image'
import Reveal from './ui/Reveal'
import { FiCheckCircle, FiCode, FiDatabase, FiServer, FiShield, FiTrendingUp } from 'react-icons/fi'
import profilePhoto from '@/app/assets/images/profile-photo.jpeg'

const pillars = [
  {
    icon: FiCode,
    title: 'Frontend & System UI',
    desc: 'Crafting responsive, accessible, high-performance interfaces with React.js, Next.js App Router, Tailwind CSS, and Framer Motion.',
  },
  {
    icon: FiServer,
    title: 'Robust Backend APIs',
    desc: 'Designing scalable Node.js microservices, RESTful and GraphQL endpoints, authentication flows, and real-time WebSocket integrations.',
  },
  {
    icon: FiDatabase,
    title: 'Data Architecture',
    desc: 'Modeling performant relational and document schemas in PostgreSQL and MongoDB using Prisma, Drizzle ORM, and Sequelize.',
  },
]

export default function About() {
  return (
    <section id='about' className='py-20 sm:py-28 scroll-mt-20'>
      <Reveal>
        <div className='flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#065F46] mb-3'>
          <span className='h-1.5 w-1.5 rounded-full bg-[#065F46]' />
          <span>About Me</span>
        </div>
      </Reveal>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start'>
        {/* Left Column: Bio & Core Mission */}
        <div className='lg:col-span-7'>
          <Reveal delay={0.05}>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15]'>
              I build products,{' '}
              <span className='text-[#065F46]'>
                not just interfaces.
              </span>
            </h2>

            <p className='mt-6 text-base sm:text-lg leading-relaxed text-stone-700 font-normal'>
              For the past 4+ years, I&apos;ve worked with startups and growing teams to build scalable web applications.
              My experience covers SaaS platforms, healthcare systems, financial tools, and real-time marketplaces.
            </p>

            <p className='mt-4 text-base sm:text-lg leading-relaxed text-stone-600'>
              I work across the full stack—building fast, responsive user interfaces in React and Next.js, writing reliable
              APIs in Node.js, and structuring clean data models in PostgreSQL and MongoDB. I take ownership of features
              from requirements through to production release and monitoring.
            </p>

            {/* Bullet Highlights */}
            <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-mono text-stone-700'>
              {[
                'End-to-end product delivery',
                'Type-safe code with TypeScript & Zod',
                'Fast page loads & database optimization',
                'Automated CI/CD & cloud deployments',
              ].map((item) => (
                <div key={item} className='flex items-center gap-2'>
                  <FiCheckCircle className='text-[#065F46] text-sm shrink-0' />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right Column: Profile Card & Pillars */}
        <div className='lg:col-span-5'>
          <Reveal delay={0.1}>
            <div className='rounded-2xl border border-stone-200/90 bg-white/95 p-6 backdrop-blur-xl shadow-sm'>
              {/* Profile Header */}
              <div className='flex items-center gap-4 pb-6 border-b border-stone-200/80'>
                <div className='relative h-16 w-16 overflow-hidden rounded-full border-2 border-[#065F46]/60 shadow-md shadow-[#065F46]/10'>
                  <Image
                    src={profilePhoto}
                    alt='Kashyap Patel'
                    fill
                    sizes='64px'
                    className='object-cover object-top'
                  />
                </div>
                <div>
                  <h3 className='text-base font-semibold text-stone-900'>Kashyap Patel</h3>
                  <p className='text-xs font-mono text-[#065F46] font-medium'>Senior Full-Stack Engineer</p>
                  <p className='text-xs text-stone-500 mt-0.5'>Surat, India · Global Remote</p>
                </div>
              </div>

              {/* Pillars Stack */}
              <div className='mt-6 space-y-4'>
                {pillars.map((pillar) => {
                  const Icon = pillar.icon
                  return (
                    <div
                      key={pillar.title}
                      className='group rounded-xl border border-stone-200/80 bg-stone-50/70 p-4 transition-all duration-300 hover:border-[#065F46]/40 hover:bg-white hover:shadow-xs'
                    >
                      <div className='flex items-center gap-2.5 text-sm font-semibold text-stone-900'>
                        <span className='rounded-lg bg-[#065F46]/10 p-2 text-[#065F46] border border-[#065F46]/20'>
                          <Icon />
                        </span>
                        <span>{pillar.title}</span>
                      </div>
                      <p className='mt-2 text-xs leading-relaxed text-stone-600'>
                        {pillar.desc}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
