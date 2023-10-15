import React, { useContext } from "react";
import {books} from '../mock-api'
import {ShopContext, ShopContextValue} from '../context/shop-context'


export const Product = (props) => {

    const {id, title, year, edition, publishing_house, price, img} = props.data

    const {addToCart, removeFromCart, deleteFromCart, cartItems, changeItemsAmount} = useContext(ShopContext)

    return (
        <div>
            <div className="card" key={id}>
                <img src={img} />
                <b>{title}</b>
                <p>{year} - {edition}</p>
                <p>{publishing_house}</p>
                <p>${price}</p>
                {cartItems[id] === 0 ?
                <button className="cart-btn" onClick={() => addToCart(id)}>add to cart</button>
                : <button className="cart-btn" onClick={() => deleteFromCart(id)}>delete from cart</button>}
                <div className="items-count">
                <button className="quantity-btn" onClick={() => removeFromCart(id)}>-</button>
                <input className="quantity" type="number" value={cartItems[id]} onChange={(e) => changeItemsAmount(Number(e.target.value), cartItems[id])} />
                <button className="quantity-btn" onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
            </div>
    )
}