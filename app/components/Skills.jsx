'use client'
export default function Skills() {
  const skills = [
    { name: 'React', value: 90 },
    { name: 'Next.js', value: 85 },
    { name: 'Node.js', value: 80 },
    { name: 'JavaScript', value: 90 },
    { name: 'HTML5', value: 95 },
    { name: 'CSS3', value: 95 },
  ]

  return (
    <section id='skills' className='mt-24 scroll-mt-32 mb-32'>
      <h2 className='text-3xl font-bold text-center text-accent'>My Skills</h2>
      <p className='mb-10 text-gray-400 mb-12 text-center'>
        Technologies and tools I work with
      </p>

      <div className='grid md:grid-cols-2 gap-10'>
        {skills.map((s) => (
          <div key={s.name}>
            <div className='flex justify-between mb-1'>
              <span>{s.name}</span>
              <span>{s.value}%</span>
            </div>
            <div className='h-3 bg-gray-800 rounded-full overflow-hidden'>
              <div
                className='h-3 bg-gradient-to-r from-primary to-accent'
                style={{ width: `${s.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
