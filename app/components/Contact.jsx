'use client'

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id='contact' className='mt-28 pb-24 scroll-mt-32'>
      <h2 className='text-3xl font-bold text-accent text-center'>
        Get in Touch
      </h2>
      <p className='text-gray-400 mb-12 text-center'>
        Have a project in mind? Let&apos;s work together!
      </p>

      <div className='grid md:grid-cols-[30%,70%] gap-10 items-start'>
        {/* LEFT SIDE — CONTACT INFO */}
        <div className='space-y-6'>
          <div className='p-5 bg-[#0f0f0f] rounded-xl border border-white/10 flex items-center gap-4 hover:-translate-y-1 transition'>
            <FaEnvelope className='text-accent text-xl' />
            <div>
              <strong className='text-accent'>Email</strong>
              <br />
              <span className='text-gray-300 text-sm'>
                patelkashyap134@gmail.com
              </span>
            </div>
          </div>

          <div className='p-5 bg-[#0f0f0f] rounded-xl border border-white/10 flex items-center gap-4 hover:-translate-y-1 transition'>
            <FaPhoneAlt className='text-accent text-xl' />
            <div>
              <strong className='text-accent'>Phone</strong>
              <br />
              <span className='text-gray-300 text-sm'>+91 84909 39000</span>
            </div>
          </div>

          <div className='p-5 bg-[#0f0f0f] rounded-xl border border-white/10 flex items-center gap-4 hover:-translate-y-1 transition'>
            <FaMapMarkerAlt className='text-accent text-xl' />
            <div>
              <strong className='text-accent'>Location</strong>
              <br />
              <span className='text-gray-300 text-sm'>Surat, Gujarat</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <form className='p-8 rounded-xl bg-[#0b0b0b] border border-white/10 space-y-5 shadow-xl'>
          <input
            placeholder='Your Name'
            className='p-3 rounded bg-[#1a1a1a] border border-white/10 w-full text-gray-200 focus:outline-none focus:border-accent'
          />

          <input
            placeholder='Your Email'
            className='p-3 rounded bg-[#1a1a1a] border border-white/10 w-full text-gray-200 focus:outline-none focus:border-accent'
          />

          <textarea
            rows='6'
            placeholder='Your Message'
            className='p-3 rounded bg-[#1a1a1a] border border-white/10 w-full text-gray-200 focus:outline-none focus:border-accent'
          ></textarea>

          <button className='px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-black font-semibold hover:opacity-90 transition'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
