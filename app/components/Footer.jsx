import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='mt-32 py-12 bg-black/30 border-t border-white/10 text-gray-300'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6'>
        {/* About */}
        <div>
          <h3 className='text-lg font-semibold text-accent mb-2'>Portfolio</h3>
          <p className='text-sm text-gray-400'>
            Designed & built by Kashyap Patel using Next.js, TailwindCSS &
            Framer Motion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-semibold text-accent mb-2'>
            Quick Links
          </h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href='#about' className='hover:text-accent'>
                About
              </a>
            </li>
            <li>
              <a href='#projects' className='hover:text-accent'>
                Projects
              </a>
            </li>
            <li>
              <a href='#contact' className='hover:text-accent'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className='text-lg font-semibold text-accent mb-2'>
            Stay Connected
          </h3>
          <div className='flex gap-4 text-xl'>
            <a href='https://linkedin.com' className='hover:text-accent'>
              <FaLinkedin />
            </a>
            <a href='https://github.com' className='hover:text-accent'>
              <FaGithub />
            </a>
            <a href='https://instagram.com' className='hover:text-accent'>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <p className='text-center text-xs text-gray-500 mt-10'>
        © {new Date().getFullYear()} Kashyap Patel. All Rights Reserved.
      </p>
    </footer>
  )
}
