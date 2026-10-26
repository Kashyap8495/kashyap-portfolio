'use client'

import { useEffect, useState } from 'react'
import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiArrowUpRight,
  FiTerminal,
  FiCheck,
  FiCopy,
  FiCpu,
  FiShield,
  FiCode,
} from 'react-icons/fi'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Featured Work', href: '#work' },
  { name: 'Tech Stack', href: '#stack' },
  { name: 'Skills & Toolkit', href: '#skills' },
  { name: 'Career Journey', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

const socials = [
  {
    name: 'GitHub',
    handle: '@Kashyap8495',
    sub: 'Open source & contributions',
    href: 'https://github.com/Kashyap8495',
    icon: FiGithub,
  },
  {
    name: 'LinkedIn',
    handle: 'Kashyap Patel',
    sub: 'Professional network',
    href: 'https://www.linkedin.com/in/kashyapgeek9012',
    icon: FiLinkedin,
  },
  {
    name: 'Email',
    handle: 'patelkashyap134@gmail.com',
    sub: 'Direct inquiries & proposals',
    href: 'mailto:patelkashyap134@gmail.com',
    icon: FiMail,
  },
  {
    name: 'Phone / WhatsApp',
    handle: '+91 84909 3900',
    sub: 'Quick voice or text chat',
    href: 'tel:+91849093900',
    icon: FiPhone,
  },
]

export default function Footer() {
  const [time, setTime] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      })
      setTime(istTime)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('patelkashyap134@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='relative bg-[#0A110E] text-zinc-100 overflow-hidden pt-20 pb-12'>
      {/* Top Emerald Horizon Glow & Divider */}
      <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#065F46] to-transparent' />
      <div className='pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[300px] w-[700px] rounded-full bg-[#065F46]/20 blur-[140px]' />

      <div className='mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative'>
        {/* Main Content Grid */}
        <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
          {/* Brand & Mission Statement (5 cols) */}
          <div className='md:col-span-5 space-y-5'>
            <div className='flex items-center gap-3'>
              <div className='h-9 w-9 rounded-xl bg-gradient-to-br from-[#065F46] to-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-300 font-mono font-bold text-sm'>
                KP
              </div>
              <div>
                <h3 className='text-lg font-bold text-white tracking-tight leading-tight'>
                  Kashyap Patel
                </h3>
                <p className='text-xs font-mono text-emerald-400 font-medium'>
                  Senior Full-Stack Developer
                </p>
              </div>
            </div>

            <p className='text-sm text-zinc-400 leading-relaxed max-w-md'>
              Full-stack developer with 4+ years of experience building web applications, scalable APIs, and database architectures with React, Next.js, Node.js, and PostgreSQL.
            </p>

            <div className='pt-2 flex flex-wrap gap-2 text-xs font-mono text-zinc-400'>
              <span className='rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1'>
                TypeScript
              </span>
              <span className='rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1'>
                Next.js 14
              </span>
              <span className='rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1'>
                Node.js
              </span>
              <span className='rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1'>
                PostgreSQL
              </span>
              <span className='rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1'>
                Docker
              </span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className='md:col-span-3'>
            <h4 className='text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-4 flex items-center gap-2'>
              <FiCode className='text-emerald-400' />
              <span>Navigation</span>
            </h4>
            <ul className='grid grid-cols-2 gap-y-2.5 text-xs sm:text-sm font-mono text-zinc-400'>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group'
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Cards (4 cols) */}
          <div className='md:col-span-4'>
            <h4 className='text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-4 flex items-center gap-2'>
              <FiTerminal className='text-emerald-400' />
              <span>Connect &amp; Socials</span>
            </h4>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2.5'>
              {socials.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className='group rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-200 hover:border-emerald-500/40 hover:bg-white/[0.07] hover:-translate-y-0.5'
                  >
                    <div className='flex items-center justify-between text-zinc-400 group-hover:text-emerald-400 mb-1.5'>
                      <Icon className='text-base text-emerald-400' />
                      <FiArrowUpRight className='text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                    </div>
                    <div className='text-xs font-semibold text-white group-hover:text-emerald-300 truncate'>
                      {item.name}
                    </div>
                    <div className='text-[0.7rem] font-mono text-zinc-500 truncate'>
                      {item.handle}
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
