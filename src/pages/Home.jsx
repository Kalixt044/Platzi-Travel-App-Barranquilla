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

export { Home }