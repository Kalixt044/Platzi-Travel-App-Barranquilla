const ScrollButton = ({type}) => {
  const directionClass = type === 'prev' ? "w-auto h-auto opacity-20 hover:opacity-60 absolute left-0 top-1/2 z-10" : "w-auto h-auto rotate-180 opacity-20 hover:opacity-60 absolute right-0 top-1/2 z-10"

  return (
    <button className={directionClass} type="button">
      <svg width="30" heigth="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path className="fill-current text-gray-700 dark:text-gray-50" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
      </svg>
    </button>
  )
}

export { ScrollButton }