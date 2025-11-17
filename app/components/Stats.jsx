'use client'
export default function Stats() {
  const stats = [
    { value: '3.5+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Completed' },
    { value: '15+', label: 'Happy Clients' },
    { value: '100%', label: 'Client Satisfaction' },
  ]

  return (
    <section className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-6'>
      {stats.map((s) => (
        <div
          key={s.label}
          className='p-6 text-center bg-black/20 rounded-xl border border-white/10 backdrop-blur-md hover:shadow-[0_0_20px_#7c3aed55] transition'
        >
          <div className='text-3xl font-bold text-accent'>{s.value}</div>
          <div className='text-sm text-gray-300 mt-1'>{s.label}</div>
        </div>
      ))}
    </section>
  )
}
