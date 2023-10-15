import React, { createContext, useState } from "react";
import { books } from "../mock-api";

export const ShopContext = createContext(null)

const getDefaultCartItems = () => {
    let cart = {}
    for (let i = 0; i < books.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCartItems())

    const addToCart = (bookId) => {
        setCartItems((prev) => ({...prev, [bookId]: prev[bookId] + 1}))
    }

    const removeFromCart = (bookId) => {
        setCartItems((prev) => ({...prev, [bookId]: prev[bookId] - 1}))
    }

    const deleteFromCart = (bookId) => {
        setCartItems((prev) => ({...prev, [bookId]: 0}))
    }

    const changeItemsAmount = (newAmount, itemId) => {
        setCartItems((prev) => ({prev, [itemId]: newAmount}))
    }

    const getTotalPrice = () => {
        let totalPrice = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemPrice = books.find((product) => product.id === Number(item))
                totalPrice += cartItems[item] * itemPrice.price
            }
        }
        return totalPrice
    }

    const ShopContextValue = {cartItems, addToCart, removeFromCart, deleteFromCart, changeItemsAmount, getTotalPrice}

    return <ShopContext.Provider value={ShopContextValue}>{props.children}</ShopContext.Provider>

}