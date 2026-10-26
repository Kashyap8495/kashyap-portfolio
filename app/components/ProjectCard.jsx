import Image from 'next/image'
import { FiArrowRight, FiExternalLink } from 'react-icons/fi'

function techSummary(technologies = []) {
  return technologies.slice(0, 5).join(' · ')
}

export default function ProjectCard({ project, onSelect }) {
  return (
    <article className='group flex h-full flex-col border border-line bg-surface transition duration-300 hover:bg-surface-hover'>
      <button
        type='button'
        onClick={() => onSelect(project)}
        className='flex flex-1 flex-col text-left'
        aria-label={`View case study for ${project.title}`}
      >
        <div className='relative overflow-hidden border-b border-line'>
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              className='aspect-[16/10] w-full object-cover transition duration-500 ease-premium group-hover:scale-[1.03]'
            />
          ) : (
            <div className='relative flex aspect-[16/10] items-end overflow-hidden bg-canvas-warm p-6'>
              <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(6,95,70,0.12),transparent_55%)]' />
              <div className='pointer-events-none absolute inset-6 border border-dashed border-line' />
              <span className='relative text-2xl font-semibold tracking-tight text-ink'>
                {project.shortName || project.title}
              </span>
            </div>
          )}
        </div>

        <div className='flex flex-1 flex-col p-5 sm:p-6'>
          <p className='label'>{project.categoryLabel}</p>

          <h3 className='mt-3 text-xl font-semibold tracking-tight text-ink transition duration-300 group-hover:translate-x-0.5'>
            {project.title}
          </h3>

          <div className='accent-rule mt-3' />

          <p className='mt-4 line-clamp-2 text-sm leading-6 text-muted'>
            {project.description}
          </p>

          <p className='mt-4 text-sm text-ink'>
            <span className='text-muted'>Role · </span>
            {project.role}
          </p>

          {project.technologies?.length ? (
            <p className='tech-inline mt-3'>{techSummary(project.technologies)}</p>
          ) : null}

          <span className='project-arrow mt-auto pt-6 inline-flex items-center gap-2 whitespace-nowrap'>
            <span>View Case Study</span>
            <FiArrowRight className='shrink-0 text-sm' />
          </span>
        </div>
      </button>

      {project.liveUrl ? (
        <div className='border-t border-line px-5 py-4 sm:px-6'>
          <a
            href={project.liveUrl}
            target='_blank'
            rel='noreferrer'
            className='button-ghost inline-flex items-center gap-1.5 whitespace-nowrap !text-sm'
          >
            <span>Live Project</span>
            <FiExternalLink className='shrink-0 text-xs' />
          </a>
        </div>
      ) : null}
    </article>
  )
}
