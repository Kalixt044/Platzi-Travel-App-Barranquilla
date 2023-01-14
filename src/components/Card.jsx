const Card = ({photo, name, description, featured, details}) => {
  const cardBg = {
    backgroundImage: `url('./assets/img/${photo}.webp')`
  }

  if (!featured) {
    return (
      <div className="Card">
        <div style={cardBg}></div>
        <div>
          <p>{name}</p>
          <p>{description}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="Card__featured" style={cardBg}>
        <p>{name}</p>
        <p>{details}</p>
      </div>
    )
  }
}

export { Card }