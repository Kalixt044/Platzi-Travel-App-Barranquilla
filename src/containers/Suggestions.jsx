import { Carroussel } from "../components/Carroussel"
import { Carousel } from "./Carousel"

const Suggestions = () => {
  return (
    <div className="p-6 dark:bg-gray-800" id="Suggestions">
      <p className="Section-title">Suggested</p>
      <Carousel />
    </div>
  )
}

export { Suggestions }