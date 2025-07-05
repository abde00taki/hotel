// import Navbar from './component/Navbar'

import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../component/Cards";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";



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
        <Navbar  chow="nav" />
        <div className="d-flex justify-content-center align-items-center " style={{height: "50vh", backgroundImage: "  linear-gradient(rgba(0, 0, 0, 0.356)), url(apartmentpage.jpg)"}}>
            <h2 className="text-light" >welcome to our apartment in my hotel</h2>
        </div>
            <div className="container d-flex justify-content-center apartment-container" style={{marginTop: "50px"}}>

                <div className="row w-100 ">
                    {products && products.map(product => (
                        <div className="col-md" key={product.id}>
                            <Cards title={product.title} price={product.price} desc={product.desc}
                                image={product.image} id={product.id}
                                handleDelete={() => handleDelete(product.id)} context='user' />
                        </div>
                    ))}
                </div>
            </div>
           
            <Footer />
        </>
    )
}