'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import { FiArrowUpRight, FiExternalLink, FiX } from 'react-icons/fi'
import ArchitectureFlow from './ArchitectureFlow'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import { filterOptions, projects } from '@/app/data/projects'

const featuredOrder = [
  'fosterkonnect',
  'steer-health',
  'vertelier',
  'dharmauday',
  'antim-ritual',
  'puja-partner',
  'mercedes-for-hire',
  'lastnightrooms',
]

const faithArchitecture = [
  'Frontend',
  'APIs',
  'Database',
  'Payments / Notifications / Admin',
  'Production',
]

function DetailList({ title, items = [] }) {
  if (!items.length) return null

  return (
    <div className='mt-8 border-t border-line pt-8'>
      <p className='label'>{title}</p>
      <ul className='mt-4 space-y-3 text-sm leading-7 text-muted'>
        {items.map((item) => (
          <li key={item} className='flex gap-3'>
            <span className='mt-2.5 h-px w-3 shrink-0 bg-accent' aria-hidden='true' />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProjectDetail({ project, onClose }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab' || !panelRef.current) return
      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  const isMercedes = project.slug === 'mercedes-for-hire'
  const isLastNight = project.slug === 'lastnightrooms'
  const isFaithPlatform = ['dharmauday', 'antim-ritual', 'puja-partner'].includes(
    project.slug
  )

  return (
    <motion.div
      className='fixed inset-0 z-[60] flex items-end justify-center bg-ink/45 p-0 backdrop-blur-[3px] sm:items-center sm:p-5'
      role='dialog'
      aria-modal='true'
      aria-labelledby='project-detail-title'
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={panelRef}
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? undefined : { opacity: 0, y: 16 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className='flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-lg border border-line bg-surface shadow-card sm:rounded-lg lg:max-w-4xl'
        onClick={(event) => event.stopPropagation()}
      >
        <div className='sticky top-0 z-10 flex items-center justify-between border-b border-line bg-surface/95 px-5 py-4 backdrop-blur sm:px-8'>
          <p className='label'>Project</p>
          <button
            ref={closeRef}
            type='button'
            onClick={onClose}
            className='icon-button'
            aria-label='Close project details'
          >
            <FiX />
          </button>
        </div>

        <div className='overflow-y-auto overscroll-contain px-5 py-7 sm:px-8 sm:py-9'>
          <div className='grid gap-10 lg:grid-cols-[0.85fr_1.15fr]'>
            <div>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  className='aspect-[4/3] w-full rounded-md border border-line object-cover'
                />
              ) : (
                <div className='relative flex aspect-[4/3] items-end overflow-hidden rounded-md border border-line bg-canvas-warm p-6'>
                  <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,95,70,0.14),transparent_55%)]' />
                  <span className='relative text-3xl font-semibold tracking-tight text-ink'>
                    {project.shortName || project.title}
                  </span>
                </div>
              )}

              {project.technologies?.length ? (
                <div className='mt-7 border-t border-line pt-7'>
                  <p className='label'>Technology</p>
                  <ul className='mt-4 space-y-2'>
                    {project.technologies.map((tech) => (
                      <li key={tech} className='text-sm text-ink'>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <div>
              <p className='label'>{project.categoryLabel}</p>
              <h2
                id='project-detail-title'
                className='mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl'
              >
                {project.title}
              </h2>

              {project.type ? (
                <p className='mt-3 text-base text-muted'>{project.type}</p>
              ) : null}

              <div className='mt-6 border-t border-line pt-6'>
                <p className='label'>Role</p>
                <p className='mt-2 text-sm font-medium text-ink'>{project.role}</p>
              </div>

              <div className='mt-8 border-t border-line pt-8'>
                <p className='label'>Overview</p>
                <p className='mt-4 text-sm leading-7 text-muted sm:text-[0.95rem]'>
                  {project.description}
                </p>
              </div>

              {isFaithPlatform ? (
                <div className='mt-8 border-t border-line pt-8'>
                  <p className='label'>Platform scope</p>
                  <p className='mt-4 text-sm leading-7 text-muted'>
                    A production platform covering service discovery, booking workflows,
                    backend logic, database design, and deployment — not a static brochure
                    site.
                  </p>
                  <ArchitectureFlow items={faithArchitecture} label='Delivery path' />
                </div>
              ) : null}

              {isMercedes ? (
                <div className='mt-8 border-t border-line pt-8'>
                  <p className='label'>Multi-domain architecture</p>
                  <p className='mt-4 text-sm leading-7 text-muted'>
                    Four customer-facing domains share one application, one backend, and one
                    database.
                  </p>
                  <div className='mt-5 grid gap-2 sm:grid-cols-2'>
                    {project.domains?.map((domain) => (
                      <div
                        key={domain}
                        className='rounded-sm border border-line bg-canvas px-3 py-2.5 text-sm font-medium text-ink'
                      >
                        {domain}
                      </div>
                    ))}
                  </div>
                  <ArchitectureFlow
                    items={project.architecture}
                    label='Shared platform'
                  />
                </div>
              ) : null}

              {isLastNight ? (
                <div className='mt-8 border-t border-line pt-8'>
                  <p className='label'>Technical highlight</p>
                  {project.integrations?.map((item) => (
                    <p key={item} className='mt-3 text-sm font-medium text-ink'>
                      {item}
                    </p>
                  ))}
                  <ArchitectureFlow
                    items={project.architecture}
                    label='Integration flow'
                    variant='accent'
                  />
                </div>
              ) : null}

              {!isLastNight && !isMercedes && project.architecture?.length ? (
                <ArchitectureFlow items={project.architecture} />
              ) : null}

              <DetailList title='What I Built' items={project.contribution} />
              <DetailList title='Key Features' items={project.highlights} />

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target='_blank'
                  rel='noreferrer'
                  className='button-primary mt-10'
                >
                  Live Project <FiExternalLink />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const filtered = useMemo(
    () =>
      projects.filter((project) => {
        if (filter === 'All') return true
        if (filter === 'Full-Stack') return project.role.includes('Full-Stack')
        if (filter === 'Frontend') return project.role.includes('Frontend')
        return project.category === filter
      }),
    [filter]
  )

  const featuredProjects = useMemo(
    () =>
      featuredOrder
        .map((slug) => filtered.find((project) => project.slug === slug))
        .filter(Boolean),
    [filtered]
  )

  const gridProjects = useMemo(() => {
    if (showAll || filter !== 'All') {
      return filtered
    }
    return []
  }, [filtered, filter, showAll])

  const showingFeatured = !showAll && filter === 'All'

  return (
    <section id='work' className='work-v2 border-t border-stone-200/80 scroll-mt-24'>
      <Reveal>
        <div className='flex flex-col justify-between gap-6 md:flex-row md:items-end'>
          <SectionHeading
            eyebrow='Projects'
            title='Featured Projects'
            description='A selection of web applications, SaaS platforms, and digital products I have built and maintained.'
          />

          <button
            type='button'
            onClick={() => {
              setShowAll((value) => !value)
              if (showAll) {
                setFilter('All')
              }
            }}
            className='button-secondary shrink-0'
          >
            {showAll ? 'Show featured' : 'View All Projects'} <FiArrowUpRight />
          </button>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className='mt-5 flex flex-wrap items-center gap-1.5'>
          {filterOptions.map((item) => (
            <button
              key={item}
              type='button'
              onClick={() => {
                setFilter(item)
                setShowAll(item !== 'All')
              }}
              className={`filter-button ${filter === item ? 'active' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
      </Reveal>

      {showingFeatured ? (
        <div className='mt-4 border-b border-line'>
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.slug}
              project={project}
              index={index}
              onSelect={setSelected}
            />
          ))}
        </div>
      ) : (
        <div className='mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {gridProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} onSelect={setSelected} />
          ))}
        </div>
      )}

      {!showingFeatured && !gridProjects.length ? (
        <p className='mt-6 border border-dashed border-line px-6 py-10 text-center text-muted'>
          No projects match those filters.
        </p>
      ) : null}

      {showingFeatured ? (
        <div className='mt-10 flex justify-center'>
          <button type='button' onClick={() => setShowAll(true)} className='button-secondary'>
            View All Projects <FiArrowUpRight />
          </button>
        </div>
      ) : null}

      <AnimatePresence>
        {selected ? (
          <ProjectDetail
            key={selected.slug}
            project={selected}
            onClose={() => setSelected(null)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  )
}
