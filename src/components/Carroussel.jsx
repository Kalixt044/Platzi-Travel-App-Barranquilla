import { Card } from '../components/Card'
import destinations from '../helpers/destinations.json'

const Carroussel = () => {
  return (
    <div className="Carroussel">
      {destinations.map(city => (
        <Card 
          key={city.id}
          photo={city.photo}
          name={city.name}
          description={city.description}
          isEven={
            city.id % 2 === 0 ? true : false
          }
        />
      ))}
    </div>
  )
}

export { Carroussel }