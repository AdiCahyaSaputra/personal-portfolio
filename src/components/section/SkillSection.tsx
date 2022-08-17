import { useEffect, useRef, useState } from "react"
import Container from "../reusable/Container"
import LanguageCard from "../reusable/LanguageCard"
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
		<section ref={containerRef} className={`min-h-screen transition-all ${toBlack ? 'bg-black' : 'bg-white'} p-4`}>
			<Container>
				<h1 className="text-3xl mt-10 text-white font-bold">Tech stack I've currently used...</h1>
				<div className={`transition-all ${toBlack ? 'grid' : 'hidden'} mt-6 grid-cols-12 gap-4`}>

					<TechStackCard tech="NextJS" desc="To build fullstack web application with react" />
					<TechStackCard tech="Laravel" desc="Framework for create backend application" />
					<TechStackCard tech="Tailwindcss" desc="CSS framework to build modern website" />
					<TechStackCard tech="MySQL DB" desc="Relational database to populate the data" />

				</div>
				<h1 className={`${toBlack ? 'block' : 'hidden'} mt-6 text-white text-2xl font-bold`}>
					Programming Language <span className="font-light">→</span>
				</h1>
				<div className={`no-scrollbar overflow-x-auto ${toBlack ? 'flex' : 'hidden'} space-x-3 py-4 items-center`}>
					<LanguageCard lang="Javascript" />
					<LanguageCard lang="PHP" />
					<LanguageCard lang="Typescript" />
					<LanguageCard lang="Java" />
					<LanguageCard lang="Python" />
					<LanguageCard lang="Lua" />
				</div>

				<h1 className={`${toBlack ? 'block' : 'hidden'} mt-6 text-white text-2xl font-bold`}>
					Human Language <span className="font-light">→</span>
				</h1>
				<div className={`no-scrollbar overflow-x-auto ${toBlack ? 'flex' : 'hidden'} space-x-3 py-4 items-center`}>
					<LanguageCard lang="Indonesia" />
					<LanguageCard lang="English" />
				</div>
			</Container>
		</section>
	)
}

export default SkillSection
