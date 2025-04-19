import React, { useEffect, useState } from 'react'
import ProductCategories from '../components/ProductCategories'
import { Link, useParams } from 'react-router-dom'
import { getSingleCategory } from '../../utils/productApi'
import Nav from '../components/Nav'
import { useCart } from '../Context/CartContenxt'
import { toast } from 'react-toastify'
const Categories = () => {
  const {categoryName}  = useParams()
  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(true)
  const {addToCart} = useCart()
  useEffect(()=>{
    
    const fetchSingleCategories = async()=>{

      try {
        const data = await getSingleCategory(categoryName)
        console.log("Fetched Products:", data)
        setProducts(data)
      } catch (error) {
        console.error("Error fetching category products:", error)
      } finally {
        setLoading(false)
      }
      }
      fetchSingleCategories();
  },[categoryName])

  if (loading) return <p>Loading...</p>;
  if (!products || products.length === 0 ) return <p>No product found in this category</p>;

  return (
    <div>
      <Nav/>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden p-4 hover:shadow-lg transition-shadow"
          >
            <Link to={`product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-60 object-contain mb-4"
              />
              <div className="mb-2 text-sm text-gray-500">{product.category}</div>
              <h2 className="text-lg font-semibold mb-1 line-clamp-2">
                {product.title}
              </h2>
            </Link>
      
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-green-600">
                ${product.price}
              </span>
              <div className="text-sm text-black">
                <button
                  className="p-3 bg-blue-500 font-semibold text-white"
                  onClick={(e) => {
                    e.preventDefault(); // prevents accidental bubbling to Link
                    addToCart(product);
                    toast.success("Added to cart", {
                      position: "top-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Categories