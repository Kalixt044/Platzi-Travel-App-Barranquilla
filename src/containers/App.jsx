import { Nav } from "../components/Nav"
import { TabBar } from "../components/TabBar"
import { Hero } from "./Hero"
import { Suggestions } from "./Suggestions"
import { Featured } from "./Featured"
import { Faqs } from "./Faqs"
import { Footer } from "./Footer"

const App = () => {
  return (
    <>
      <Nav />
      <TabBar />
      <section className="w-full h-screen">
        <Hero />
        <Suggestions />
        <Featured />
        <Faqs />
      </section>
      <Footer />
    </>
  )
}

export { App }