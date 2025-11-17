'use client'
export default function Experience() {
  return (
    <section className='mt-20 grid md:grid-cols-2 gap-10'>
      <div>
        <h3 className='text-2xl font-bold mb-4'>Work Experience</h3>
        <div className='space-y-4'>
          <div className='p-4 bg-black/30 rounded-lg'>
            <div className='font-semibold'>Software Engineer — FinIdeas</div>
            <div className='text-sm text-gray-400'>2022 — Present</div>
            <p className='text-sm mt-2 text-gray-300'>
              Building features, maintaining large-scale dashboards, performance
              improvements.
            </p>
          </div>

          <div className='p-4 bg-black/30 rounded-lg'>
            <div className='font-semibold'>Frontend Developer — Vertelier</div>
            <div className='text-sm text-gray-400'>2021 — 2022</div>
            <p className='text-sm mt-2 text-gray-300'>
              Built modern eCommerce UIs & optimised product pages.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className='text-2xl font-bold mb-4'>Education</h3>
        <div className='space-y-4'>
          <div className='p-4 bg-black/30 rounded-lg'>
            <div className='font-semibold'>B.Tech — Computer Engineering</div>
            <div className='text-sm text-gray-400'>2017 — 2021</div>
            <p className='text-sm mt-2 text-gray-300'>
              Completed Computer Engineering degree.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
