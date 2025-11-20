'use client'
import { useState } from 'react'
import ProjectCard from './ProjectCard'
import fostercare from '@/app/assets/images/fostercare.png'
import Darlink from '@/app/assets/images/darlink.png'
import Finideas from '@/app/assets/images/finideas1.png'
import Vertelier from '@/app/assets/images/vertelier.png'
import leadtree from '@/app/assets/images/leadtree.png'
import gff from '@/app/assets/images/gff.png'
import steerhealth from '@/app/assets/images/steerhealth.png'
import trooptravel from '@/app/assets/images/trooptravel.png'
import dayviewer from '@/app/assets/images/dayviewer.png'
import primax from '@/app/assets/images/primax.png'
import mmn from '@/app/assets/images/mmn.png'
import moneyatlas from '@/app/assets/images/moneyatlas.png'
import rentbabe from '@/app/assets/images/rentbabe.png'
import architechrender from '@/app/assets/images/architechrender.png'
import coddered from '@/app/assets/images/coddered.jpeg'

export default function Projects() {
  const list = [
    {
      title: 'Foster Care',
      tech: 'Next.js (TS) • Node.js • PostgreSQL • Tailwind',
      link: 'https://gardenofhope.fosterkonnect.com',
      img: fostercare,
    },
    {
      title: 'Darlink',
      tech: 'React • Node.js • MySQL • Tailwind',
      link: 'https://www.darlink.ai',
      img: Darlink,
    },
    {
      title: 'Finideas',
      tech: 'React • Node.js • PostgreSQL • ANTD',
      link: 'https://www.finideas.com',
      img: Finideas,
    },
    {
      title: 'Vertelier',
      tech: 'Next.js • Node.js • MySQL • Tailwind',
      link: 'https://www.vertelier.com',
      img: Vertelier,
    },
    {
      title: 'Lead Tree',
      tech: 'Next.js • Node.js • PostgreSQL • Tailwind • MUI',
      link: 'https://lead-tree-frontend.vercel.app/dashboard',
      img: leadtree,
    },
    {
      title: 'Girls First Finance',
      tech: 'React • Node.js • MongoDB • MUI • Tailwind',
      link: 'https://www.girlsfirstfinance.com',
      img: gff,
    },
    {
      title: 'Code Red',
      tech: 'Next.js (TS) • Node.js • PostgreSQL • GraphQL • Tailwind • MUI',
      link: 'https://red.clearanchor.co',
      img: coddered,
    },
    {
      title: 'Primex',
      tech: 'Next.js (TS) • Node.js • Cloudflare • Tailwind • MUI',
      link: 'https://dev.pnndigital.com',
      img: primax,
    },
    {
      title: 'Architect Render',
      tech: 'Next.js • Node.js • Tailwind • Headless UI',
      link: 'https://architect-render-git-new-ui-architectrender-s-team.vercel.app/',
      img: architechrender,
    },
    {
      title: 'Money Atlas',
      tech: 'Next.js • Tailwind • Radix UI',
      link: 'https://www.moneyatlas.com',
      img: moneyatlas,
    },
    {
      title: 'Troop Travel',
      tech: 'React • Node.js • Apollo Federation • Tailwind',
      link: 'https://www.trooptravel.com',
      img: trooptravel,
    },
    {
      title: 'DayViewer',
      tech: 'React • TS • Redux • Node.js • MongoDB • GraphQL • Docker • Tailwind • MUI',
      link: 'https://dayviewer.com',
      img: dayviewer,
    },
    {
      title: 'Rent Babe',
      tech: 'Next.js • Node.js • MUI',
      link: 'https://rentbabe.com/en/rent',
      img: rentbabe,
    },
    {
      title: 'Steer Health',
      tech: 'Next.js • Node.js • Tailwind • MUI',
      link: 'https://steerhealth.io',
      img: steerhealth,
    },
    {
      title: 'Mega Millions Naija',
      tech: 'Next.js • Node.js • Tailwind • MUI',
      link: 'https://megamillionsnaija.com',
      img: mmn,
    },
  ]

  const [visible, setVisible] = useState(6)

  const handleToggle = () => {
    setVisible(visible === 6 ? list.length : 6)
  }

  return (
    <section id='work' className='mt-24 text-center scroll-mt-32'>
      <h2 className='text-3xl font-bold text-accent'>My Works</h2>
      <p className='mb-10 text-gray-400 mb-12'>
        Here are my recent professional projects
      </p>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {list.slice(0, visible).map((p, i) => (
          <ProjectCard
            key={i}
            title={p.title}
            tech={p.tech}
            link={p.link}
            img={p.img}
          />
        ))}
      </div>

      <button
        onClick={handleToggle}
        className='mt-10 px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-white transition'
      >
        {visible === 6 ? 'Show More' : 'Show Less'}
      </button>
    </section>
  )
}
