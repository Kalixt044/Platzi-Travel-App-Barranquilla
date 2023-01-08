import { Nav } from "../components/Nav"
import { TabBar } from "../components/TabBar"
import { Home } from "./Home"
import { Suggestions } from "./Suggestions"
import { Featured } from "./Featured"
import { Footer } from "./Footer"

const App = () => {
  return (
    <>
      <Nav />
      <TabBar />
      <section className="w-full h-screen">
        <Home />
        <Suggestions />
        <Featured />
      </section>
      <Footer />
    </>
  )
}

export { App }