import React from 'react'
import { useProjectContext } from '../context/ProjectContext'
import Image from 'next/image'

interface ProjectCardProps {
	projectName: string,
	projectImage: string,
	projectDesc: string,
	projectURL: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, projectImage, projectDesc, projectURL }) => {
	const context = useProjectContext();

	const onClickHandler = () => {
		context?.setProjectPreviewData({
			projectName, projectImage, projectDesc, projectURL
		});
		context?.setOnPreview(true);
	}

	return (
		<>
			<article onClick={onClickHandler} className='group p-3 w-full md:w-6/12 lg:w-4/12 mx-auto flex items-center flex-col'>
				<div className='w-full flex overflow-hidden justify-center items-center aspect-video bg-white'>
					<Image src={projectImage} width={1280} height={720} className="hover:scale-110 transition-all"/>
				</div>
				<div className='p-2 cursor-pointer group-hover:bg-black/80 group-hover:shadow-black-600/30 group-hover:shadow-md group-hover:backdrop-blur-md w-full text-center bg-black'>
					<p className="text-white hover:-translate-y-1 transition-all font-light text-lg w-full">{ projectName }</p>
				</div>
			</article>
		</>
	)
}

export default ProjectCard;
