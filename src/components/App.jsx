import { Nav } from "./Nav"
import { TabBar } from "./TabBar"
import { Home } from "../templates/Home"
import { Suggestions } from "../templates/Suggestions"
import { Featured } from "../templates/Featured"
import { Footer } from "../templates/Footer"

const App = () => {
  return (
    <>
      <Nav />
      <TabBar />
      <section>
        <Home />
        <Suggestions />
        <Featured />
      </section>
      <Footer />
    </>
  )
}

export { App }