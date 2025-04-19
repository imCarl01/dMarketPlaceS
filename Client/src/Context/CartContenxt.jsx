import React, { createContext, useContext, useState } from 'react'

// Create cart context
const CartContext = createContext()

export const useCart = ()=>useContext(CartContext)

export const CartProvider = ({children}) =>{
    const [cartItem,setCartItem] = useState([])

    const addToCart = (product) =>{
        const existingItem = cartItem.find((item)=> item.id === product.id)

        if(existingItem){
            setCartItem((prev)=>
                prev.map((item) => 
                    item.id === product.id 
            ? {...item, quantity: item.quantity + 1}: item))
        }else{
            setCartItem((prev) =>[...prev,{...product, quantity :1}])
        }
    };

    const cartCount = cartItem.reduce((acc, item) => acc + item.quantity, 0);

    return(
        <CartContext.Provider value={{cartItem,addToCart,cartCount}} >
            {children}
        </CartContext.Provider>
    )
}