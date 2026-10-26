'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './ui/Reveal'
import {
  FiCompass,
  FiLayers,
  FiLayout,
  FiCode,
  FiServer,
  FiDatabase,
  FiRepeat,
  FiCloud,
  FiCheckCircle,
} from 'react-icons/fi'

const stages = [
  { id: 'Idea', label: '01. Strategy', icon: FiCompass, summary: 'Requirements & Planning', details: 'Understand project goals, map out data flow and user journeys, and identify technical requirements before writing code.' },
  { id: 'Architecture', label: '02. Architecture', icon: FiLayers, summary: 'System & Schema Design', details: 'Choose the right database, design relational schemas, structure application folders, and draft API endpoints.' },
  { id: 'UI / UX', label: '03. Interface', icon: FiLayout, summary: 'Component Structure & Layout', details: 'Build reusable UI components, follow accessibility best practices, and test responsive layouts across devices.' },
  { id: 'Frontend', label: '04. Client App', icon: FiCode, summary: 'Next.js & React Implementation', details: 'Develop clean frontends with React and Next.js App Router, using SSR/SSG caching and optimistic UI updates.' },
  { id: 'API', label: '05. API Layer', icon: FiServer, summary: 'REST & GraphQL Endpoints', details: 'Build secure endpoints with rate limiting, JWT authentication, and request validation using Zod.' },
  { id: 'Backend', label: '06. Business Logic', icon: FiRepeat, summary: 'Services & Integrations', details: 'Write backend business logic, background workers, webhook listeners, and third-party payment integrations in Node.js.' },
  { id: 'Database', label: '07. Persistence', icon: FiDatabase, summary: 'PostgreSQL & ORM Setup', details: 'Set up PostgreSQL or MongoDB with Prisma or Drizzle ORM, write clean migration scripts, and optimize query indexing.' },
  { id: 'Deployment', label: '08. DevOps', icon: FiCloud, summary: 'Hosting & CI/CD Pipelines', details: 'Containerize apps with Docker, configure CI/CD deployments on Vercel or AWS, and set up error logging.' },
]

export default function StackFlow() {
  const reduceMotion = useReducedMotion()
  const [selectedId, setSelectedId] = useState('Frontend')
  const currentStage = stages.find((s) => s.id === selectedId) || stages[3]
  const Icon = currentStage.icon

  return (
    <section className='py-20 sm:py-28 border-t border-stone-200/80 scroll-mt-20'>
      <Reveal>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12'>
          <div>
            <div className='flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#065F46] mb-2'>
              <span className='h-1.5 w-1.5 rounded-full bg-[#065F46]' />
              <span>Development Process</span>
            </div>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900'>
              How I Build &amp; Ship Products
            </h2>
          </div>
          <p className='text-sm sm:text-base text-stone-600 max-w-md'>
            A practical look at how I take projects from initial technical planning to production release.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        {/* Interactive 8-Stage Pipeline */}
        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-6'>
          {stages.map((stage) => {
            const StageIcon = stage.icon
            const isSelected = selectedId === stage.id
            return (
              <button
                key={stage.id}
                type='button'
                onClick={() => setSelectedId(stage.id)}
                className={`relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border text-center transition-all duration-300 ${
                  isSelected
                    ? 'border-[#065F46] bg-[#065F46] text-white shadow-sm'
                    : 'border-stone-200 bg-white/80 text-stone-600 hover:border-[#065F46]/40 hover:bg-white hover:text-[#065F46] shadow-xs'
                }`}
              >
                <StageIcon className={`text-xl mb-2 ${isSelected ? 'text-white' : 'text-stone-500'}`} />
                <span className='text-[0.68rem] font-mono uppercase font-semibold leading-tight line-clamp-1'>
                  {stage.id}
                </span>

                {isSelected && (
                  <span className='absolute -bottom-1 h-1 w-6 rounded-full bg-[#065F46]' />
                )}
              </button>
            )
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className='relative overflow-hidden rounded-2xl border border-stone-200/90 bg-white/95 p-6 sm:p-8 backdrop-blur-xl shadow-sm'>
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200/80'>
            <div className='flex items-center gap-3'>
              <span className='flex h-12 w-12 items-center justify-center rounded-xl border border-[#065F46]/30 bg-[#065F46]/10 text-[#065F46] text-2xl shadow-xs'>
                <Icon />
              </span>
              <div>
                <span className='text-xs font-mono uppercase text-[#065F46] tracking-wider font-semibold'>
                  Stage: {currentStage.label}
                </span>
                <h3 className='text-xl sm:text-2xl font-bold text-stone-900'>
                  {currentStage.summary}
                </h3>
              </div>
            </div>

            <span className='rounded-full border border-stone-200 bg-stone-100 px-3 py-1 text-xs font-mono text-stone-700'>
              Production Standard
            </span>
          </div>

          <div className='mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center'>
            <p className='md:col-span-8 text-sm sm:text-base leading-relaxed text-stone-700'>
              {currentStage.details}
            </p>

            <div className='md:col-span-4 rounded-xl border border-stone-200 bg-stone-50/80 p-4 font-mono text-xs text-stone-600'>
              <div className='text-[#065F46] font-semibold mb-1 flex items-center gap-1.5'>
                <FiCheckCircle className='text-[#065F46]' /> Kashyap&apos;s Output
              </div>
              <div>Deterministic contracts, comprehensive test suites, and audited code reviews.</div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
