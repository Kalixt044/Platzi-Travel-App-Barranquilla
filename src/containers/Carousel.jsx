import { useRef } from 'react'
import { Card } from '../components/Card'
import { ScrollButton } from '../components/ScrollButton'
import destinations from '../helpers/destinations.json'

const Carousel = () => {
  const divRef = useRef()

  const handleScroll = (qty) => {
    divRef.current.scrollLeft(qty)
  }

  return (
    <div className="w-auto h-72 relative">
      <ScrollButton type="prev" onClick={handleScroll(-20)}/>
      <div ref={divRef} className="w-auto h-full flex items-center mt-6 overflow-x-auto overscroll-x-contain sm:scrollbar-hide z-5 space-x-6">
        {destinations.map(city => (
          <Card 
            key={city.photo}
            photo={city.photo}
            name={city.name}
            description={city.description}
          />
        ))}
      </div>
      <ScrollButton type="next" onClick={handleScroll(20)}/>
    </div>
  )
}

export { Carousel }