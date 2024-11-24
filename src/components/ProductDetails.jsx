import { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import Spinner from "./Spinner";
import NotFound from "../routes/notfound";

export default function ProductDetails() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3000/sporting_goods.json`)
            .then(response => response.json())
            .then(data => {
                setLoaded(true)
                // id is from url params
                // eslint-disable-next-line eqeqeq
                setProduct(data.filter(product => product.id == id)[0])
    })
    }, [id]);
    
    if (!loaded) {
        return <Spinner />
    }

    if (product === undefined) {
        return <NotFound/>
    }
    
    return (
        <div className="p-4 max-w-prose mx-auto">
            <button
                onClick={() => navigate(-1)}
                className="bg-indigo-300 p-2 my-6 rounded-lg shadow-md hover:bg-indigo-400"
            >
                Go back
            </button>
            <div className="bg-zinc-300 p-4 rounded-lg shadow-md">
                <p className="text-2xl font-bold">{product.name}</p>
                <p className="text-lg">{product.description}</p>
                <p className="text-xl font-semibold">{product.price} PLN</p>
            </div>
            <NavLink 
                to={`/buy/${id}`} 
                className="block mt-4 bg-green-300 p-2 rounded-lg shadow-md text-center hover:bg-green-400"
            >
                Buy now!
            </NavLink>
        </div>
    )
}