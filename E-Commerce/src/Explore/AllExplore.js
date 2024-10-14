import React from 'react'
import Top from '../Top'
import ExploreBanner from './ExploreBanner'
import ExploreItem from './ExploreItem'
import ExploreAction from './ExploreAction'
import Footer from '../Footer'
import { CartProvider} from "react-use-cart";

const AllExplore = () => {
  return (
    <CartProvider>
      <Top/>
      <ExploreBanner/>
      <ExploreItem/>
      <ExploreAction/>
      <Footer/>
    </CartProvider>
  )
}

export default AllExplore
