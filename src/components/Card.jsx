const Card = ({photo, name, description, isEven}) => {
  const cardBg = {
    backgroundImage: `url('./src/assets/img/${photo}.jpg')`
  }

  return (
    <div className="Card">
      <div className={`w-full h-3/5 rounded-t-lg bg-cover`} style={cardBg}></div>
      <div className={!!isEven ? "w-full h-2/5 rounded-b-lg p-4 bg-white" : "w-full h-2/5 rounded-b-lg p-4 bg-secondary"}>
        <p className={!!isEven ? "text-terciary font-bold text-lg" : "text-white font-bold text-lg"}>{name}</p>
        <p className={!!isEven ? "text-terciary text-sm" : "text-white text-sm"}>{description}</p>
      </div>
    </div>
  )
}

export { Card }