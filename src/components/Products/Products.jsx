import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
    const [product, setProduct] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setProduct(data.products))
    },[])
    return (
        <div>
            <h1 className=" text-center mb-5 mt-10">All Products</h1>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 ">
                {
                    product.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;