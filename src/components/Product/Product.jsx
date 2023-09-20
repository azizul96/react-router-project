/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Product = ({product}) => {
    const {id, images,title,brand,price } = product
    console.log(product);
    return (
        <div>
            <div className=" border-2 border-green-600  p-3 rounded-lg text-center">
                <div className="flex justify-center mb-5">
                    <img className="h-52 w-fit rounded-md"  src={images[0]} alt="" />
                </div>
                <h1 className=" text-xl font-bold mb-5">{title}</h1>
                <div>
                    <p className="text-xl mb-2">Brand: {brand}</p>
                    <p className="text-xl mb-2">Price: ${price}</p>
                </div>
                <div className="mt-5">
                    <Link to={`/products/${id}`}>
                        <button className="py-3 px-5 bg-lime-500 rounded-lg font-bold">Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;