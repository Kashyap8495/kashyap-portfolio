'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function ArchitectureFlow({
  items = [],
  label = 'Architecture',
  variant = 'default',
}) {
  const reduceMotion = useReducedMotion()

  if (!items.length) return null

  return (
    <div className='mt-8'>
      <p className='label'>{label}</p>
      <ol className='mt-4 flex flex-col'>
        {items.map((item, index) => (
          <li key={item} className='flex flex-col items-stretch'>
            {index > 0 ? (
              <div className='flex justify-center py-1.5' aria-hidden='true'>
                <motion.span
                  className='font-mono text-xs text-accent'
                  initial={reduceMotion ? false : { opacity: 0.35 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  ↓
                </motion.span>
              </div>
            ) : null}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`flow-node ${
                variant === 'accent' ? 'border-accent/30 bg-accent-soft' : ''
              }`}
            >
              {item}
            </motion.div>
          </li>
        ))}
      </ol>
    </div>
  )
}
