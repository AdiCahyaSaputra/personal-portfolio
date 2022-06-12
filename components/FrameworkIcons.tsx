import React from 'react'
import Image from 'next/image'

interface FrameworkIconsProps {
	srcIcon: string,
	bg: string,
	size: number,
	priority: boolean
}

const FrameworkIcons: React.FC<FrameworkIconsProps> = ({ srcIcon, bg, size = 30, priority = false }) => {
	return (
		<>
			<div className={`w-10 h-10 flex ${bg} justify-center items-center p-2 shadow-md`}>
				<Image src={ srcIcon } width={size} height={size} priority={priority} />
			</div>
		</>
	)
}

export default FrameworkIcons;
