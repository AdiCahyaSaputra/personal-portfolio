import React, {useState} from 'react'
import Image from 'next/image'

const BioSection: React.FC = () => {
	const [nameActive, setNameActive] = useState(false);

	return (
		<>
			<section className='w-full h-screen bg-blue-900'>
				<div className="container fixed z-20 w-full left-[50%] -translate-x-[50%] top-0 mx-auto p-4 flex flex-col justify-center items-center">
					<div className="mt-16 w-10/12 md:w-6/12">
						<Image src="/head.png" priority width={1024} height={1024} />
					</div>
					<button onClick={() => setNameActive(!nameActive)} className='relative overflow-hidden mt-12 px-2 h-16 flex flex-col justify-end bg-red-600'>
						<h1 className="text-xl py-4 px-8 md:text-2xl font-bold text-white font-mono tracking-widest">
							Adi Cahya Saputra
						</h1>
						<div className={`flex justify-center items-center font-bold font-mono absolute h-full ${nameActive ? 'top-0' : '-top-full'} transition-all duration-500 inset-x-0 py-4 bg-white`}>
							Frontend Engineer
						</div>
					</button>
				</div>
			</section>
		</>
	)
}

export default BioSection;
