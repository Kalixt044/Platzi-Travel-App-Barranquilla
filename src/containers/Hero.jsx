import { SearchBar } from '../components/SearchBar'
import { Button } from '../components/Button'

const Hero = () => {
  return (
    <div className="lg:mt-12" id="Hero">
      <div className="w-full h-3/4">
        <div className="Hero">
          <SearchBar name="San Francisco"/>
          <div className="hidden h-auto w-2/3 lg:flex pb-6">
            <p className="text-4xl ml-16 font-bold text-white">Find more destinations</p>
          </div>
          <Button title="Explore" />
        </div>
        <div className="w-full h-full lg:h-96 lg:bg-[url('./assets/img/sanFranciscoDesktop.jpg')] lg:bg-cover lg:bg-center">
          <img className="lg:hidden" src="./assets/img/sanFrancisco.jpg" alt="San Francisco" />
        </div>
      </div>
    </div>
  )
}

export { Hero }