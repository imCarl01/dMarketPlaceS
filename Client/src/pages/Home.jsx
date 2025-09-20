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
              <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trending Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Order the trending products in the market
          </p>
        </div>
      <ProductList/>

      <Footer/>
    </div>
  )
}

export default Home