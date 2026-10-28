'use client'

import Image from 'next/image'
import { FiArrowRight, FiExternalLink } from 'react-icons/fi'
import Reveal from './ui/Reveal'

function ArchitectureMini({ items = [] }) {
  if (!items.length) return null

  return (
    <ol className='mt-4 flex flex-wrap items-center gap-1.5 sm:gap-2'>
      {items.map((item, index) => (
        <li key={item} className='inline-flex items-center gap-1.5 sm:gap-2'>
          <span className='rounded-md border border-line bg-canvas px-2.5 py-1 text-xs sm:text-[0.85rem] font-medium text-ink'>
            {item}
          </span>
          {index < items.length - 1 ? (
            <span className='font-mono text-xs text-accent' aria-hidden='true'>
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  )
}

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <div className='relative overflow-hidden rounded-lg border border-line bg-canvas-warm shadow-sm transition duration-500 ease-premium group-hover:border-accent/40 group-hover:shadow-md'>
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={1600}
          height={1000}
          sizes='(min-width: 1024px) 50vw, 100vw'
          className='aspect-[16/10] w-full object-cover transition duration-500 ease-premium group-hover:scale-[1.02]'
        />
        <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100' />
      </div>
    )
  }

  const isMercedes = project.slug === 'mercedes-for-hire'
  const isLastNight = project.slug === 'lastnightrooms'
  const isFaith = ['dharmauday', 'antim-ritual', 'puja-partner'].includes(project.slug)

  return (
    <div className='relative flex aspect-[16/10] flex-col justify-between overflow-hidden rounded-lg border border-line bg-canvas-warm p-6 sm:p-8'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,95,70,0.12),transparent_55%)]' />
      <div className='pointer-events-none absolute inset-5 border border-dashed border-line/80' />

      <div className='relative'>
        <p className='label'>Visual system</p>
        <p className='mt-3 max-w-[12ch] text-3xl font-semibold tracking-tight text-ink sm:text-4xl'>
          {project.shortName || project.title}
        </p>
      </div>

      {isMercedes && project.domains ? (
        <div className='relative grid grid-cols-2 gap-2'>
          {project.domains.map((domain) => (
            <span
              key={domain}
              className='rounded-sm border border-line bg-surface/90 px-3 py-2 text-xs font-medium text-ink'
            >
              {domain}
            </span>
          ))}
        </div>
      ) : null}

      {isLastNight ? (
        <p className='relative font-mono text-xs uppercase tracking-[0.12em] text-accent'>
          Hotelbeds integration
        </p>
      ) : null}

      {isFaith ? (
        <p className='relative text-sm text-muted'>
          Production platform · Frontend → API → Database → Deploy
        </p>
      ) : null}

      {!isMercedes && !isLastNight && !isFaith ? (
        <p className='relative tech-inline'>
          {(project.technologies || []).slice(0, 4).join(' · ')}
        </p>
      ) : null}
    </div>
  )
}

export default function FeaturedProject({ project, index, onSelect }) {
  const reverse = index % 2 === 1
  const number = String(index + 1).padStart(2, '0')

  return (
    <Reveal>
      <article
        className={`group grid items-center gap-6 border-t border-line py-7 lg:grid-cols-2 lg:gap-10 lg:py-9 ${
          reverse ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <div>
          <div className='flex items-center gap-3'>
            <span className='font-mono text-xs text-accent'>{number}</span>
            <span className='label !normal-case !tracking-normal'>{project.categoryLabel}</span>
          </div>

          <h3 className='mt-3 sm:mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl'>
            {project.title}
          </h3>

          <div className='accent-rule mt-3 sm:mt-4' />

          <p className='mt-4 sm:mt-5 max-w-xl text-sm sm:text-base leading-6 sm:leading-7 text-muted'>
            {project.description}
          </p>

          <p className='mt-4 sm:mt-5 text-sm text-ink'>
            <span className='label mr-3 inline-block align-middle'>Role</span>
            {project.role}
          </p>

          {project.technologies?.length ? (
            <p className='tech-inline mt-3 sm:mt-4'>
              {project.technologies.join(' · ')}
            </p>
          ) : null}

          {project.architecture?.length ? (
            <ArchitectureMini items={project.architecture} />
          ) : null}

          {project.domains?.length && !project.architecture?.length ? (
            <ArchitectureMini items={project.domains} />
          ) : null}

          <div className='mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4'>
            <button
              type='button'
              onClick={() => onSelect(project)}
              className='group/btn inline-flex items-center gap-2 rounded-lg bg-[#065F46] px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-white shadow-xs transition-all duration-200 hover:bg-[#044e39] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap'
            >
              <span>View Case Study</span>
              <FiArrowRight className='shrink-0 text-sm transition-transform duration-200 group-hover/btn:translate-x-1' />
            </button>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noreferrer'
                className='group/live inline-flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white/95 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-stone-700 shadow-xs transition-all duration-200 hover:border-[#065F46]/40 hover:bg-stone-50 hover:text-[#065F46] hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap'
              >
                <span>Live Project</span>
                <FiExternalLink className='shrink-0 text-sm transition-transform duration-200 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5' />
              </a>
            ) : null}
          </div>
        </div>

        <button
          type='button'
          onClick={() => onSelect(project)}
          className='text-left'
          aria-label={`Open ${project.title} case study`}
        >
          <ProjectVisual project={project} />
        </button>
      </article>
    </Reveal>
  )
}
