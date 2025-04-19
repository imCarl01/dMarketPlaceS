import React from 'react'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import ProductList from '../components/ProductList'

const Home = () => {
  return (
    <div>
      <Nav/>
      <div className='mt-3 p-3'>
        <Carousel/>
      </div>
      <ProductList/>
    </div>
  )
}

export default Home