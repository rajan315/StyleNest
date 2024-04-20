import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollection/NewCollections'
import Newslettes from '../Components/Newslettes/Newslettes'

const shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Newslettes/>
      
    </div>
  )
}

export default shop
