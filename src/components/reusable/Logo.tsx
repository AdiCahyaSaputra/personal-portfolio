type Props = {
	toRight: string
}

const Logo: React.FC<Props> = ({ toRight }) => {
	return (
		<div className="relative overflow-hidden">
			<h1 className="pb-2 tracking-wide text-5xl text-white font-bold">
				Adics.
			</h1>
			<div className={`${toRight} bg-white transition-all absolute bottom-0 w-4/12 h-1.5`}></div>
		</div>
	)
}

export default Logo
