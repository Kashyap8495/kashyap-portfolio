'use client'

export default function Contact() {
  return (
    <section id='contact' className='mt-28 pb-24 scroll-mt-32'>
      <h2 className='text-3xl font-bold text-accent text-center mb-12'>
        Get in Touch
      </h2>

      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-6'>
          <div className='p-5 bg-black/20 rounded-xl border border-white/10'>
            <strong className='text-accent'>Email</strong>
            <br /> patelkashyap134@gmail.com
          </div>

          <div className='p-5 bg-black/20 rounded-xl border border-white/10'>
            <strong className='text-accent'>Phone</strong>
            <br /> +91 84909 39000
          </div>

          <div className='p-5 bg-black/20 rounded-xl border border-white/10'>
            <strong className='text-accent'>Location</strong>
            <br /> Surat, Gujarat
          </div>
        </div>

        <form className='p-6 bg-black/20 rounded-xl border border-white/10 space-y-4'>
          <input
            placeholder='Name'
            className='p-3 rounded bg-gray-900 w-full'
          />
          <input
            placeholder='Email'
            className='p-3 rounded bg-gray-900 w-full'
          />
          <textarea
            rows='5'
            placeholder='Message'
            className='p-3 rounded bg-gray-900 w-full'
          ></textarea>
          <button className='px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
