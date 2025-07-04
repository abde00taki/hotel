// import Navbar from './component/Navbar'

import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../component/Cards";
import { Link } from "react-router-dom";



export default function ApartmentPages() {

    const [products, setProducts] = useState([])
    useEffect(() => {

        axios.get('http://localhost:8888/products')
            .then(res => {
                setProducts(res.data);

            });
    }, []);

    const handleDelete = (id) => {
        if (confirm('do you want delete product')) {
            axios.delete(`http://localhost:8888/products/${id}`)
                .then(() => {
                    setProducts(prevProducts => prevProducts.filter(p => p.id !== id));
                })
                .catch(err => console.error(err));
        }
    };



    return (
        <>
            <div className="apartment-container">
                
                <div  className="row w-100 ">
                    {products && products.map(product => (
                        <div className="col-md" key={product.id}>
                            <Cards title={product.title} price={product.price} desc={product.desc} image={product.image} id={product.id} handleDelete={() => handleDelete(product.id)} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}