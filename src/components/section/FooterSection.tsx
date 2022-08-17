import { useEffect, useRef, useState } from "react"
import Container from "../reusable/Container"

const link = {
	ig: 'https://www.instagram.com/adi.response/'
}

const FooterSection: React.FC = () => {
	const [toRight, setToRight] = useState('-translate-x-full')
	const [isEmailClicked, setIsEmailClicked] = useState(false)
	const containerRef = useRef<HTMLElement>(null)

	const options = { threshold: 0.5 }
	const handler: IntersectionObserverCallback = (entries) => {
		const [el] = entries
		if (el.isIntersecting) setToRight('translate-x-0')
	}

	const observer = new IntersectionObserver(handler, options)

	useEffect(() => {
		if (containerRef.current) observer.observe(containerRef.current)
		return () => {
			if (containerRef.current) observer.unobserve(containerRef.current)
		}
	}, [options, containerRef])

	return (
		<footer ref={containerRef} className="p-4 relative h-screen bg-black">
			<Container>
				<div className="relative w-4/12 overflow-hidden mt-10">
					<h1 className="pb-2 tracking-wide text-3xl text-white font-bold">
						Adics.
					</h1>
					<div className={`${toRight} bg-white transition-all absolute bottom-0 w-4/12 h-1.5`}></div>
				</div>
				<div className="mt-6 text-white">
					<p>Email: <span onClick={() => setIsEmailClicked(true)} className="text-blue-400 hover:text-blue-500">adics631@gmail.com</span></p>
					{isEmailClicked && (<p className="text-red-400 mb-3">Email can't be clicked!</p>)}
					<p>Instagram: <span onClick={() => window.location.href = link.ig} className="text-blue-400 hover:underline">@adi.response</span></p>
				</div>
				<p className="absolute bottom-4 left-4 font-light text-white">I don't have an idea to create the next section <br/>then i will end this here</p>
			</Container>
		</footer>
	)
}

export default FooterSection
