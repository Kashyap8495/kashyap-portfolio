'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi'

const links = [
  ['Home', '#home'],
  ['Work', '#work'],
  ['Services', '#services'],
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 flex items-center ${
        scrolled || open
          ? 'border-b border-stone-200/90 bg-[#F9F7F2]/90 shadow-xs backdrop-blur-xl h-20 sm:h-24'
          : 'border-b border-transparent bg-transparent h-24 sm:h-28'
      }`}
    >
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-6'>
        {/* Logo */}
        <a
          href='#home'
          className='group flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-tight text-stone-900'
        >
          <span>Kashyap</span>
          <span className='h-2.5 w-2.5 rounded-full bg-[#065F46] group-hover:scale-125 transition-transform' />
        </a>

        {/* Desktop Links */}
        <nav className='hidden md:flex items-center gap-1.5 rounded-full border border-stone-200/90 bg-white/90 px-5 py-2 shadow-xs backdrop-blur-md'>
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className='px-3.5 py-1.5 text-xs sm:text-[0.82rem] font-mono font-medium text-stone-600 transition-colors hover:text-[#065F46]'
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className='hidden md:flex items-center gap-4'>
          <a
            href='#contact'
            className='inline-flex items-center gap-2 rounded-lg bg-[#065F46] px-5 py-2.5 text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#044e39] hover:shadow-md hover:shadow-[#065F46]/20 active:translate-y-0.5'
          >
            <span>Let&apos;s Talk</span>
            <FiArrowRight className='text-sm' />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type='button'
          className='flex h-11 w-11 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-800 md:hidden shadow-xs'
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          {open ? <FiX className='text-xl' /> : <FiMenu className='text-xl' />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className='border-b border-stone-200 bg-[#F9F7F2]/98 backdrop-blur-2xl md:hidden overflow-hidden'
          >
            <div className='flex flex-col gap-2 px-6 py-6'>
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className='border-b border-stone-200/60 py-3 text-base font-mono font-medium text-stone-700 transition-colors hover:text-[#065F46]'
                >
                  {label}
                </a>
              ))}
              <a
                href='#contact'
                onClick={() => setOpen(false)}
                className='mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-[#065F46] px-4 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-sm hover:bg-[#044e39]'
              >
                <span>Let&apos;s Talk</span>
                <FiArrowRight />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
