import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import FrameworkIcons from './FrameworkIcons';
import {useRouter} from 'next/router';

const BioSection: React.FC = () => {
	const [nameActive, setNameActive] = useState(false);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => setLoading(!loading), 200);
	}, []);

	return (
		<>
			<section className={`w-full h-screen bg-blue-800`}>
				<div className={`p-4 items-center container fixed z-20 w-full left-[50%] -translate-x-[50%] top-0 mx-auto flex flex-col justify-center`}>
					<div className={`mt-16 md:mt-10 w-6/12 sm:w-3/12`}>
						<Image src="/head.png" priority width={1024} height={1024} />
					</div>
					<div className={`overflow-hidden ${!loading && 'items-center'} flex justify-center flex-col`}>
						<button onClick={() => setNameActive(!nameActive)} className={`relative transition-all overflow-hidden ${loading && '-translate-x-full'} mt-12 px-2 h-max flex flex-col justify-end bg-red-600`}>
							<h1 className="text-xl py-4 px-8 md:py-2 md:px-4 md:text-lg font-bold text-white font-mono tracking-widest">
								Adi Cahya Saputra
							</h1>
							<div className={`flex justify-center items-center font-bold font-mono absolute h-full ${nameActive ? 'top-0' : '-top-full'} transition-all duration-500 inset-x-0 py-4 md:py-2 bg-white`}>
								Frontend Engineer
							</div>
						</button>
						<button onClick={() => router.push('https://github.com/AdiCahyaSaputra')} className={`group transition-all delay-75 ${loading && '-translate-x-full'} mt-4 bg-black flex items-center`}>
							<FrameworkIcons size={18} srcIcon='/icons/github.svg' bg="bg-black" priority={true}/>
							<p className='text-white group-hover:text-white/60 font-bold pr-3 text-sm'>Click Me</p>
						</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default BioSection;
