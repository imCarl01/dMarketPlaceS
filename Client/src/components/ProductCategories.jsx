import React, { useEffect, useState } from 'react'
import { getAllProductCategories } from '../../utils/productApi'
import { Link } from 'react-router-dom'

const ProductCategories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

    const fetchAllCategories = async () => {
        try{
            const data = await getAllProductCategories()
            console.log("Categories", data)
            setCategories(data)
            setLoading(false)
        }catch(error){
            console.error("Error in getting categories", error)
            setLoading(false)
        }
    }
    useEffect(() => {
      fetchAllCategories()
    }, [])

    if(loading){
      return <p>Loading...</p>
    }
  return (
    <div >
      <h2>Product Categories</h2>
      <ul >
        {categories.map((category, index) => (
          <Link to={`/categories/${category}`} key={index}>
            <li key={index} style={{ textTransform: 'capitalize' }} className='mt-3'>
            {category}
          </li>
          </Link>

        ))}
      </ul>
    </div>
  )
}

export default ProductCategories