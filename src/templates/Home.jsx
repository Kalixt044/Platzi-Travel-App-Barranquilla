import { SearchBar } from '../components/SearchBar'
import sanFrancisco from '../assets/img/sanFrancisco.jpg'
import { Button } from '../components/Button'

const Home = () => {
  return (
    <div id="Home">
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

export { Home }