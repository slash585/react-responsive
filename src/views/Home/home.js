import React from "react"
import HeroSection from "../../components/Hero/heroSection"
import Cards from '../../components/Cards/cards'
import Footer from "../../components/Footer/footer"
import '../../App.css'


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  )
}

export default Home
