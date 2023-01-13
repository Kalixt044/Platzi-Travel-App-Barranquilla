const ScrollButton = ({type, clickEvt}) => {
  const directionClass = type === 'left' ? "w-auto h-auto opacity-30 hover:opacity-60 absolute -left-10 top-32 z-10" : "w-auto h-auto rotate-180 opacity-30 hover:opacity-60 absolute -right-10 top-32 z-10"

  return (
    <button className={directionClass} onClick={clickEvt}>
      <svg width="30" heigth="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path className="fill-current text-gray-900 dark:text-gray-50" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
      </svg>
    </button>
  )
}

export { ScrollButton }