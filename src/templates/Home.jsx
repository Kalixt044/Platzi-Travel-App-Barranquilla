import sanFrancisco from '../assets/img/sanFrancisco.jpg'

const Home = () => {
  return (
    <div>
      <div className="w-full h-3/4">
        <div className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center">
          <input className="outline-none px-4 py-2 rounded-full shadow-sm" type="search" placeholder='San Francisco'/>
          <button className="w-36 rounded-full bg-white text-xl text-primary font-semibold px-4 py-2 shadow-sm" type="button">Explore</button>
        </div>
        <div className="w-full h-full">
          <img src={sanFrancisco} alt="San Francisco" />
        </div>
      </div>
    </div>
  )
}

export { Home }