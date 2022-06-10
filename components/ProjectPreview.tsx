import React, { useEffect, useState } from "react"
import FrameworkIcons from "./FrameworkIcons"

interface ProjectPreviewProps {
	data: {
		projectName: string,
		projectImage: string,
		projectDesc: string,
		projectURL: string
	}
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ data }) => {
  const [closeProjectPreview, setCloseProjectPreview] = useState(false);
	const [closeOverlay, setCloseOverlay] = useState('');
	
	useEffect(() => {
		if(closeProjectPreview) {
			setTimeout(() => setCloseOverlay("hidden"), 400);
		}
	}, [closeProjectPreview]);

	return (
		<>
			<div className={`fixed transition-all ${closeOverlay} inset-0 bg-black/75 z-40`}>

				<div className={`fixed overflow-y-auto z-50 p-4 delay-200 transition-all duration-300 overflow-hidden ${closeProjectPreview ? '-left-20 w-0' : 'w-10/12 md:w-5/12'} inset-y-0 bg-red-600`}>
					<header>
						<div className={`w-full transition-all duration-100 ${closeProjectPreview && '-translate-x-full'} aspect-video bg-white mx-auto`}></div>
					</header>
					<article>
						<h1 className={`mt-4 transition-all ${closeProjectPreview && '-translate-x-full'} text-white font-mono font-bold text-xl md:text-2xl`}>{ data.projectName }</h1>
						<p className={`mt-4 transition-all ${closeProjectPreview && '-translate-x-full'} text-white md:text-lg font-light`}>{ data.projectDesc }</p>
						<div className={`flex transition-all duration-200 ${closeProjectPreview && '-translate-x-full' } items-center space-x-2 mt-6 bg-black`}>
							<FrameworkIcons srcIcon='/icons/github.svg' bg="bg-black" />
							<p className='border-l border-gray-100 px-2 font-mono text-white text-sm line-clamp-1'>{ data.projectName }</p>
						</div>
					</article>  
				</div>
				<div className='w-10/12 md:w-5/12 relative'>
					<div onClick={() => setCloseProjectPreview(!closeProjectPreview)} className='w-12 hover:bg-red-700 hover:text-white font-bold transition-colors duration-200 hover:shadow-red-600/60 hover:shadow-md aspect-square flex justify-center items-center bg-white text-gray-700 absolute top-2 -right-14'>
						X
					</div>
				</div>

			</div>
		</>
	)
}

export default ProjectPreview;
