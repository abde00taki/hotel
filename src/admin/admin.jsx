import axios from "axios";
import { useEffect, useState } from "react"
import Cards from "../component/Cards";
import { NavLink } from "react-router-dom";

export default function AddApartment() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(Number)
    const [image, setImage] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8888/products',
                { title, desc, price, image }
            );
            alert('apartment added : ' + res.data.title);
        } catch (error) {
            console.error('Erreur POST:', error);
        }
    };

    // hado dyal get apartment 
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
            <div className="row w-100">
                <div className="col-md-3 ">
                    <div className="sidebar  vh-100 w-25 text-break " style={{ position: "fixed" }}>
                        <h2 className="text-light text-center mt-3" >admin</h2>
                        <hr className="text-light" />
                        <div className="d-flex justify-content-center flex-column p-2">
                            <NavLink className="btn  W-100 mt-3" style={{backgroundColor: "pink"}}>POST APARTMENT</NavLink>
                            <NavLink className="btn btn-light W-100 mt-3" >DELETE AND APDATE</NavLink>
                            <img src="admin.png" alt="" />
                        </div>

                    </div>
                </div>
                <div className="product-container col-md-9 container">
                    <form action="" className="d-flex justify-content-center align-items-center vh-100 flex-column text-light " onSubmit={handleSubmit} >
                        <div className="post-container w-75 p-4 rounded-3">
                            <label  htmlFor="">
                                add title the apartment
                            </label>
                            <input
                                type="text"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                className="form-control mt-2"
                            />
                            <label htmlFor="">
                                add description
                            </label>
                            <input
                                type="text"
                                onChange={(e) => setDesc(e.target.value)}
                                value={desc}
                                className="form-control mt-2"
                            />
                            <label htmlFor="">
                                add price
                            </label>
                            <input
                                type="number"
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                                className="form-control mt-2"
                            />
                            <label htmlFor="">
                                add image
                            </label>
                            <input
                                type="text"
                                onChange={(e) => setImage(e.target.value)}
                                value={image}
                                className="form-control mt-2"
                            />
                            <div className="d-flex justify-content-center">
                                <button className="btn  mt-2 w-25 "  style={{backgroundColor: "pink"}} type="submit">add</button>
                            </div>
                        </div>
                    </form>
                    <hr />
                    <div className="apartment-container">

                        <div className="row w-100 ">
                            {products && products.map(product => (
                                <div className="col-md" key={product.id}>
                                    <Cards title={product.title} price={product.price} desc={product.desc} image={product.image} id={product.id} handleDelete={() => handleDelete(product.id)}
                                        context='admin' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}