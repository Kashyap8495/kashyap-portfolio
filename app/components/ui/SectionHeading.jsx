export default function SectionHeading({ eyebrow, title, description, className = '' }) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      {eyebrow ? <p className='eyebrow'>{eyebrow}</p> : null}
      {title ? <h2>{title}</h2> : null}
      {description ? <p>{description}</p> : null}
    </div>
  )
}
