'use client'

import { useEffect, useState } from 'react'
import { FiArrowUpRight, FiCheck, FiCopy, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Reveal from './ui/Reveal'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const channels = [
  {
    label: 'Direct Email',
    value: 'patelkashyap134@gmail.com',
    href: 'mailto:patelkashyap134@gmail.com',
    icon: FiMail,
  },
  {
    label: 'LinkedIn Profile',
    value: 'linkedin.com/in/kashyapgeek9012',
    href: 'https://www.linkedin.com/in/kashyapgeek9012',
    icon: FaLinkedin,
  },
  {
    label: 'GitHub Repositories',
    value: 'github.com/Kashyap8495',
    href: 'https://github.com/Kashyap8495',
    icon: FaGithub,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const { name, email, message } = form
    setIsValid(
      name.trim() !== '' && message.trim() !== '' && emailRegex.test(email.trim())
    )
  }, [form])

  const copyEmail = () => {
    navigator.clipboard.writeText('patelkashyap134@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!emailRegex.test(form.email.trim())) {
      setStatus('Please enter a valid email address.')
      return
    }

    setLoading(true)
    setStatus('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('Message received! I will get back to you within 24 hours.')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('Failed to send message. Please reach out via email directly.')
      }
    } catch {
      setStatus('Something went wrong. Please email patelkashyap134@gmail.com directly.')
    }

    setLoading(false)
  }

  return (
    <section id='contact' className='py-20 sm:py-28 border-t border-stone-200/80 scroll-mt-20'>
      <Reveal>
        <div className='flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#065F46] mb-2'>
          <span className='h-1.5 w-1.5 rounded-full bg-[#065F46]' />
          <span>Get in Touch</span>
        </div>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900'>
          Have a Project in Mind?{' '}
          <span className='text-[#065F46]'>
            Let&apos;s Build Together.
          </span>
        </h2>
        <p className='mt-4 text-base sm:text-lg text-stone-600 max-w-2xl'>
          Whether you need an MVP built from scratch, help scaling an existing web app, or want to discuss a full-time engineering role, feel free to reach out.
        </p>
      </Reveal>

      <div className='mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start'>
        {/* Left Column: Direct Channels & Fast Copy */}
        <div className='lg:col-span-5 space-y-6'>
          <Reveal delay={0.06}>
            <div className='rounded-2xl border border-stone-200/90 bg-white/90 p-6 backdrop-blur-sm shadow-sm'>
              <h3 className='text-sm font-mono uppercase tracking-wider text-stone-500 mb-4'>
                Direct Contact
              </h3>

              <div className='space-y-3'>
                {channels.map((ch) => {
                  const Icon = ch.icon
                  return (
                    <a
                      key={ch.label}
                      href={ch.href}
                      target={ch.href.startsWith('http') ? '_blank' : undefined}
                      rel={ch.href.startsWith('http') ? 'noreferrer' : undefined}
                      className='group flex items-center justify-between rounded-xl border border-stone-200/80 bg-stone-50/70 p-4 transition-all duration-200 hover:border-[#065F46]/40 hover:bg-white hover:shadow-xs'
                    >
                      <div className='flex items-center gap-3'>
                        <span className='flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-700 text-lg group-hover:text-[#065F46] group-hover:border-[#065F46]/40 transition-colors'>
                          <Icon />
                        </span>
                        <div>
                          <div className='text-xs font-mono text-stone-500'>{ch.label}</div>
                          <div className='text-sm font-medium text-stone-900 group-hover:text-[#065F46] transition-colors'>
                            {ch.value}
                          </div>
                        </div>
                      </div>
                      <FiArrowUpRight className='text-stone-400 group-hover:text-[#065F46] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                    </a>
                  )
                })}
              </div>

              {/* Fast Copy Button */}
              <div className='mt-6 pt-6 border-t border-stone-200/80 flex items-center justify-between'>
                <div className='flex items-center gap-2 text-xs font-mono text-stone-600'>
                  <FiMapPin className='text-[#065F46]' />
                  <span>Surat, India · IST (UTC +5:30)</span>
                </div>

                <button
                  type='button'
                  onClick={copyEmail}
                  className='inline-flex items-center gap-1.5 text-xs font-mono text-[#065F46] hover:text-[#044e39] font-medium transition-colors'
                >
                  {copied ? (
                    <>
                      <FiCheck /> Copied!
                    </>
                  ) : (
                    <>
                      <FiCopy /> Copy Email
                    </>
                  )}
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Interactive Form */}
        <div className='lg:col-span-7'>
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className='rounded-2xl border border-stone-200/90 bg-white/90 p-6 sm:p-8 backdrop-blur-sm shadow-sm'
            >
              <h3 className='text-lg font-semibold text-stone-900 mb-6'>
                Send a Message
              </h3>

              <div className='space-y-5'>
                <div>
                  <label htmlFor='contact-name' className='block text-xs font-mono text-stone-700 mb-2'>
                    YOUR NAME <span className='text-[#065F46]'>*</span>
                  </label>
                  <input
                    id='contact-name'
                    type='text'
                    placeholder='Elon Musk'
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className='w-full rounded-xl border border-stone-200 bg-stone-50/80 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:border-[#065F46] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#065F46] transition-colors'
                    required
                  />
                </div>

                <div>
                  <label htmlFor='contact-email' className='block text-xs font-mono text-stone-700 mb-2'>
                    EMAIL ADDRESS <span className='text-[#065F46]'>*</span>
                  </label>
                  <input
                    id='contact-email'
                    type='email'
                    placeholder='name@company.com'
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className='w-full rounded-xl border border-stone-200 bg-stone-50/80 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:border-[#065F46] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#065F46] transition-colors'
                    required
                  />
                </div>

                <div>
                  <label htmlFor='contact-message' className='block text-xs font-mono text-stone-700 mb-2'>
                    PROJECT DETAILS / MESSAGE <span className='text-[#065F46]'>*</span>
                  </label>
                  <textarea
                    id='contact-message'
                    rows={5}
                    placeholder='Tell me about your product, timeline, and tech stack requirements...'
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className='w-full rounded-xl border border-stone-200 bg-stone-50/80 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:border-[#065F46] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#065F46] transition-colors resize-y'
                    required
                  />
                </div>
              </div>

              <div className='mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                <button
                  type='submit'
                  disabled={!isValid || loading}
                  className='inline-flex items-center justify-center gap-2 rounded-lg bg-[#065F46] px-6 py-3.5 text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#044e39] disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md hover:shadow-[#065F46]/20 active:translate-y-0.5'
                >
                  <FiSend className='text-sm' />
                  <span>{loading ? 'Sending…' : 'Send Message'}</span>
                </button>

                {status && (
                  <p className='text-xs font-mono text-[#065F46]' role='status'>
                    {status}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
