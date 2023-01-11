import { SearchBar } from '../components/SearchBar'
import { Button } from '../components/Button'
import sanFrancisco from '../assets/img/sanFrancisco.jpg'

const Hero = () => {
  return (
    <div id="Hero">
      <div className="w-full h-3/4">
        <div className="w-full h-auto flex flex-col absolute space-y-96 py-4 items-center lg:space-y-0 lg:justify-start lg:items-start lg:pt-48">
          <SearchBar name="San Francisco"/>
          <div className="hidden h-auto w-2/3 lg:flex pb-6">
            <p className="text-4xl ml-16 font-bold text-white">Find more destinations</p>
          </div>
          <Button title="Explore" />
        </div>
        <div className="w-full h-full lg:h-96 lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center">
          <img className="lg:hidden" src={sanFrancisco} alt="San Francisco" />
        </div>
      </div>
    </div>
  )
}

export { Hero }