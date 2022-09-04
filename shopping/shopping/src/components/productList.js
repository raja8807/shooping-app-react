import './productList.css'
import { useState } from 'react';

import Product from './product';
import Banner from './banner';

function ProductList() {
    const prodList = [
        {
            productName: "prod1",
            productPrice: 467,
            productOffer: 15
        },
        {
            productName: "prod2",
            productPrice: 135,
            productOffer: 12
        },
        {
            productName: "prod3",
            productPrice: 170,
            productOffer: 50
        },
        {
            productName: "prod4",
            productPrice: 250,
            productOffer: 10
        },
    ]

    const [products, setProducts] = useState([...prodList])

    function addProduct(newProduct){
        setProducts((prevProducts)=>{
            return [...prevProducts, newProduct]
        })
    }


    return (
        <div className='ProdList'>
            <Banner addProduct={addProduct}/>
            <div className='container'>
                <div className='product-wrapper'>
                    {
                        products.map((product) => {
                            return <Product ket={Math.random()} name={product.productName} price={product.productPrice} offer={product.productOffer} />
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default ProductList;