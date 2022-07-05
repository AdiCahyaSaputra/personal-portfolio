import React, { useEffect, useState } from "react"
import FrameworkIcons from "./FrameworkIcons"
import { useProjectContext } from '../context/ProjectContext'
import Image from 'next/image'
import {useRouter} from "next/router"

const ProjectPreview: React.FC = () => {
  const [closeProjectPreview, setCloseProjectPreview] = useState(false);
	const [closeOverlay, setCloseOverlay] = useState('');
	const [loading, setLoading] = useState(true);

	const context = useProjectContext();
	const router = useRouter();

	useEffect(() => {
		if(closeProjectPreview) {
			setTimeout(() => {
				setCloseOverlay("hidden");
				context?.setOnPreview(false);
			}, 400);
		}
	}, [closeProjectPreview]);

	useEffect(() => {
		setTimeout(() => setLoading(false), 500);
	}, []);

	return (
		<>
			<div className={`fixed transition-all ${closeOverlay} inset-0 bg-black/75 z-40`}>

				<div className={`fixed overflow-y-auto z-50 p-4 delay-200 transition-all duration-300 overflow-hidden ${closeProjectPreview ? '-left-20 w-0' : 'w-10/12 md:w-4/12'} inset-y-0 bg-white/30 backdrop-blur-md`}>
					<header>
						<div className={`w-full flex justify-center items-center transition-all duration-100 ${closeProjectPreview && '-translate-x-full'} aspect-video bg-white ${loading && 'animate-pulse'} mx-auto`}>
							{ !loading && ( <Image src={context?.data.projectImage!} width={1280} height={720}/> ) }
						</div>
					</header>
					<article>
						<h1 className={`mt-4 ${loading && 'p-4 bg-white/60 animate-pulse'} ${closeProjectPreview && '-translate-x-full'} text-white font-mono font-bold text-xl md:text-2xl`}>{ !loading && context?.data.projectName }</h1>
						<p className={`${loading && 'p-2 mt-2 bg-gray-500 animate-pulse'}  ${closeProjectPreview && '-translate-x-full'} text-white md:text-lg font-light`}>{ !loading && context?.data.projectDesc }</p>
						<div onClick={() => router.push(context?.data.projectURL!)} className={`group flex w-max cursor-pointer ${loading && 'w-6/12'} duration-200 ${closeProjectPreview && '-translate-x-full' } items-center mt-6 bg-black`}>
							<FrameworkIcons priority={false} srcIcon='/icons/github.svg' bg="bg-black" size={18} />
							<p className={`group-hover:text-white/60 ${loading && 'p-2 bg-black animate-pulse'} pr-3 font-mono text-white text-sm line-clamp-1`}>{ !loading && 'Check On Github' }</p>
						</div>
					</article> 
				</div>

				<div onClick={() => setCloseProjectPreview(!closeProjectPreview)} className="absolute w-2/12 md:w-7/12 inset-y-0 top-0 right-0"></div>

			</div>
		</>
	)
}

export default ProjectPreview;
