'use client'

import Reveal from './ui/Reveal'
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiDocker,
  SiAmazonaws,
  SiSupabase,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
} from 'react-icons/si'

const skillCategories = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React.js', icon: SiReact, color: 'text-[#087ea4]' },
      { name: 'Next.js 14', icon: SiNextdotjs, color: 'text-stone-900' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-[#EAB308]' },
      { name: 'Redux Toolkit', icon: SiRedux, color: 'text-[#764ABC]' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
    ],
  },
  {
    name: 'Backend & APIs',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#539E43]' },
      { name: 'Express.js', icon: SiExpress, color: 'text-stone-800' },
      { name: 'GraphQL', icon: SiGraphql, color: 'text-[#E10098]' },
      { name: 'REST APIs', icon: null, color: 'text-[#065F46]' },
      { name: 'WebSockets', icon: null, color: 'text-teal-600' },
      { name: 'Microservices', icon: null, color: 'text-purple-600' },
    ],
  },
  {
    name: 'Databases & ORMs',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#336791]' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' },
      { name: 'MySQL', icon: SiMysql, color: 'text-[#00758F]' },
      { name: 'Prisma ORM', icon: SiPrisma, color: 'text-[#2D3748]' },
      { name: 'Drizzle ORM', icon: null, color: 'text-[#10B981]' },
      { name: 'Sequelize', icon: null, color: 'text-[#52B0E7]' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
      { name: 'AWS Cloud', icon: SiAmazonaws, color: 'text-[#FF9900]' },
      { name: 'Supabase', icon: SiSupabase, color: 'text-[#3ECF8E]' },
      { name: 'Vercel Edge', icon: null, color: 'text-stone-900' },
      { name: 'Git & GitHub', icon: SiGithub, color: 'text-[#F05032]' },
      { name: 'Postman', icon: SiPostman, color: 'text-[#FF6C37]' },
    ],
  },
]

export default function Skills() {
  return (
    <section id='skills' className='py-20 sm:py-28 border-t border-stone-200/80 scroll-mt-20'>
      <Reveal>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12'>
          <div>
            <div className='flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#065F46] mb-2'>
              <span className='h-1.5 w-1.5 rounded-full bg-[#065F46]' />
              <span>Skills</span>
            </div>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900'>
              Skills &amp; Technologies
            </h2>
          </div>
          <p className='text-sm sm:text-base text-stone-600 max-w-md'>
            Technologies and tools I use on a daily basis to build and maintain production applications.
          </p>
        </div>
      </Reveal>

      {/* Categories Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch'>
        {skillCategories.map((category, idx) => (
          <Reveal key={category.name} delay={idx * 0.06} className='h-full'>
            <div className='h-full flex flex-col justify-between rounded-2xl border border-stone-200/90 bg-white/90 p-6 sm:p-8 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-[#065F46]/40 hover:bg-white'>
              <h3 className='text-base sm:text-lg font-semibold text-stone-900 pb-4 border-b border-stone-200/80 flex items-center justify-between'>
                <span>{category.name}</span>
                <span className='text-xs font-mono text-stone-500'>{category.skills.length} core skills</span>
              </h3>

              <div className='mt-6 flex flex-wrap gap-2 sm:gap-2.5'>
                {category.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className='group inline-flex items-center gap-2 sm:gap-2.5 rounded-xl border border-stone-200/80 bg-stone-50/70 px-3 py-2 sm:px-3.5 sm:py-2.5 transition-all duration-200 hover:border-[#065F46]/40 hover:bg-white hover:shadow-xs'
                    >
                      {Icon ? (
                        <Icon className={`text-lg sm:text-xl shrink-0 ${skill.color} transition-transform group-hover:scale-110`} />
                      ) : (
                        <span className='h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#065F46] shrink-0' />
                      )}
                      <span className='text-xs sm:text-[0.88rem] font-mono font-medium text-stone-700 group-hover:text-stone-900 transition-colors whitespace-nowrap'>
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
