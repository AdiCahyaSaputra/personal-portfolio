type Props = {
  project: string,
  desc: string,
  link: string,
  img: string,
}

const ProjectCard: React.FC<Props> = ({ project, desc, link, img }) => {
  return (
    <div onClick={() => window.location.href = link} className="hover:scale-95 transition-all shrink-0 flex flex-col justify-end bg-black text-white w-64 aspect-video relative overflow-hidden group">
      <img src={img} className='absolute inset-0 opacity-0 group-hover:opacity-100' />
      <div className="relative z-10 group-hover:hidden">
        <h1 className="px-4 text-lg font-bold">{project}</h1>
        <p className="px-4 pb-4 text-sm font-light">{desc}</p>
      </div>
    </div>
  )
}

export default ProjectCard
