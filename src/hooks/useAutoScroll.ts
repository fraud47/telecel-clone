import { useState, useEffect, useCallback } from 'react'

export function useAutoScroll(itemCount: number, interval: number) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount)
  }, [itemCount])

  useEffect(() => {
    const timer = setInterval(nextSlide, interval)
    return () => clearInterval(timer)
  }, [nextSlide, interval])

  return currentIndex
}
