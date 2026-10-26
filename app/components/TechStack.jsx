'use client'

import Reveal from './ui/Reveal'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
  SiSupabase,
  SiMongodb,
  SiGraphql,
  SiAmazonaws,
  SiRedis,
} from 'react-icons/si'

const technologies = [
  {
    name: 'React.js',
    role: 'Frontend Architecture',
    icon: SiReact,
    iconColor: 'text-[#087ea4]',
    bgLight: 'bg-[#087ea4]/10',
    hoverBorder: 'hover:border-[#087ea4]/50 hover:shadow-[#087ea4]/10',
  },
  {
    name: 'Next.js 14',
    role: 'SSR & App Router',
    icon: SiNextdotjs,
    iconColor: 'text-stone-900',
    bgLight: 'bg-stone-900/10',
    hoverBorder: 'hover:border-stone-800/50 hover:shadow-stone-900/10',
  },
  {
    name: 'TypeScript',
    role: 'Type Safety & Contracts',
    icon: SiTypescript,
    iconColor: 'text-[#3178C6]',
    bgLight: 'bg-[#3178C6]/10',
    hoverBorder: 'hover:border-[#3178C6]/50 hover:shadow-[#3178C6]/10',
  },
  {
    name: 'Node.js',
    role: 'Backend Services & APIs',
    icon: SiNodedotjs,
    iconColor: 'text-[#539E43]',
    bgLight: 'bg-[#539E43]/10',
    hoverBorder: 'hover:border-[#539E43]/50 hover:shadow-[#539E43]/10',
  },
  {
    name: 'PostgreSQL',
    role: 'Relational & Complex Queries',
    icon: SiPostgresql,
    iconColor: 'text-[#336791]',
    bgLight: 'bg-[#336791]/10',
    hoverBorder: 'hover:border-[#336791]/50 hover:shadow-[#336791]/10',
  },
  {
    name: 'Tailwind CSS',
    role: 'Design Systems & UI',
    icon: SiTailwindcss,
    iconColor: 'text-[#06B6D4]',
    bgLight: 'bg-[#06B6D4]/10',
    hoverBorder: 'hover:border-[#06B6D4]/50 hover:shadow-[#06B6D4]/10',
  },
  {
    name: 'Docker',
    role: 'Containerization & CI',
    icon: SiDocker,
    iconColor: 'text-[#2496ED]',
    bgLight: 'bg-[#2496ED]/10',
    hoverBorder: 'hover:border-[#2496ED]/50 hover:shadow-[#2496ED]/10',
  },
  {
    name: 'Supabase',
    role: 'Realtime & Auth Backend',
    icon: SiSupabase,
    iconColor: 'text-[#3ECF8E]',
    bgLight: 'bg-[#3ECF8E]/10',
    hoverBorder: 'hover:border-[#3ECF8E]/50 hover:shadow-[#3ECF8E]/10',
  },
  {
    name: 'MongoDB',
    role: 'Document Stores',
    icon: SiMongodb,
    iconColor: 'text-[#47A248]',
    bgLight: 'bg-[#47A248]/10',
    hoverBorder: 'hover:border-[#47A248]/50 hover:shadow-[#47A248]/10',
  },
  {
    name: 'GraphQL',
    role: 'Declarative Data Fetching',
    icon: SiGraphql,
    iconColor: 'text-[#E10098]',
    bgLight: 'bg-[#E10098]/10',
    hoverBorder: 'hover:border-[#E10098]/50 hover:shadow-[#E10098]/10',
  },
  {
    name: 'AWS',
    role: 'Cloud Infrastructure',
    icon: SiAmazonaws,
    iconColor: 'text-[#FF9900]',
    bgLight: 'bg-[#FF9900]/10',
    hoverBorder: 'hover:border-[#FF9900]/50 hover:shadow-[#FF9900]/10',
  },
  {
    name: 'Redis',
    role: 'Caching & Session Store',
    icon: SiRedis,
    iconColor: 'text-[#DC382D]',
    bgLight: 'bg-[#DC382D]/10',
    hoverBorder: 'hover:border-[#DC382D]/50 hover:shadow-[#DC382D]/10',
  },
]

export default function TechStack() {
  return (
    <section className='py-12 border-y border-stone-200/80'>
      <Reveal>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8'>
          <div>
            <div className='inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#065F46]'>
              <span className='h-1.5 w-1.5 rounded-full bg-[#065F46]' />
              <span>Core Stack</span>
            </div>
            <h3 className='text-xl sm:text-2xl font-semibold tracking-tight text-stone-900 mt-1'>
              Technologies I Work With
            </h3>
          </div>
          <p className='text-xs sm:text-sm text-stone-600 max-w-md font-mono'>
            The frameworks, languages, and databases I actively use to build and maintain production software.
          </p>
        </div>

        {/* Tech Grid with Colorful Original Brand Icons */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3'>
          {technologies.map(({ name, role, icon: Icon, iconColor, bgLight, hoverBorder }) => (
            <div
              key={name}
              className={`group relative flex flex-col items-center justify-center p-4 rounded-xl border border-stone-200/90 bg-white shadow-xs transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-md ${hoverBorder}`}
            >
              <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${bgLight} transition-transform duration-300 group-hover:scale-110 shadow-xs`}>
                <Icon className={`text-2xl sm:text-3xl ${iconColor}`} />
              </div>
              <span className='text-xs font-mono font-semibold text-stone-800 transition-colors'>
                {name}
              </span>
              <span className='mt-0.5 text-[0.68rem] font-mono text-stone-500 text-center line-clamp-1'>
                {role}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
