import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../utils/productApi";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useCart } from "../Context/CartContenxt";
import { toast } from 'react-toastify';
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // for addting to cart 
  const {addToCart} = useCart()
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getAllProduct();
        setProducts(data);
      } catch (error) {
        setError(error.message || "Something Went Wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  if (loading) return <p className="flex justify-center items-center max-h-screen">Loading.....</p>;
  if (error) return <p>Error:{error}</p>;


  return (
   
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
          ₦{(product.price*1500).toLocaleString()}
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
  

  );
};

export default ProductList;
