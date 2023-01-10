import { Card } from '../components/Card'
import destinations from '../helpers/destinations.json'

const Carroussel = () => {
  return (
    <div className="Carroussel">
      {destinations.map(city => (
        <Card 
          key={city.name}
          photo={city.photo}
          name={city.name}
          description={city.description}
        />
      ))}
    </div>
  )
}

export { Carroussel }