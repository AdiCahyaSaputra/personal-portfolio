type Props = {
	tech: string,
	desc: string
}

const TechStackCard: React.FC<Props> = ({ tech, desc }) => {
	return (
		<div className="col-span-6 md:col-span-3 space-x-2 p-4 bg-white flex">
			<div className="text-lg">
				<h3 className="font-bold">{tech}</h3>
				<p className="text-sm font-light">{desc}</p>
			</div>
		</div>
	)
}

export default TechStackCard
