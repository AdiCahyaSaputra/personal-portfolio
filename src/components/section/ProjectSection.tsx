import Container from "../reusable/Container"
import ProjectCard from "../reusable/ProjectCard"

const link = {
  web: {
    amf: 'https://auto-manage-files.vercel.app/',
    rental_mobil: 'https://rental-mobil-fe.vercel.app/',
    gh: 'https://github.com/AdiCahyaSaputra',
  },
  blog: {
    me: 'https://adics.hashnode.dev/',
    b1: {
      link: 'https://adics.hashnode.dev/using-useref-to-multiple-elements-in-react-js',
    },
    b2: {
      link: 'https://adics.hashnode.dev/apa-itu-internet'
    }
  }
}

const ProjectSection: React.FC = () => {
  return (
    <section className="px-4 py-10 min-h-screen bg-white">
      <Container>
        <h1 className="text-3xl text-black font-bold">Some Project</h1>
        <p className="font-light mt-1.5">That I've made while working in <span className="font-normal">programming hell</span></p>

        <div className="space-x-3 overflow-x-auto no-scrollbar flex items-center py-4">
          <ProjectCard link={link.web.amf} project="Auto Manage Files" desc="Manage your folder programmatically using Nodejs" img='/img/amf.jpg' />
          <ProjectCard link={link.web.rental_mobil} project="Rental Mobil" desc="The place to rent your car if you need emergency money" img='/img/rental_mobil.jpg' />
        </div>

        <div className="flex items-center space-x-2">
          <button onClick={() => window.location.href = link.web.gh} className="w-7/12 hover:text-white/60 transition-all p-4 bg-black text-white font-light">See More on <span className="font-bold">Github →</span></button>
          <button onClick={() => window.location.href = link.web.gh} className="w-5/12 hover:text-white/60 transition-all p-4 bg-black text-white font-light">Or <span className="font-bold">Youtube →</span></button>
        </div>

        <h1 className="text-3xl mt-10 text-black font-bold">Blog</h1>
        <p className="font-light mt-1.5">Sharing about programming, education, and some random topic</p>

        <div className="space-x-3 overflow-x-auto no-scrollbar flex items-center py-4">
          <ProjectCard link={link.blog.b1.link} project="React Hooks `useRef()`" desc="Using useRef() hooks to multiple elements in reactjs" img='/img/refmultiple.jpg' />
          <ProjectCard link={link.blog.b2.link} project="What is Internet?" desc="Learn what is internet and how it works" img='/img/whatisinternet.jpg' />
        </div>

        <button onClick={() => window.location.href = link.blog.me} className="hover:text-white/60 transition-all py-4 px-8 bg-black text-white font-light">See More on <span className="font-bold">Hashnode →</span></button>

      </Container>
    </section>
  )
}
export default ProjectSection
