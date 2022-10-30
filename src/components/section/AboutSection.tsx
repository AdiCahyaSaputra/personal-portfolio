import { useContext, useRef } from "react"
import { ScrollContext } from "../../context/scroll-observer"
import Container from "../reusable/Container"

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  if (progress >= 0 && progress < 1) return 1

  return 0.3
}

const AboutSection: React.FC = () => {
  const { scrollY } = useContext(ScrollContext)
  const containerRef = useRef<HTMLElement>(null)

  const numOfText = 3
  let progress = 0

  const { current: container } = containerRef

  if (container) {
    const { clientHeight, offsetTop } = container

    const screenHeight = window.innerHeight
    const halfScreenHeight = screenHeight / 2

    const percentY = Math.min(clientHeight + halfScreenHeight, Math.max(-screenHeight, scrollY - offsetTop) + halfScreenHeight) / clientHeight
    progress = Math.min(numOfText - 0.5, Math.max(0.5, percentY * numOfText))
  }

  return (
    <section ref={containerRef} className="p-4 flex items-center h-screen bg-white">
      <Container>
        <h1 style={{
          opacity: opacityForBlock(progress, 0)
        }} className="text-4xl font-bold transition-all">
          I'm Vocational High School Student Of Software Engineer
        </h1>

        <h1 style={{
          opacity: opacityForBlock(progress, 1)
        }} className="mt-6 text-4xl font-bold transition-all">
          Interest In Frontend Engineer, UI & UX Design, And Problem Solving
        </h1>

        <h1 style={{
          opacity: opacityForBlock(progress, 2)
        }} className="mt-6 text-4xl font-bold transition-all">
          Open To Collaborate With Your Team
        </h1>
      </Container>
    </section>
  )
}

export default AboutSection
