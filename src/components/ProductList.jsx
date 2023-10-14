import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import { useParams } from 'react-router-dom';

const ProductList = () => {
    let {catId} = useParams()
    const [products, setProducts] = useState([])

    const fetchData = () => {
        axios.get(`https://orca-app-jhg4l.ondigitalocean.app/api/products/cat/${catId}`)
            .then(response => setProducts(response.data.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData()
    }, [catId])

    return (
        <div>
            <h2 className='text-center'>Product List</h2>
            <div class="row">

                {
                    products.map((product) => <Product data={product} />)
                }
            </div>
        </div>
    )
}
export default ProductList;