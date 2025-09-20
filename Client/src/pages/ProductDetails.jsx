import React, { useEffect, useState } from "react";
import { getSingleProduct } from "../../utils/productApi";
import { Link, useParams } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CallIcon from '@mui/icons-material/Call';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Nav from "../components/Nav";
import { useCart } from "../Context/CartContenxt";
import { toast } from "react-toastify";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const {addToCart} = useCart()
  useEffect(() => {
    const fetchSingleProduct = async () => {
      const data = await getSingleProduct(id);
      setProduct(data);
      setLoading(false);
    };
    fetchSingleProduct();
  }, [id]);
  if (loading) return <p className="flex justify-center items-center h-screen">Loading...</p>;
  if (!product) return <p>Product not found</p>;
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-20">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-contain"
      />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600 my-2">{product.description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-xl font-semibold text-green-600">
          ₦{(product.price*1500).toLocaleString()} 
        </span>
        {/* <span className="text-yellow-500">⭐ {product.rating.rate} ({product.rating.count})</span> */}
      </div>

      <div className="flex justify-between items-center">
        <button className="p-3 bg-blue-500 mt-5 text-white font-bold hover:bg-blue-300" 
        onClick={(e)=>{
          e.preventDefault()
          addToCart(product);
          toast.success("Added to cart", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined, 
          })
        }} ><ShoppingCartIcon/> Add to Cart</button>
        <a href="tel:+2348028427637">
        <button  className="p-3 border-2 border-blue-500  mt-5 text-blue-500 font-bold hover:bg-blue-300"><CallIcon/> Contact Seller</button>
        </a>
        
      </div>

      <div className="mt-5 bg-gray-300 p-3">
        <ErrorOutlineIcon/>
        <p>For Safe and secure transcation, transact with dMarketPlace <Link to="" className="text-blue-700">Learn More</Link></p>
      </div>
    </div>
    </div>

  );
};

export default ProductDetails;
