'use client'

import Image from 'next/image'
import { FiArrowRight, FiExternalLink } from 'react-icons/fi'
import Reveal from './ui/Reveal'

function ArchitectureMini({ items = [] }) {
  if (!items.length) return null

  return (
    <ol className='mt-5 flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2'>
      {items.map((item, index) => (
        <li key={item} className='flex items-center gap-2'>
          <span className='rounded-md border border-line bg-canvas px-3 py-1.5 text-[0.88rem] font-medium text-ink'>
            {item}
          </span>
          {index < items.length - 1 ? (
            <span className='hidden font-mono text-xs text-accent sm:inline' aria-hidden='true'>
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
      <div className='relative overflow-hidden border border-line bg-canvas-warm'>
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          className='aspect-[16/11] w-full object-cover transition duration-500 ease-premium group-hover:scale-[1.03]'
        />
        <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100' />
      </div>
    )
  }

  const isMercedes = project.slug === 'mercedes-for-hire'
  const isLastNight = project.slug === 'lastnightrooms'
  const isFaith = ['dharmauday', 'antim-ritual', 'puja-partner'].includes(project.slug)

  return (
    <div className='relative flex aspect-[16/11] flex-col justify-between overflow-hidden border border-line bg-canvas-warm p-6 sm:p-8'>
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

          <h3 className='mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl'>
            {project.title}
          </h3>

          <div className='accent-rule mt-4' />

          <p className='mt-5 max-w-xl text-base leading-7 text-muted'>
            {project.description}
          </p>

          <p className='mt-5 text-sm text-ink'>
            <span className='label mr-3 inline-block align-middle'>Role</span>
            {project.role}
          </p>

          {project.technologies?.length ? (
            <p className='tech-inline mt-4'>
              {project.technologies.join(' · ')}
            </p>
          ) : null}

          {project.architecture?.length ? (
            <ArchitectureMini items={project.architecture} />
          ) : null}

          {project.domains?.length && !project.architecture?.length ? (
            <ArchitectureMini items={project.domains} />
          ) : null}

          <div className='mt-8 flex flex-wrap items-center gap-5'>
            <button
              type='button'
              onClick={() => onSelect(project)}
              className='project-arrow inline-flex items-center gap-2 whitespace-nowrap'
            >
              <span>View Case Study</span>
              <FiArrowRight className='shrink-0 text-sm' />
            </button>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noreferrer'
                className='button-ghost inline-flex items-center gap-1.5 whitespace-nowrap'
              >
                <span>Live Project</span>
                <FiExternalLink className='shrink-0 text-sm' />
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
