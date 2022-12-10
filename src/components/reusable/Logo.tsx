type Props = {
  toRight: string,
  textSize?: string
  barHeight?: string
}

const Logo: React.FC<Props> = ({ toRight, textSize, barHeight }) => {
  return (
    <div className="relative overflow-hidden">
      <h1 className={`pb-2 tracking-wide ${textSize || 'text-5xl'} text-white font-bold`}>
        <span className="relative">
          Ad
          <div className={`${toRight} bg-white transition-all absolute -bottom-1 inset-x-0 ${barHeight || 'h-1.5'}`}></div>
        </span>ics.
      </h1>
    </div>
  )
}

export default Logo
