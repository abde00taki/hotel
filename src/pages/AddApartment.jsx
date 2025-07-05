import axios from "axios";
import { useEffect, useState } from "react"
import Cards from "../component/Cards";

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
            <form action="" className="d-flex justify-content-center align-items-center vh-100 flex-column" onSubmit={handleSubmit} >
                <label htmlFor="">
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
                <div>
                    <button className="btn btn-primary mt-2 " type="submit">add</button>
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
        </>
    )
}