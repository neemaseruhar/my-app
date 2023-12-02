import {  useState } from "react"

import { useFetch } from "../hooks/useFetch"


export const ProductLists = () => {


const [url,setUrl] = useState('http://localhost:8000/products')

 const {data : products, loading}  =  useFetch(url,{component: 'abcd'})

    return(
      
        <section>
            <div>
                <button onClick={() => setUrl('http://localhost:8000/products')}>All Items</button>
                <button onClick={() => setUrl('http://localhost:8000/products?in_stock=true')}>Instock</button>
            </div>
            {loading && <p>loading products.....</p>}
            {products && products.map((product) => {
                return (
                    <div key={product.id}>
                        <p>{product.id}</p>
                        <p>{product.name}</p>
                        <p>Rs {product.price}</p>
                        <p>{product.in_stock ? 'instock' : 'unavailable'}</p>
                        <p>_____________________________________</p>
                    </div>
                )
            })}
        </section>
    )
}