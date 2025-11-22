import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='pt-16 bg-[#0B0F17] text-gray-300 border-t border-white/10'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-12 px-6'>
        {/* Brand Section */}
        <div>
          <h3 className='text-2xl font-bold bg-gradient-to-r from-[#9b5cff] to-[#4ba3ff] text-transparent bg-clip-text'>
            Portfolio
          </h3>

          <p className='mt-3 text-sm text-gray-400 leading-relaxed'>
            Creating exceptional digital experiences through innovative design
            and development solutions.
          </p>

          {/* Social Icons */}
          <div className='flex gap-4 mt-4 text-xl'>
            <a
              href='https://github.com/Kashyap8495'
              target='_blank'
              className='hover:text-accent transition'
            >
              <FaGithub />
            </a>

            <a
              href='https://www.linkedin.com/in/kashyapgeek9012'
              target='_blank'
              className='hover:text-accent transition'
            >
              <FaLinkedin />
            </a>

            <a
              href='https://instagram.com'
              target='_blank'
              className='hover:text-accent transition'
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-semibold text-accent mb-4'>
            Quick Links
          </h3>

          <ul className='space-y-3 text-sm'>
            <li>
              <a href='#home' className='hover:text-accent'>
                Home
              </a>
            </li>
            <li>
              <a href='#services' className='hover:text-accent'>
                Services
              </a>
            </li>
            <li>
              <a href='#skills' className='hover:text-accent'>
                Skills
              </a>
            </li>
            <li>
              <a href='#resume' className='hover:text-accent'>
                Resume
              </a>
            </li>
            <li>
              <a href='#technology' className='hover:text-accent'>
                Technology
              </a>
            </li>
            <li>
              <a href='#work' className='hover:text-accent'>
                Work
              </a>
            </li>
            <li>
              <a href='#contact' className='hover:text-accent'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className='text-lg font-semibold text-accent mb-4'>
            Stay Updated
          </h3>

          <p className='text-sm text-gray-400 mb-3'>
            Subscribe to my newsletter for the latest updates.
          </p>

          <div className='flex'>
            <input
              type='email'
              placeholder='Enter your email'
              className='px-4 py-3 w-full bg-[#10141F] border border-gray-700 rounded-l-lg focus:outline-none'
            />

            <button className='px-6 py-3 bg-gradient-to-r from-[#9b5cff] to-[#4ba3ff] text-white rounded-r-lg font-medium'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-white/10 mt-12 py-6'>
        <p className='text-center text-sm text-gray-500'>
          © {new Date().getFullYear()} Kashyap Patel. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
