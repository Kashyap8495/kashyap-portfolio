'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaBolt } from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className='fixed w-full z-40 backdrop-blur-md bg-black/30'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        <Link
          href='#home'
          className='flex items-center gap-2.5 font-extrabold text-2xl tracking-wide cursor-pointer group'
        >
          <span
            className='w-3 h-3 rounded-full bg-gradient-to-br from-[#9b5cff] to-[#4ba3ff]
                  shadow-[0_0_12px_rgba(155,92,255,0.8)] group-hover:scale-125 transition-transform'
          />

          <span
            className='bg-gradient-to-r from-[#9b5cff] to-[#4ba3ff] bg-clip-text text-transparent
                  drop-shadow-md group-hover:tracking-widest transition-all duration-300'
          >
            Kashyap
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-6 items-center text-sm'>
          <a href='#home' className='hover:text-accent transition'>
            Home
          </a>
          <a href='#services' className='hover:text-accent transition'>
            Services
          </a>
          <a href='#skills' className='hover:text-accent transition'>
            Skills
          </a>
          <a href='#resume' className='hover:text-accent transition'>
            Resume
          </a>
          <a href='#technology' className='hover:text-accent transition'>
            Technology
          </a>
          <a href='#work' className='hover:text-accent transition'>
            Work
          </a>
          <a href='#contact' className='hover:text-accent transition'>
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden'
          onClick={() => setOpen(!open)}
          aria-label='menu'
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='md:hidden px-6 pb-6 space-y-3 text-sm'>
          <a href='#services' className='block'>
            Services
          </a>
          <a href='#skills' className='block'>
            Skills
          </a>
          <a href='#technology' className='block'>
            Technology
          </a>
          <a href='#work' className='block'>
            Work
          </a>
          <a href='#contact' className='block'>
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}
