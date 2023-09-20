import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Card = () => {
    const cardData = useLoaderData()
    return (
        <div className="px-10">
            <div className=" border-2 border-green-600  p-3 rounded-lg text-center">
                <div className="flex justify-center mb-5">
                    <img className="h-52 w-fit rounded-md"  src={cardData.images[0]} alt="" />
                </div>
                <h1 className=" text-xl font-bold mb-5">{cardData.title}</h1>
                <p className="mb-5">{cardData.description}</p>
                <div>
                    <p className="text-xl mb-2">Brand: {cardData.brand}</p>
                    <p className="text-xl mb-2">Price: ${cardData.price}</p>
                </div>
                <div className="mt-5">
                    <Link to={`/products/${cardData.id}`}>
                        <button className="py-3 px-5 bg-lime-500 rounded-lg font-bold">Add to Card</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;