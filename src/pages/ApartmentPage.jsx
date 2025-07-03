// import Navbar from './component/Navbar'

import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../component/Cards";


export default function ApartmentPages() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8888/products')
            .then(res => {
                setProducts(res.data);

            });
    }, []);


    return (
        <div className="row w-100">
            {products.map(product => (
                <div className="col-md" key={product.id}>
                    <Cards title={product.title} price={product.price} desc={product.desc} image={product.image} id={product.id} />
                </div>
            ))}
        </div>
    )
}