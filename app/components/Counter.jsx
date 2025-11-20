'use client'
import { useEffect, useState } from 'react'

export default function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration / 16) // smooth 60fps speed

    const handle = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(handle)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(handle)
  }, [end, duration])

  return <span>{count}</span>
}
