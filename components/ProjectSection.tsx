import React from 'react'
import FrameworkIcons from './FrameworkIcons'
import ProjectCard from './ProjectCard'

const ProjectSection: React.FC = () => {
	return (
		<>
			<section className='w-full relative py-12 z-30 backdrop-blur-sm min-h-screen bg-black/30 flex justify-center items-center'>
				<main className='container mx-auto p-2 h-full'>
					<div className='flex flex-col h-full justify-center items-center'>
						<h1 className='py-1.5 mb-4 w-max text-xl text-white font-bold border-b-2 border-white'>Current Skills</h1>
						<div className='flex justify-center items-center space-x-4'>
							<FrameworkIcons srcIcon='/icons/nextjs.png' bg="bg-white"/>
							<FrameworkIcons srcIcon='/icons/laravel.png' bg="bg-white" />
							<FrameworkIcons srcIcon='/icons/tailwind.svg' bg="bg-white"/>
						</div>
						<h1 className='py-1.5 mb-4 w-max text-xl text-white font-bold border-b-2 border-white mt-16'>My Latest Project</h1>
						<article className='w-full'>
							<ProjectCard />
							<ProjectCard />
							<ProjectCard />
						</article>
					</div>
				</main>
			</section>
		</>
	)
}

export default ProjectSection;
