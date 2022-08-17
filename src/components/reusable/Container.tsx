type Props = {
	children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
	return (
		<div className="w-full md:w-10/12 lg:w-8/12 mx-auto">
			{children}
		</div>
	)
}

export default Container
