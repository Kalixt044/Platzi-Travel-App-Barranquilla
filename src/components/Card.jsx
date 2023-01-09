const Card = ({photo, name, description}) => {
  return (
    <div className="Card">
      <div className={`Card__photo bg-${photo}`}></div>
      <div className="Card__info">
        <p className="Card__info__name">{name}</p>
        <p className="Card__info__description">{description}</p>
      </div>
    </div>
  )
}

export { Card }