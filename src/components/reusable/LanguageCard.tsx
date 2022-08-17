type Props = {
	lang: string
}

const LanguageCard: React.FC<Props> = ({ lang }) => {
	return (
		<h1 className="text-lg p-4 bg-white text-black font-bold">{lang}</h1>
	)
}

export default LanguageCard
