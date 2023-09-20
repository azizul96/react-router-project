import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className="md:flex justify-between px-10 p-5">
            <div className="text-center mb-5 text-2xl font-bold text-lime-700">
                <h1>Amaajon</h1>
            </div>
            <div className="flex justify-center items-center">
                <ul className=" flex items-center gap-5 text-lg font-semibold text-blue-700">
                    <li className="bg-lime-500 p- rounded-md px-3">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="bg-lime-500 p- rounded-md px-3">
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="bg-lime-500 p- rounded-md px-3">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;