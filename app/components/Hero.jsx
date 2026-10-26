'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import {
  FiArrowRight,
  FiCheck,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiActivity,
  FiCode,
  FiLayers,
  FiCpu,
  FiShield,
  FiZap,
} from 'react-icons/fi'
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiDocker,
} from 'react-icons/si'
import heroVisual from '@/app/assets/images/hero-modern-system.jpg'

const metrics = [
  { value: '4+', label: 'Years Experience', sub: 'Production Engineering' },
  { value: '18+', label: 'Apps Shipped', sub: 'End-to-End Ownership' },
  { value: '10+', label: 'Industry Domains', sub: 'SaaS, Health, FinTech, AI' },
  { value: '99.9%', label: 'System Reliability', sub: 'High-Uptime Architectures' },
]

const codeSnippet = `// Production Type-Safe API Route
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) return new Response("Unauthorized", { status: 401 });

  const { tenantId, payload } = await validate(req);
  const result = await db.transaction(async (tx) => {
    return await service.deployPipeline(tx, { tenantId, payload });
  });

  return Response.json({ status: "deployed", latency: "24ms" });
}`

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('visual') // 'visual' | 'code' | 'metrics'

  const copyEmail = () => {
    navigator.clipboard.writeText('patelkashyap134@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  return (
    <section id='home' className='relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden'>
      {/* Background ambient lighting glows on English Cream */}
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute -top-32 left-1/4 h-[550px] w-[550px] rounded-full bg-[#065F46]/[0.04] blur-[130px]' />
        <div className='absolute top-1/3 -right-20 h-[500px] w-[500px] rounded-full bg-amber-600/[0.035] blur-[140px]' />
        <div className='absolute bottom-0 left-10 h-[400px] w-[400px] rounded-full bg-[#065F46]/[0.03] blur-[120px]' />
      </div>

      <div className='mx-auto max-w-7xl'>
        {/* Top Announcement / Live Status Pill */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className='flex flex-wrap items-center gap-3 mb-6'
        >
          <div className='inline-flex items-center gap-2.5 rounded-full border border-[#065F46]/25 bg-[#065F46]/[0.08] px-3.5 py-1.5 text-xs font-mono font-medium text-[#065F46] backdrop-blur-md shadow-xs'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#065F46] opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-[#065F46]'></span>
            </span>
            <span>AVAILABLE FOR FULL-TIME ROLES &amp; PROJECTS</span>
          </div>

          <div className='hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-stone-500'>
            <span className='text-stone-300'>//</span>
            <span>Senior Full-Stack Engineer</span>
            <span className='text-stone-300'>·</span>
            <span>Surat, India</span>
          </div>
        </motion.div>

        {/* Main 2-Column Hero Stage */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center'>
          {/* Left Column: Headlines & Actions */}
          <motion.div
            className='lg:col-span-7 flex flex-col justify-center'
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className='text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-stone-900 leading-[1.08]'>
              Engineering{' '}
              <span className='text-[#065F46]'>
                Scalable Systems
              </span>{' '}
              From Concept to Production.
            </h1>

            <p className='mt-6 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl font-normal'>
              I&apos;m <span className='text-stone-900 font-semibold'>Kashyap Patel</span>, a Full-Stack Developer with{' '}
              <span className='text-stone-900 font-semibold'>4+ years of experience</span> building scalable SaaS platforms,
              real-time dashboards, and REST/GraphQL APIs with React, Next.js, Node.js, and PostgreSQL.
            </p>

            {/* Core Tech Stack Badges */}
            <div className='mt-6 flex flex-wrap items-center gap-2'>
              <span className='text-xs font-mono text-stone-500 mr-2'>Core stack:</span>
              {[
                { name: 'React', icon: SiReact, color: 'text-[#087ea4]' },
                { name: 'Next.js', icon: SiNextdotjs, color: 'text-stone-900' },
                { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
                { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#539E43]' },
                { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#336791]' },
                { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
              ].map(({ name, icon: Icon, color }) => (
                <span
                  key={name}
                  className='inline-flex items-center gap-1.5 rounded-md border border-stone-200/90 bg-white/90 px-2.5 py-1 text-xs font-mono text-stone-700 shadow-xs transition-colors hover:border-[#065F46]/40 hover:bg-white'
                >
                  <Icon className={`${color} text-sm`} />
                  <span>{name}</span>
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className='mt-8 flex flex-wrap items-center gap-4'>
              <a
                href='#work'
                className='group relative inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#065F46] px-6 py-3.5 text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#044e39] hover:shadow-md hover:shadow-[#065F46]/20 active:translate-y-0.5'
              >
                <span>Explore Featured Work</span>
                <FiArrowRight className='text-base transition-transform duration-300 group-hover:translate-x-1' />
              </a>

              <a
                href='#contact'
                className='inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-3.5 text-xs sm:text-sm font-mono font-medium uppercase tracking-wider text-stone-800 shadow-xs transition-all duration-300 hover:border-[#065F46] hover:text-[#065F46]'
              >
                <span>Let&apos;s Connect</span>
              </a>

              {/* One-Click Copy Email Button */}
              <button
                type='button'
                onClick={copyEmail}
                className='group inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white/90 px-4 py-3.5 text-xs font-mono text-stone-600 shadow-xs transition-all duration-300 hover:border-stone-400 hover:text-stone-900'
                title='Copy email address'
              >
                {copied ? (
                  <>
                    <FiCheck className='text-[#065F46] text-sm' />
                    <span className='text-[#065F46] font-medium'>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className='text-stone-400 group-hover:text-stone-700 transition-colors' />
                    <span className='hidden sm:inline'>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social quick links */}
            <div className='mt-8 flex items-center gap-4 text-xs font-mono text-stone-500'>
              <span className='text-stone-400'>Direct channels:</span>
              <a
                href='https://github.com/Kashyap8495'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-1.5 text-stone-600 hover:text-[#065F46] transition-colors'
              >
                <FiGithub /> GitHub
              </a>
              <span className='text-stone-300'>·</span>
              <a
                href='https://www.linkedin.com/in/kashyapgeek9012'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-1.5 text-stone-600 hover:text-[#065F46] transition-colors'
              >
                <FiLinkedin /> LinkedIn
              </a>
              <span className='text-stone-300'>·</span>
              <a
                href='mailto:patelkashyap134@gmail.com'
                className='inline-flex items-center gap-1.5 text-stone-600 hover:text-[#065F46] transition-colors'
              >
                <FiMail /> patelkashyap134@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Right Column: High-Tech Glass System Console (Floating Showcase) */}
          <motion.div
            className='lg:col-span-5 relative'
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Ambient console backglow */}
            <div className='absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#065F46]/30 to-[#065F46]/10 blur-xl opacity-50' />

            <div className='relative overflow-hidden rounded-xl border border-stone-800 bg-[#12161A] text-zinc-100 shadow-2xl shadow-stone-900/15 backdrop-blur-xl'>
              {/* Window Header Bar */}
              <div className='flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-3'>
                <div className='flex items-center gap-2'>
                  <span className='h-3 w-3 rounded-full bg-rose-500/80' />
                  <span className='h-3 w-3 rounded-full bg-amber-500/80' />
                  <span className='h-3 w-3 rounded-full bg-emerald-500/80' />
                  <span className='ml-2 text-xs font-mono text-zinc-400'>
                    kashyap-system-core.tsx
                  </span>
                </div>

                <div className='flex items-center gap-2 text-xs font-mono text-emerald-400'>
                  <span className='h-2 w-2 rounded-full bg-emerald-400 animate-pulse' />
                  <span>99.98% Healthy</span>
                </div>
              </div>

              {/* Console Tabs */}
              <div className='flex border-b border-white/10 bg-zinc-900/50 text-xs font-mono'>
                <button
                  id='tab-architecture'
                  type='button'
                  onClick={() => setActiveTab('visual')}
                  className={`flex items-center gap-1.5 px-4 py-2.5 border-r border-white/10 cursor-pointer transition-colors ${
                    activeTab === 'visual'
                      ? 'bg-white/[0.08] text-white border-b-2 border-b-emerald-400'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <FiLayers className='text-emerald-400' />
                  <span>Architecture</span>
                </button>
                <button
                  id='tab-api-logic'
                  type='button'
                  onClick={() => setActiveTab('code')}
                  className={`flex items-center gap-1.5 px-4 py-2.5 border-r border-white/10 cursor-pointer transition-colors ${
                    activeTab === 'code'
                      ? 'bg-white/[0.08] text-white border-b-2 border-b-emerald-400'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <FiCode className='text-cyan-400' />
                  <span>API Logic</span>
                </button>
                <button
                  id='tab-telemetry'
                  type='button'
                  onClick={() => setActiveTab('metrics')}
                  className={`flex items-center gap-1.5 px-4 py-2.5 cursor-pointer transition-colors ${
                    activeTab === 'metrics'
                      ? 'bg-white/[0.08] text-white border-b-2 border-b-emerald-400'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <FiActivity className='text-amber-400' />
                  <span>Telemetry</span>
                </button>
              </div>

              {/* Tab 1: 3D Visual Architecture */}
              {activeTab === 'visual' && (
                <div className='relative h-[340px] sm:h-[380px] w-full overflow-hidden bg-black/60'>
                  <Image
                    src={heroVisual}
                    alt='Modern software architecture visualization'
                    priority
                    sizes='(max-width: 1024px) 100vw, 45vw'
                    className='h-full w-full object-cover object-center filter contrast-105 brightness-95 transition-transform duration-700 hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent' />

                  {/* Floating Signal Badges over Artwork */}
                  <div className='absolute top-4 left-4'>
                    <div className='inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-black/70 px-3 py-1.5 text-[0.72rem] font-mono text-zinc-200 backdrop-blur-md shadow-lg'>
                      <FiCpu className='text-emerald-400' />
                      <span>Microservices &amp; APIs</span>
                    </div>
                  </div>

                  <div className='absolute bottom-16 right-4'>
                    <div className='inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-950/80 px-3 py-1.5 text-[0.72rem] font-mono text-emerald-300 backdrop-blur-md shadow-lg'>
                      <FiZap className='text-emerald-400' />
                      <span>Edge Performance</span>
                    </div>
                  </div>

                  {/* Architecture Bottom Legend */}
                  <div className='absolute bottom-0 inset-x-0 border-t border-white/10 bg-zinc-950/90 p-3.5 backdrop-blur-md flex items-center justify-between text-xs font-mono text-zinc-400'>
                    <div className='flex items-center gap-2'>
                      <span className='h-2 w-2 rounded-full bg-cyan-400' />
                      <span className='text-zinc-300'>Client UI</span>
                      <span className='text-zinc-600'>→</span>
                      <span className='h-2 w-2 rounded-full bg-emerald-400' />
                      <span className='text-zinc-300'>API Gateway</span>
                      <span className='text-zinc-600'>→</span>
                      <span className='h-2 w-2 rounded-full bg-purple-400' />
                      <span className='text-zinc-300'>PostgreSQL</span>
                    </div>
                    <span className='text-emerald-400 text-[0.68rem]'>LIVE</span>
                  </div>
                </div>
              )}

              {/* Tab 2: Code Snippet */}
              {activeTab === 'code' && (
                <div className='h-[340px] sm:h-[380px] p-5 overflow-hidden bg-zinc-950/90 font-mono text-[0.72rem] text-zinc-300 leading-[1.65] select-text flex flex-col justify-between'>
                  <div>
                    <div className='text-zinc-500 mb-2 flex items-center justify-between'>
                      <span>// Type-safe distributed handler pattern</span>
                      <span className='text-[0.65rem] text-emerald-400/80'>TypeScript · Next.js 14</span>
                    </div>
                    <pre className='text-zinc-300 whitespace-pre-wrap font-mono'>
                      <code>{codeSnippet}</code>
                    </pre>
                  </div>
                  <div className='rounded-lg border border-emerald-500/20 bg-emerald-500/05 p-3 text-xs text-emerald-300 flex items-center gap-2'>
                    <span className='h-1.5 w-1.5 rounded-full bg-emerald-400' />
                    <span>Validated with Zod &amp; Drizzle ORM transactions.</span>
                  </div>
                </div>
              )}

              {/* Tab 3: System Telemetry */}
              {activeTab === 'metrics' && (
                <div className='h-[340px] sm:h-[380px] p-5 bg-zinc-950/90 font-mono flex flex-col justify-between'>
                  <div className='space-y-4'>
                    <div>
                      <div className='flex justify-between text-xs text-zinc-400 mb-1.5'>
                        <span>Global Edge Latency</span>
                        <span className='text-emerald-400 font-semibold'>22ms</span>
                      </div>
                      <div className='h-2 w-full rounded-full bg-white/10 overflow-hidden'>
                        <div className='h-full bg-emerald-400 w-[92%]' />
                      </div>
                    </div>

                    <div>
                      <div className='flex justify-between text-xs text-zinc-400 mb-1.5'>
                        <span>API Cache Hit Ratio</span>
                        <span className='text-cyan-400 font-semibold'>98.4%</span>
                      </div>
                      <div className='h-2 w-full rounded-full bg-white/10 overflow-hidden'>
                        <div className='h-full bg-cyan-400 w-[98%]' />
                      </div>
                    </div>

                    <div>
                      <div className='flex justify-between text-xs text-zinc-400 mb-1.5'>
                        <span>Type Safety Coverage</span>
                        <span className='text-purple-400 font-semibold'>100%</span>
                      </div>
                      <div className='h-2 w-full rounded-full bg-white/10 overflow-hidden'>
                        <div className='h-full bg-purple-400 w-full' />
                      </div>
                    </div>
                  </div>

                  <div className='rounded-lg border border-white/10 bg-white/[0.03] p-3 text-xs text-zinc-300'>
                    <div className='flex items-center gap-2 text-emerald-400 font-semibold mb-1'>
                      <FiShield /> Production Hardened
                    </div>
                    <p className='text-[0.75rem] text-zinc-400'>
                      Automated CI/CD workflows, environment isolation, zero-downtime database migrations.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bento Metric Bar */}
        <motion.div
          className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-stone-200/90 pt-10'
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {metrics.map((item) => (
            <div
              key={item.label}
              className='relative rounded-xl border border-stone-200/90 bg-white/90 p-5 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-[#065F46]/40 hover:shadow-md'
            >
              <div className='text-3xl sm:text-4xl font-bold font-mono tracking-tight text-[#065F46]'>
                {item.value}
              </div>
              <div className='mt-1 text-sm font-semibold text-stone-900'>
                {item.label}
              </div>
              <div className='mt-0.5 text-xs font-mono text-stone-500'>
                {item.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
