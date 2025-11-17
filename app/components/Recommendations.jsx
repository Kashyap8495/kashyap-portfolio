'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function Recommendations() {
  const items = [
    {
      name: 'John Doe',
      text: 'Kashyap is an exceptional problem solver who delivers clean solutions.',
    },
  ]

  return (
    <section className='mt-20'>
      <h3 className='text-2xl font-bold mb-6'>Peer Recommendations</h3>

      <Swiper spaceBetween={20} slidesPerView={1}>
        {items.map((i, index) => (
          <SwiperSlide key={index}>
            <div className='p-6 bg-black/30 rounded-lg'>
              {i.text} — <strong>{i.name}</strong>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
