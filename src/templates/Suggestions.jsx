import { Card } from '../components/Card'
import destinations from '../helpers/destinations.json'

const Suggestions = () => {
  return (
    <div className="p-20" id="Suggestions">
      {destinations.map(city => (
        <Card 
          key={city.photo}
          photo={city.photo}
          name={city.name}
          description={city.description}
        />
      ))}
    </div>
  )
}

export { Suggestions }