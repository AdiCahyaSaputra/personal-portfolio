import React from 'react'
import { ProjectContextInterface, useProjectContext } from '../context/ProjectContext'
import Image from 'next/image'

const ProjectCard: React.FC<ProjectContextInterface['data']> = ({ projectName, projectImage, projectDesc, projectURL }) => {
	const context = useProjectContext();

	const onClickHandler = () => {
		context?.setProjectPreviewData({
			projectName, projectImage, projectDesc, projectURL
		});
		context?.setOnPreview(true);
	}

	return (
		<>
			<article onClick={onClickHandler} className='group p-3 w-full mx-auto flex items-center flex-col'>
				<div className='w-full flex justify-center items-center md:w-6/12 aspect-video bg-white'>
					<Image src={projectImage} width={1280} height={720}/>
				</div>
				<div className='p-2 md:w-6/12 group-hover:bg-red-600/80 group-hover:shadow-red-600/30 group-hover:shadow-md group-hover:backdrop-blur-md w-full text-center bg-red-600'>
					<p className="text-white font-light text-lg w-full">{ projectName }</p>
				</div>
			</article>
		</>
	)
}

export default ProjectCard;
