import React, { useContext } from "react";
import { books } from "../mock-api";
import { ShopContext } from "../context/shop-context";
import { Product } from "../components/product";

export const Cart = () => {

    const {cartItems, getTotalPrice} = useContext(ShopContext)

    const totalPrice = getTotalPrice()

    return (
        
    <div className="cart-container">
        <h2>Your Cart</h2>
        
                <div className="cards-container">
                {books.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <Product data={product} />
                    }
                })}
                </div>
                
                {totalPrice > 0 ?
                <div className="total-price">
                    <h4>Total amount:</h4>
                    <p>${totalPrice}</p>
                </div>
                : <p>Your cart is empty!</p>}
    </div>
    )
}