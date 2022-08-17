import Container from "../reusable/Container"
import ProjectCard from "../reusable/ProjectCard"

const link = {
	amf: 'https://auto-manage-files.vercel.app/',
	spotifyClone: 'https://github.com/AdiCahyaSaputra/spotify_clone',
	linktr: 'https://next-bio-ig.vercel.app/',
	gh: 'https://github.com/AdiCahyaSaputra'
}

const ProjectSection: React.FC = () => {
	return (
		<section className="px-4 py-10 min-h-screen bg-white">
			<Container>
				<h1 className="text-3xl text-black font-bold">Some Project</h1>
				<p className="font-light mt-1.5">That I've made while working in <span className="font-normal">programming hell</span></p>

				<div className="space-x-3 overflow-x-auto no-scrollbar flex items-center py-4">
					<ProjectCard link={link.amf} project="Auto Manage Files" desc="Manage your folder programmatically using Nodejs" />
					<ProjectCard link={link.spotifyClone} project="Spotify Clone" desc="Clone of spotify app build with nextjs and spotify API" />
					<ProjectCard link={link.linktr} project="Linktr Like Website" desc="For your instagram bio (like linktr) build with react and tailwindcss" />
				</div>

				<button onClick={() => window.location.href = link.gh} className="hover:text-white/60 transition-all py-4 px-8 bg-black text-white font-light">See More on <span className="font-bold">Github →</span></button>

				<h1 className="text-3xl mt-10 text-black font-bold">Blog</h1>
				<p className="font-light mt-1.5">Sharing about programming, education, and some random topic</p>

				<div className="mt-4 flex justify-center items-center w-64 aspect-video bg-black">
					<h1 className="text-white text-lg font-bold">Soon..</h1>
				</div>
			</Container>
		</section>
	)
}
export default ProjectSection
