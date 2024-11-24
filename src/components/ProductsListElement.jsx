import { useNavigate } from "react-router-dom"

export default function ProductsListElement({product}) {
    const navigate = useNavigate();

    return (
        <button
        onClick={() => navigate(`/products/${product.category}/${product.id}`)}
        className='flex flex-col bg-zinc-100 p-2 m-2 rounded-lg shadow-md flex-1'
        >
            {/* <img src={product.image} alt={product.name} className='rounded-md' /> if I ever have the time to put some photos they could live here  */}
            <h2 className='text-xl font-semibold'>{product.name}</h2>
            <p className='text'>{product.price} PLN</p>
        </button>
    )
}