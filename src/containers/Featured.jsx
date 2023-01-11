import { Card } from "../components/Card"
import destinations from "../helpers/destinations.json"

const Featured = () => {
  const featured = destinations.filter(city => !!city.featured)
  return (
    <div id="Featured" className="px-6 h-auto w-full">
      <p className="Section-title pb-6">Featured Destinations</p>
      <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
        {featured.map(city => (
          <Card key={city.name} name={city.name} photo={city.photo} details={city.details} featured={true} />
        ))}
      </div>
    </div>
  )
}

export { Featured }