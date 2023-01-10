import { SearchBar } from '../components/SearchBar'
import { Button } from '../components/Button'
import sanFrancisco from '../assets/img/sanFrancisco.jpg'

const Hero = () => {
  return (
    <div id="Hero">
      <div className="w-full h-3/4">
        <div className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center">
          <SearchBar name="San Francisco"/>
          <Button title="Explore" />
        </div>
        <div className="w-full h-full">
          <img src={sanFrancisco} alt="San Francisco" />
        </div>
      </div>
    </div>
  )
}

export { Hero }