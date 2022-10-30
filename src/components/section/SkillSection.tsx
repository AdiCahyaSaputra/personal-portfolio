import { useEffect, useRef, useState } from "react"
import Container from "../reusable/Container"
import TechStackCard from "../reusable/TechStackCard"

const SkillSection: React.FC = () => {
  const [toBlack, setToBlack] = useState(false)
  const containerRef = useRef<HTMLElement>(null)

  const options = { threshold: 0.5 }
  const handler: IntersectionObserverCallback = (entries) => {
    const [el] = entries
    if (el.isIntersecting) setToBlack(true)
  }

  const observer = new IntersectionObserver(handler, options)

  useEffect(() => {
    if (containerRef.current) observer.observe(containerRef.current)
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [options, containerRef])

  return (
    <section ref={containerRef} className={`py-10 transition-all ${toBlack ? 'bg-black' : 'bg-white'} px-4`}>
      <Container>
        <h1 className="text-3xl text-white font-bold">I've Currently Used...</h1>
        <div className={`transition-all ${toBlack ? 'grid' : 'hidden'} mt-6 grid-cols-12 gap-4`}>

          <TechStackCard tech="NextJS" style={{
            text: 'text-white',
            bg: 'bg-black',
            img: '/icons/nextjs.png',
            border: 'border-white'
          }} />
          <TechStackCard tech="Laravel" style={{
            text: 'text-red-600',
            bg: 'bg-white',
            img: '/icons/laravel.png',
            border: 'border-red-600'
          }} />
          <TechStackCard tech="Tailwind CSS" style={{
            text: 'text-white',
            bg: 'bg-sky-600',
            img: '/icons/tailwindcss.svg',
            border: 'border-sky-400'
          }} />
          <TechStackCard tech="Typescript" style={{
            text: 'text-white',
            bg: 'bg-blue-600',
            img: '/icons/typescript.png',
            border: 'border-blue-400'
          }} />

        </div>
      </Container>
    </section>
  )
}

export default SkillSection
