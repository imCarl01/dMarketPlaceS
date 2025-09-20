import React from 'react'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import ProductList from '../components/ProductList'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import FeaturedCategories from '../components/FeaturedCategories'

const Home = () => {
  return (
    <div>
      <Nav/>
      <div className='mt-3'>
        {/* <Carousel/> */}
        <HeroSection/>
        <FeaturedCategories/>
      </div>
      <ProductList/>

      <Footer/>
    </div>
  )
}

export default Home