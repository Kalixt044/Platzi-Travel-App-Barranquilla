const Card = ({photo, name, description}) => {
  const cardBg = {
    backgroundImage: `url('./src/assets/img/${photo}.jpg')`
  }

  return (
    <div className="Card">
      <div className={`w-full h-3/5 rounded-t-lg bg-cover`} style={cardBg}></div>
      <div className="w-full h-2/5 rounded-b-lg p-4 bg-secondary">
        <p className="text-white font-bold text-lg">{name}</p>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  )
}

export { Card }