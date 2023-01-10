const Card = ({photo, name, description}) => {
  const cardBg = {
    backgroundImage: `url('./src/assets/img/${photo}.jpg')`
  }

  return (
    <div className="Card">
      <div style={cardBg}></div>
      <div>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export { Card }