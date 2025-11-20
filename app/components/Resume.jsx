export default function Resume() {
  return (
    <section id='resume' className='mt-24 scroll-mt-32'>
      <h2 className='text-4xl font-bold text-center text-accent mb-12'>
        Resume
        <p className='!text-sm font-normal text-white'>
          My professional journey and educational background
        </p>
      </h2>
      <div className='grid md:grid-cols-2 gap-16'>
        <div>
          <h2 className='text-3xl font-bold mb-10 text-accent'>
            Work Experience
          </h2>

          <div className='relative pl-10 border-l border-accent/40 pb-12'>
            <span className='absolute -left-[7px] top-1 w-4 h-4 bg-accent rounded-full'></span>

            <div className='inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm mb-3'>
              July 2024 – Present
            </div>

            <h3 className='text-xl font-semibold'>MERN Stack Developer</h3>
            <p className='text-gray-400 mb-1'>SecretMind Tech</p>
            <p className='text-gray-500'>
              Building full-stack applications using React, Node.js, MongoDB,
              and Next.js.
            </p>
          </div>

          <div className='relative pl-10 border-l border-accent/40 pb-12'>
            <span className='absolute -left-[7px] top-1 w-4 h-4 bg-accent rounded-full'></span>

            <div className='inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm mb-3'>
              July 2022 – June 2024
            </div>

            <h3 className='text-xl font-semibold'>Frontend Developer</h3>
            <p className='text-gray-400 mb-1'>SecretMind Tech</p>
            <p className='text-gray-500'>
              Worked on UI/UX, frontend logic, API integration and performance
              improvement.
            </p>
          </div>

          <div className='relative pl-10 border-l border-accent/40 pb-12'>
            <span className='absolute -left-[7px] top-1 w-4 h-4 bg-accent rounded-full'></span>

            <div className='inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm mb-3'>
              July 2021 – June 2022
            </div>

            <h3 className='text-xl font-semibold'>Internship</h3>
            <p className='text-gray-400 mb-1'>SecretMind Tech</p>
            <p className='text-gray-500'>
              Completed internship with focus on frontend and backend
              fundamentals.
            </p>
          </div>
        </div>

        <div>
          <h2 className='text-3xl font-bold mb-10 text-accent'>Education</h2>

          <div className='relative pl-10 border-l border-accent/40 pb-12'>
            <span className='absolute -left-[7px] top-1 w-4 h-4 bg-accent rounded-full'></span>

            <div className='inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm mb-3'>
              2017 – 2021
            </div>

            <h3 className='text-xl font-semibold'>Computer Engineering</h3>
            <p className='text-gray-400 mb-1'>
              Gujarat Technological University
            </p>
            <p className='text-gray-500'>
              Bachelor of Engineering with focus on computer science principles.
            </p>
          </div>

          <div className='relative pl-10 border-l border-accent/40 pb-12'>
            <span className='absolute -left-[7px] top-1 w-4 h-4 bg-accent rounded-full'></span>

            <div className='inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm mb-3'>
              2015 – 2017
            </div>

            <h3 className='text-xl font-semibold'>Higher Secondary</h3>
            <p className='text-gray-400 mb-1'>
              Gujarat Board of Secondary Education
            </p>
            <p className='text-gray-500'>
              Science stream with focus on Maths, Physics, and Computer Science.
            </p>
          </div>

          <div className='relative pl-10 border-l border-accent/40 pb-12'>
            <span className='absolute -left-[7px] top-1 w-4 h-4 bg-accent rounded-full'></span>

            <div className='inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm mb-3'>
              2013 – 2015
            </div>

            <h3 className='text-xl font-semibold'>Secondary</h3>
            <p className='text-gray-400 mb-1'>
              Gujarat Board of Secondary Education
            </p>
            <p className='text-gray-500'>
              Completed secondary school with excellent performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
