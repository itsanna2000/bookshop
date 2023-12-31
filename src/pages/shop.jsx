import React from "react";
import {books} from '../mock-api'
import {Product} from '../components/product'
import '../components/product.css'

export const CardsContainer = () => {

    return (
        <div>

            <div className="cards-container">
            
                {books.map((product) => (
                   return <Product data={product} key={product.id} />
                ))}
            
            </div>
        
        </div>
    )
}
