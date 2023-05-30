import { Card } from '../components/Card'
import { ScrollButton } from '../components/ScrollButton'
import destinations from '../helpers/destinations.json'

const Carousel = () => {
  
  const handleScroll = (qty) => {
    let slider = document.querySelector('#slider')

    qty < 0
    ?
      slider.scrollLeft -= 200
    :
    slider.scrollLeft += 200
  }

  return (
    <div className="w-auto h-72 relative">
      <ScrollButton type="left" clickEvt={() => handleScroll(-200)} />
      <div id="slider" className="w-auto h-full flex items-center mt-6 overflow-x-auto overscroll-x-contain scroll-smooth scrollbar-hide sm:scrollbar-hide z-5 space-x-4">
        {destinations.map(city => (
          <Card 
            key={city.photo}
            photo={city.photo}
            name={city.name}
            description={city.description}
          />
        ))}
      </div>
      <ScrollButton type="right" clickEvt={() => handleScroll(200)} />
    </div>
  )
}

export { Carousel }