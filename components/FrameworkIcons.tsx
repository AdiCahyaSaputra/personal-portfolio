import React from 'react'
import Image from 'next/image'

interface FrameworkIconsProps {
	srcIcon: string,
	bg: string
}

const FrameworkIcons: React.FC<FrameworkIconsProps> = ({ srcIcon, bg }) => {
	return (
		<>
			<div className={`w-10 h-10 flex ${bg} justify-center items-center p-2 shadow-md`}>
				<Image src={ srcIcon } width={30} height={30} />
			</div>
		</>
	)
}

export default FrameworkIcons;
