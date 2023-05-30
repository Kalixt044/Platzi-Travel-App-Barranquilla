import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { NavBar } from "../containers/NavBar"
import { TabBar } from "../containers/TabBar"
import { Hero } from "../containers/Hero"
import { Suggestions } from "../containers/Suggestions"
import { Featured } from "../containers/Featured"
import { Faqs } from "../containers/Faqs"
import { Footer } from "../containers/Footer"

const Home = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={theme === 'Light' ? "w-full h-full" : "w-full h-full dark dark:bg-gray-800"}>
      <NavBar />
      <Hero />
      <Suggestions />
      <Featured />
      <Faqs />
      <Footer />
      <TabBar />
    </div>
  )
}

export { Home }