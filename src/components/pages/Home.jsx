import React from 'react'
import HeroSection from '../HeroSection'
import BestSelling from '../BestSelling'
import Header from '../Header'
import Footer from '../Footer'
import ExclusiveOffersection from '../ExclusiveOffersection'
import AccessoriesCard from '../AccessoriesCard'
import FeedbackSection from '../FeedbackSection'

const Home = () => {
  return (
    <div>
       <Header />
      <HeroSection />
      <BestSelling />
      <ExclusiveOffersection />
      <AccessoriesCard />
      <FeedbackSection />
      <Footer />
    </div>
  )
}

export default Home
