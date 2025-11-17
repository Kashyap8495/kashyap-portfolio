'use client'
import { FiFileText } from 'react-icons/fi'

export default function Blog() {
  const posts = [
    {
      title: 'Improving UI Performance in React',
      date: '2024',
      link: '#',
    },
    {
      title: 'Why Next.js is the Future of Fullstack Apps',
      date: '2024',
      link: '#',
    },
    {
      title: 'State Management Tips for Scalable Apps',
      date: '2023',
      link: '#',
    },
  ]

  return (
    <section className='mt-28 text-center'>
      <h2 className='text-3xl font-bold text-accent mb-12'>
        Latest Blog Posts
      </h2>
      <div className='grid md:grid-cols-3 gap-6'>
        {posts.map((p, idx) => (
          <a
            key={idx}
            href={p.link}
            className='p-6 bg-black/20 rounded-xl border border-white/10 hover:bg-black/30 transition shadow-lg backdrop-blur-md text-left'
          >
            <div className='flex items-center gap-3 mb-4'>
              <FiFileText className='text-accent' size={26} />
              <span className='text-sm text-gray-400'>{p.date}</span>
            </div>
            <h3 className='font-semibold mb-2 text-white'>{p.title}</h3>
            <p className='text-xs text-gray-400'>Read More →</p>
          </a>
        ))}
      </div>
    </section>
  )
}
