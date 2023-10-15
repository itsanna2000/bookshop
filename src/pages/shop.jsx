import React, { useState } from "react";
import {books} from '../mock-api'
import {Product} from '../components/product'
import '../components/product.css'

export const BookCard = () => {

    return (
        <div>

            <div className="cards-container">
            
                {books.map((product) => (
                    <Product data={product} key={product.id} />
                ))}
            
            </div>
        
        </div>
    )
}