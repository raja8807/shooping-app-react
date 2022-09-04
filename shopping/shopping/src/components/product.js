import './product.css'
import { useState } from 'react';

import p1 from '../images/p1.png'

function Product(props) {

    const[price,setPrice] = useState(props.price)

    const applyOffer = ()=>{
        setPrice(Math.round(props.price - ((props.offer/100)*props.price)))
    }
    
    return(
        <div className='product'>
            <div className='product-image'>
                <img src={p1}/>
            </div>
            <p className='prod-name'>{props.name}</p>
            <p className='prod-rating'>&#9733; &#9733; &#9733; &#9733; &#9734;</p>
            <p className='prod-price'>Rs.{price}</p>

            <button className='offer-btn' onClick={applyOffer}>Apply {props.offer}% Offer</button>
        </div>
    )
}

export default Product;