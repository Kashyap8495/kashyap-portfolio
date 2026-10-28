'use client'

import Reveal from './ui/Reveal'
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi'

const roles = [
  {
    period: 'Jan 2026 — Present',
    title: 'Senior Full-Stack Developer',
    company: 'Ora Infotech',
    location: 'Surat, India',
    current: true,
    summary:
      'Architecting and maintaining production-grade web applications across frontend, backend, and deployment layers for enterprise and client platforms.',
    points: [
      'Architect and maintain production-grade web applications across frontend, backend, and deployment layers.',
      'Develop scalable, responsive UIs using React.js/Next.js and build robust REST/GraphQL APIs with Node.js and PostgreSQL.',
      'Implement secure authentication, payment gateways, and third-party integrations while optimizing database performance.',
    ],
    technologies: ['React.js', 'Next.js', 'Node.js', 'PostgreSQL', 'GraphQL', 'REST APIs', 'AWS', 'Docker'],
  },
  {
    period: 'Aug 2023 — Dec 2025',
    title: 'MERN Stack Developer',
    company: 'Secret MindTech',
    location: 'Surat, India',
    current: false,
    summary:
      'Engineered end-to-end web applications, real-time communication systems, payment gateways, and high-performance server-rendered platforms.',
    points: [
      'Developed end-to-end web applications using Next.js, Node.js, MongoDB, and PostgreSQL.',
      'Engineered WebSocket-based real-time features including chat, notifications, and live analytics.',
      'Integrated secure payment solutions (Stripe, Razorpay) and optimized application SEO/performance via SSR/ISR.',
    ],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'WebSockets', 'Stripe', 'Razorpay', 'SSR/ISR'],
  },
  {
    period: 'Jul 2021 — Jul 2023',
    title: 'Frontend Developer',
    company: 'Secret MindTech',
    location: 'Surat, India',
    current: false,
    summary:
      'Built responsive, production-ready interfaces with clean state architectures, API integrations, and code optimizations for reliable production releases.',
    points: [
      'Built responsive, production-ready interfaces utilizing React.js, Next.js, and Tailwind CSS.',
      'Integrated REST and GraphQL APIs, managing predictable state with Context API.',
      'Optimized UI performance via lazy loading and code splitting, ensuring reliable application releases.',
    ],
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'GraphQL', 'REST APIs', 'Context API', 'TypeScript'],
  },
]

export default function Resume() {
  return (
    <section id='experience' className='py-20 sm:py-28 border-t border-stone-200/80 scroll-mt-20'>
      <Reveal>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12'>
          <div>
            <div className='flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#065F46] mb-2'>
              <span className='h-1.5 w-1.5 rounded-full bg-[#065F46]' />
              <span>Experience</span>
            </div>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900'>
              Work Experience
            </h2>
          </div>
          <p className='text-sm sm:text-base text-stone-600 max-w-md'>
            My background building production web applications, APIs, and real-time systems across companies.
          </p>
        </div>
      </Reveal>

      {/* Timeline List */}
      <div className='space-y-8'>
        {roles.map((role, index) => (
          <Reveal key={`${role.title}-${role.period}`} delay={index * 0.08}>
            <div className='group relative rounded-2xl border border-stone-200/90 bg-white/90 p-6 sm:p-8 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-[#065F46]/40 hover:bg-white'>
              <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200/80'>
                <div>
                  <div className='flex flex-wrap items-center gap-2 sm:gap-3'>
                    <h3 className='text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-[#065F46] transition-colors'>
                      {role.title}
                    </h3>
                    {role.current && (
                      <span className='inline-flex items-center gap-1.5 rounded-full border border-[#065F46]/30 bg-[#065F46]/10 px-2.5 py-0.5 text-[0.68rem] font-mono font-medium text-[#065F46] whitespace-nowrap shrink-0'>
                        <span className='h-1.5 w-1.5 rounded-full bg-[#065F46] animate-pulse' />
                        CURRENT ROLE
                      </span>
                    )}
                  </div>

                  <div className='mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm font-mono text-stone-600'>
                    <span className='flex items-center gap-1.5 text-stone-900 font-medium'>
                      <FiBriefcase className='text-[#065F46]' />
                      {role.company}
                    </span>
                    <span className='flex items-center gap-1.5'>
                      <FiMapPin className='text-stone-400' />
                      {role.location}
                    </span>
                  </div>
                </div>

                <div className='flex items-center gap-1.5 rounded-lg border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-mono text-stone-600 w-fit'>
                  <FiCalendar className='text-[#065F46]' />
                  <span>{role.period}</span>
                </div>
              </div>

              <p className='mt-6 text-sm sm:text-base leading-relaxed text-stone-700'>
                {role.summary}
              </p>

              <ul className='mt-4 space-y-2.5 text-xs sm:text-sm text-stone-600'>
                {role.points.map((point) => (
                  <li key={point} className='flex items-start gap-2.5'>
                    <FiCheckCircle className='text-[#065F46] mt-1 text-xs shrink-0' />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className='mt-6 pt-6 border-t border-stone-200/80 flex flex-wrap gap-2'>
                {role.technologies.map((tech) => (
                  <span
                    key={tech}
                    className='rounded-md border border-stone-200 bg-stone-100/80 px-3 py-1.5 text-[0.88rem] font-mono text-stone-700'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}

        {/* Education Card */}
        <Reveal delay={0.16}>
          <div className='rounded-2xl border border-stone-200/90 bg-white/90 p-6 sm:p-8 backdrop-blur-sm shadow-sm'>
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
              <div>
                <span className='text-xs font-mono uppercase text-[#065F46] tracking-wider font-semibold'>
                  Academic Background
                </span>
                <h3 className='text-lg sm:text-xl font-bold text-stone-900 mt-1'>
                  Bachelor of Computer Engineering
                </h3>
                <p className='text-xs sm:text-sm text-stone-600 font-mono mt-1'>
                  Bhagwan Arihant Institute of Technology, Surat · CGPA: 8.10
                </p>
              </div>

              <span className='rounded-lg border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-mono text-stone-600 self-start sm:self-auto'>
                2017 — 2021
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
