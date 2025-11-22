'use client'

import { useState, useEffect } from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')
  const [isValid, setIsValid] = useState(false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Update validity whenever form changes
  useEffect(() => {
    const { name, email, message } = form
    setIsValid(
      name.trim() !== '' &&
        message.trim() !== '' &&
        emailRegex.test(email.trim())
    )
  }, [form])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Final regex check
    if (!emailRegex.test(form.email.trim())) {
      setStatus('Please enter a valid email.')
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
        setStatus('Message sent!')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('Failed to send message.')
      }
    } catch (err) {
      setStatus('Something went wrong.')
    }

    setLoading(false)
  }

  return (
    <section id='contact' className='mt-28 pb-24 scroll-mt-32'>
      <h2 className='text-3xl font-bold text-accent text-center'>
        Get in Touch
      </h2>
      <p className='text-gray-400 mb-12 text-center'>
        Have a project in mind? Let&apos;s work together!
      </p>

      <div className='grid md:grid-cols-[30%,70%] gap-10 items-start'>
        {/* LEFT SIDE */}
        <div className='space-y-6'>
          <div className='p-5 bg-[#0f0f0f] rounded-xl border border-white/10 flex items-center gap-4'>
            <FaEnvelope className='text-accent text-xl' />
            <div>
              <strong className='text-accent'>Email</strong>
              <br />
              <span className='text-gray-300 text-sm'>
                patelkashyap134@gmail.com
              </span>
            </div>
          </div>

          <div className='p-5 bg-[#0f0f0f] rounded-xl border border-white/10 flex items-center gap-4'>
            <FaPhoneAlt className='text-accent text-xl' />
            <div>
              <strong className='text-accent'>Phone</strong>
              <br />
              <span className='text-gray-300 text-sm'>+91 84909 39000</span>
            </div>
          </div>

          <div className='p-5 bg-[#0f0f0f] rounded-xl border border-white/10 flex items-center gap-4'>
            <FaMapMarkerAlt className='text-accent text-xl' />
            <div>
              <strong className='text-accent'>Location</strong>
              <br />
              <span className='text-gray-300 text-sm'>Surat, Gujarat</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <form
          onSubmit={handleSubmit}
          className='p-8 rounded-xl bg-[#0b0b0b] border border-white/10 space-y-5 shadow-xl'
        >
          <input
            placeholder='Your Name'
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className='p-3 rounded bg-[#1a1a1a] border border-white/10 w-full text-gray-200'
            required
          />

          <input
            placeholder='Your Email'
            type='email'
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className='p-3 rounded bg-[#1a1a1a] border border-white/10 w-full text-gray-200'
            required
          />

          <textarea
            rows='6'
            placeholder='Your Message'
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className='p-3 rounded bg-[#1a1a1a] border border-white/10 w-full text-gray-200'
            required
          ></textarea>

          {/* SUBMIT BUTTON */}
          <button
            disabled={!isValid || loading}
            className={`px-6 py-3 rounded-full text-black font-semibold transition flex items-center justify-center gap-2
              ${
                isValid
                  ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90'
                  : 'bg-gradient-to-r opacity-[0.2] from-primary to-accent cursor-not-allowed'
              }`}
          >
            {loading ? (
              <span className='w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin'></span>
            ) : (
              'Send Message'
            )}
          </button>

          {status && <p className='text-gray-300 text-sm pt-2'>{status}</p>}
        </form>
      </div>
    </section>
  )
}
