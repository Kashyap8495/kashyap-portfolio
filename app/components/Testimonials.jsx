'use client'
import Image from 'next/image'
import Swiper from 'swiper'
import { SwiperSlide } from 'swiper/react'

export default function Testimonials() {
  const items = [
    {
      name: 'Rahul V',
      role: 'Team Lead',
      text: 'Kashyap is a great problem solver. Always eager to share knowledge and help others.',
      img: '/profile.jpg',
    },
    {
      name: 'Arjun M',
      role: 'Senior Developer',
      text: 'His UI/UX sense is strong. Delivers clean and scalable solutions.',
      img: '/profile.jpg',
    },
  ]

  return (
    <section className='mt-24 text-center'>
      <h2 className='text-3xl font-bold text-accent mb-12'>
        Peer Recommendations
      </h2>
      {/* <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // modules={[Pagination]}
        className='max-w-xl mx-auto'
      >
        {items.map((i, idx) => (
          <SwiperSlide key={idx}>
            <div className='p-8 bg-black/20 rounded-xl border border-white/10 backdrop-blur-md'>
              <div className='flex justify-center mb-4'>
                <Image
                  src={i.img}
                  width={60}
                  height={60}
                  className='rounded-full border border-accent'
                  alt={i.name}
                />
              </div>
              <p className='text-gray-300 mb-4'>{i.text}</p>
              <div className='font-semibold text-white'>{i.name}</div>
              <div className='text-sm text-gray-400'>{i.role}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </section>
  )
}
