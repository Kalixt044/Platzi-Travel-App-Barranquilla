import { SearchBar } from '../components/SearchBar'
import { Button } from '../components/Button'

const Hero = () => {
  return (
    <div className="lg:mt-12" id="Hero">
      <div className="w-full h-3/4 relative">
        <div className="Hero">
          <SearchBar name="San Francisco"/>
          <div className="hidden h-auto w-full sm:flex pb-6 items-center justify-end">
        <p className="text-4xl font-bold text-primary">Find more destinations</p> 
        
      
      </div> 
      <div className="hidden h-auto w-full sm:flex pb-6 items-center justify-end">
        
      <Button rounded  title="Explore" />
     </div>
      </div>
      <div className="w-full h-full sm:h-72 lg:h-96 sm:bg-[url('/assets/img/sanFrancisco.jpg')] sm:bg-cover sm:bg-center">
          <img className="sm:hidden" src="./assets/img/sanFrancisco.jpg" alt="San Francisco" />
        </div>
      </div>
    </div>
  )
}

export { Hero }