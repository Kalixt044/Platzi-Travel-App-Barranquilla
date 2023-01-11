import { Nav } from "../components/Nav"
import { TabBar } from "../components/TabBar"
import { Hero } from "../containers/Hero"
import { Suggestions } from "../containers/Suggestions"
import { Featured } from "../containers/Featured"
import { Faqs } from "../containers/Faqs"
import { Footer } from "../containers/Footer"

const Home = () => {
  return (
    <>
      <section className="w-full h-screen">
        <Nav />
        <TabBar />
        <Hero />
        <Suggestions />
        <Featured />
        <Faqs />
        <Footer />
      </section>
    </>
  )
}

export { Home }