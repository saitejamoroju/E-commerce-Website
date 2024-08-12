import React, { createContext, useState, useEffect } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getdefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0; 
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItem] = useState(getdefaultCart());

    const addToCart = (itemId) => {
        setCartItem(prev => {
            const newCart = { ...prev, [itemId]: prev[itemId] + 1 };
            return newCart;
        });
    }

    const removeCart = (itemId) => {
        setCartItem(prev => {
            const newCart = { ...prev, [itemId]: prev[itemId] - 1 };
            return newCart;
        });
    }

    // Log cartItem whenever it changes
    // useEffect(() => {
    //     console.log(cartItems);
    // }, [cartItems]);

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const i in cartItems){
            if(cartItems[i]>0){
                let itemInfo=all_product.find((product)=>product.id===Number(i))
                totalAmount+=itemInfo.new_price*cartItems[i];
            }
            
            
        }
        return totalAmount;
        console.log(totalAmount);
    }
    const getCartCount = () => {
        let uniqueProducts = 0;
        
        // Iterate over the entries in cartItems
        for (const [key, value] of Object.entries(cartItems)) {
            if (value > 0) {
                uniqueProducts += 1;  // Count each unique product
            }
        }
    
        return uniqueProducts;
    };

    const contextVal = {getCartCount, getTotalCartAmount, all_product, cartItems, addToCart, removeCart };

    return (
        <ShopContext.Provider value={contextVal}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
