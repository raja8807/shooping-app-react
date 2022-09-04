import React from 'react';
import './banner.css'
import { useState } from 'react';

function Banner(props){

    const[newProd , setNewProd] = useState({
        productName : "",
        productPrice : "",
        productOffer : ""
    })

    function nameHandler(event){
        // console.log(event.target.value);
        setNewProd((prevProd)=>{
            return {...prevProd , productName:event.target.value}
        })
    }
    function priceHandler(event){
        // console.log(event.target.value);
        setNewProd((prevProd)=>{
            return {...prevProd , productPrice:event.target.value}
        })
    }
    function offerHandler(event){
        // console.log(event.target.value);
        setNewProd((prevProd)=>{
            return {...prevProd , productOffer:event.target.value}
        })
    }

    function createProduct(event){
        event.preventDefault()
        // console.log(newProd)

        props.addProduct(newProd)

        setNewProd({
            productName : "",
            productPrice : "",
            productOffer : ""
        })
    }

    return <div className='banner'> 
    <div className='container'>
        <form onSubmit={createProduct}>
            <label>New Product Name</label><input type="text" onChange={nameHandler} value={newProd.productName}/> <br/>
            <label>New Product Price</label><input type="number" onChange={priceHandler} value={newProd.productPrice}/> <br/>
            <label>New Product Offer</label><input type="number"onChange={offerHandler} value={newProd.productOffer}/> <br/>
            <input type="submit"/>
        </form>
    </div>
    </div>
}

export default Banner;