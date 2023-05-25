import { Card } from "../components/Card"
import destinations from "../helpers/destinationsfeatu.json"

const Featured = () => {
  const featured = destinations.filter(city => !!city.featured)
  return (
    <div id="Featured" className="px-6 h-auto w-full dark:bg-gray-800">
      <p className="Section-title pb-6">Featured Destinations</p>
      <div className="Featured">
        {featured.map(city => (
          <Card key={city.name} name={city.name} photo={city.photo} details={city.details} featured={true} />
        ))}
      </div>
    </div>
  )
}

export { Featured }