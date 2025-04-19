import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { logoutUser, profile } from '../../connectionToBackend';
import Categories from '../pages/Categories';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InventoryIcon from '@mui/icons-material/Inventory';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ProductCategories from './ProductCategories';
import { useCart } from '../Context/CartContenxt';
import CancelIcon from '@mui/icons-material/Cancel';

const Nav = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const {cartCount} = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const fetchUser = async () => {
    try {
      const response = await profile()
      console.log("Fetched user:", response);
      if(response){
        setUser(response.user)
        localStorage.setItem("user", JSON.stringify(response.user)); // Store user data in local storage
      }
      
    } catch (error) {
      console.log("Error in fetching user data in Nav.jsx", error);
      return null; // Return null if there was an error
    }
  }
  useEffect(()=>{
    fetchUser()
  },[])

  const logout = async () =>{
    try{
      const repsonse =  await logoutUser()
      console.log("Logout response", repsonse)
      if(repsonse){
        navigate("/login")
        localStorage.removeItem("user")
        localStorage.removeItem("getToken")
      }
    }catch(error){
      console.log("Error in logging out", error)
      return null
    }
  }

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-blue-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 hidden md:block">
          dMarketPlace
        </Link>

        {/* Search Bar */}
        <div className="flex flex-grow max-w-xl w-full mx-4 my-2 sm:my-0 justify-center items-center">
          <form className="flex">
            <input
              type="search"
              placeholder="Search products, brands, and categories"
              className="flex-grow px-4 py-2 rounded-l bg-gray-100 border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
            >
              Search
            </button>
          </form>

          <Link to="/cart" className="flex lg:hidden ml-4">
          <ShoppingCartIcon className="text-blue-500" />{cartCount}
        </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-4 text-sm text-gray-700">
          {user? (
            <>
             <Link to="/profile" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
             <PersonIcon className="text-blue-500" /> {user?.name || "John Doe"}
            </Link>
             <Link to="/become-a-seller" className="hover:text-blue-600">Become a Seller</Link>
             <button onClick={logout} className="hover:text-red-600">Logout</button>
            </>
          ):(
            <>
            <Link to="/signin" className="hover:text-blue-600">Login</Link>
            <span>|</span>
            <Link to="/signup" className="hover:text-blue-600">Register</Link>
            <span>|</span>
            <Link to="/become-a-seller" className="hover:text-blue-600">Become a Seller</Link>
            </>
            
          )

          }
         
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="hidden lg:block">
          <ShoppingCartIcon className="text-blue-500" />{cartCount}
        </Link>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        // ref={menuRef}
        className={`lg:hidden fixed top-0 left-0 h-screen bg-white z-40 transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-70 shadow-md`}
      >
        <div className="p-6 space-y-4 text-gray-700">
          
          <div className='flex items-center justify-between mb-4'>
            <Link to="/" className="text-2xl font-bold text-blue-600">dMarketPlace</Link>
            <Link to="/cart" className="block hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
              <CancelIcon onClick={!toggleMenu} className="text-blue-500" />
            </Link>
          </div>

          <div className="flex flex-col space-y-2">
            
            <Link to="/"><ShoppingBagIcon className="text-blue-500"/>Shop</Link>
            <Link to="/orders"><InventoryIcon className="text-blue-500"/>Orders</Link>
            <Link to="/wishlist"><FavoriteIcon className="text-blue-500"/>WishList</Link>
          </div>

          <div>
            <ProductCategories/>
          </div>


          <div className="flex flex-col space-y-2 mt-4">
            {!user ?(
                <>
                <Link to="/signin" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Login</Link>
                <Link to="/signup" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Register</Link>
                </>
            )  :(
                <>
                <Link to="/profile" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
             <PersonIcon className="text-blue-500" /> {user?.name || "John Doe"}
            </Link>
            <Link to="/signup" className="hover:text-blue-600" onClick={logout}>Logout</Link>
                </>
            )          
          }
          

            
          </div>


          <div>
         
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
