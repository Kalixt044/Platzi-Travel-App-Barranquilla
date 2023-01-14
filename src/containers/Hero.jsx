import { SearchBar } from '../components/SearchBar'
import { Button } from '../components/Button'

const Hero = () => {
  return (
    <div className="lg:mt-12" id="Hero">
      <div className="w-full h-3/4 relative">
        <div className="Hero">
          <SearchBar name="San Francisco"/>
          <div className="hidden h-auto w-full sm:flex pb-6">
            <p className="text-4xl ml-16 font-bold text-primary">Find more destinations</p>
          </div>
          <Button title="Explore" />
        </div>
        <div className="w-full h-full sm:h-72 lg:h-96 sm:bg-[url('/assets/img/sanFranciscoDesktop.webp')] sm:bg-cover sm:bg-center">
          <img className="sm:hidden" src="./assets/img/sanFrancisco.webp" alt="San Francisco" />
        </div>
      </div>
    </div>
  )
}

export { Hero }