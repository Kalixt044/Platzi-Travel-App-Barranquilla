import { useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { Home } from "../pages/Home"

const App = () => {
  const [theme, setTheme] = useState('Light')
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Home />
    </ThemeContext.Provider>
  )
}

export { App }