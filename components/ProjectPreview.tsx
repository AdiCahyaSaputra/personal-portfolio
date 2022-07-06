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
			<article className="fixed border border-dashed border-white/30 md:border-none flex md:flex-row flex-col w-8/12 md:w-6/12 md:aspect-video aspect-auto backdrop-blur-sm bg-black/20 z-40 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
				<div className="relative w-full md:w-6/12 h-full bg-white/60">
					<Image src={ context?.data.projectImage! } layout="fill" objectFit="cover" />
				</div>
				<div className="w-full md:w-6/12 h-full p-4 space-y-6 flex flex-col justify-between">
					<header>
						<h3 className="font-light tracking-widest uppercase text-white">Latest Project</h3>
						<div className="mt-4">
							<h1 className="text-xl font-medium transition-all text-white">{ context?.data.projectName }</h1>
							<p className="text-gray-300 text-sm mt-2 w-10/12 leading-snug">{ context?.data.projectDesc }</p>
						</div>
					</header>
					<a href="#" className="border border-gray-300/60 hover:-translate-y-2 transition-all w-max">
						<FrameworkIcons srcIcon="/icons/github.svg" priority={false} size={18} bg={'bg-black'}/>
					</a>
				</div>
			</article>
			<div onClick={() => setCloseProjectPreview(!closeProjectPreview)} className={`fixed transition-all ${closeOverlay} inset-0 bg-black/75 z-30`}></div>
		</>
	)
}

export default ProjectPreview;
