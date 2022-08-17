import { useEffect, useState } from "react"
import Logo from "../reusable/Logo"

const HeroSection: React.FC = () => {
	const [toRight, setToRight] = useState('-translate-x-full')
	const [toLight, setToLight] = useState('text-white/40')

	useEffect(() => {
		setTimeout(() => {
			setToRight('translate-x-0')
			setToLight('text-white/60')
		}, 400)
		return () => clearTimeout()
	}, [])

	return (
		<section className="select-none h-screen bg-black flex flex-col justify-center items-center">
			<Logo toRight={toRight} />
			<p className="text-white/40 mt-10 w-6/12 md:w-3/12 text-center">Just a <span className={`font-bold transition-all delay-300 ${toLight}`}>Fullstuck</span> software engineer from Indonesia</p>
		</section>
	)
}

export default HeroSection
