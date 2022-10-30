type Props = {
  tech: string,
  style: {
    text: string,
    bg: string,
    img: string,
    border: string
  }
}

const TechStackCard: React.FC<Props> = ({ tech, style }) => {
  return (
    <div className={`col-span-6 ${style.border} md:col-span-3 border-2 space-x-2 p-4 ${style.bg} flex`}>
      <div className="text-lg space-y-2 md:flex md:space-y-0 md:items-center md:space-x-2">
        <div className="w-6">
          <img alt='next' src={style.img} />
        </div>
        <h3 className={`font-bold ${style.text}`}>{tech}</h3>
      </div>
    </div>
  )
}

export default TechStackCard
