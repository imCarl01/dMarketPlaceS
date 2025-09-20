import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import ProductCategories from './components/ProductCategories';

const App = () => {
  return (
  <BrowserRouter>
  <ToastContainer/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="signup" element={<Register/>} />
        <Route path="signin" element={<Login/>} />
        <Route path="profile" element={<Profile/>} />
      <Route path="/categories" element={<ProductCategories />} />
        <Route path="/categories/:categoryName" element={<CategoryPage />} />
        <Route path="/cart" element={<Cart/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App