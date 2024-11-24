import { useEffect, useState } from "react"
import ProductsListElement from "./ProductsListElement"

export default function ProductList({category}) {
    const [unfilteredProducts, setUnfilteredProducts] = useState([])
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/sporting_goods.json')
        .then(response => response.json())
        .then(data => setUnfilteredProducts(data))
    }, [])
    useEffect(() => {
        setProducts(unfilteredProducts.filter(product => product.category === category))
    }, [category, unfilteredProducts])

    return <div className="flex flex-col w-1/2 mx-auto p-5">
        {products.map(product => ( 
            <ProductsListElement key={product.id} product={product} />
        ))}
    </div>
}