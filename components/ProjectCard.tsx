import React from 'react'

const ProjectCard: React.FC = () => {
	return (
		<>
			<article className='p-3 w-full mx-auto flex justify-center items-center flex-col'>
				<div className='w-full md:w-6/12 aspect-video bg-white'></div>
				<div className='p-2 md:w-6/12 w-full text-center bg-blue-600'>
					<a href="#" className="text-white font-light text-lg w-full">Link To Github Project</a>
				</div>
			</article>
		</>
	)
}

export default ProjectCard;
