import React from 'react'
import Hero from '../components/Hero.jsx'
import LatestCollection from '../components/LatestCollection.jsx'
import BestSeller from '../components/BestSeller.jsx'

const home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
    </div>
  )
}

export default home