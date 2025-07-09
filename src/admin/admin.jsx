import axios from "axios";
import { useEffect, useState } from "react"
import Cards from "../component/Cards";
import { Link, NavLink } from "react-router-dom";
import Messages from "../pages/Messages";

export default function AddApartment() {
    const [chenge, setChenge] = useState("post")
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(Number)
    const [star, setStar] = useState(Number)
    const [image, setImage] = useState(null)



    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('desc', desc);
        formData.append('price', price);
        formData.append('star', star);
        formData.append('image', image); // هنا image خاصها تكون File

        axios.post('http://localhost:8888/products', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }

        })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
        alert('apartment added')
        setTitle("")
        setPrice("")
        setDesc("")
        setStar("")
        setImage("")
    };



    // hado dyal get apartment 
    const [products, setProducts] = useState([])

    // hada li cayjib l3adad dyal lmisajat 
    const [count, setCount] = useState(0);
    useEffect(() => {

        axios.get('http://localhost:8888/products')
            .then(res => {
                setProducts(res.data);

            });
        // hada li cayjib l3adad dyal lmisajat
        axios.get('http://localhost:8888/contact/count')
            .then(res => setCount(res.data.count));

    }, []);

    // hada li kay7eyed l3ada dyal lmisagat l9dam 
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8888/contact/count')
            .then(res => setCount(res.data.count));
    }, []);

    const handleShowMessages = () => {
        setChenge('message')
        axios.get('http://localhost:8888/contact/show')
            .then(res => {
                setMessages(res.data);
                if (setCount(0)) {
                    alert('hello world')
                }
            });
    };



    // hada dyal delete apartment 
    const handleDelete = (id) => {
        if (confirm('do you want delete product')) {
            axios.delete(`http://localhost:8888/products/${id}`)
                .then(() => {
                    setProducts(prevProducts => prevProducts.filter(p => p.id !== id));
                })
                .catch(err => console.error(err));
        }
    };

    // =============== hada validatio dyal password ============
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        if (password === " ") {
            setIsAuthenticated(true);
        } else {
            alert("Wrong password");
        }
    };


    return (
        <>
            {!isAuthenticated ? (
                <div className="row w-100 " style={{ backgroundColor: "rgb(185, 128, 238)" }} >
                    <div className="col-md-6">
                        <img className="w-100" src="password.png" alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className=" vh-100 d-flex flex-column justify-content-center align-items-center" >
                            <div style={{ borderRadius: "10px", boxShadow: "0 0 3px white", padding: "50px", backgroundColor: "rgb(0, 0, 0, 0.100)" }}>
                                <h2>Enter Admin Password</h2>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control w-100 mt-2"
                                />
                                <button className="btn btn-primary mt-2" onClick={handleLogin}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="row w-100">
                        <div className="col-md-3 ">
                            <div className="sidebar  vh-100 w-25 text-break " style={{ position: "fixed" }}>
                                <div className="d-flex justify-content-between">
                                    <h2 className="text-light mx-4 mt-3" >admin</h2>
                                    <div className="mt-4 mx-3">
                                        <NavLink
                                            onClick={handleShowMessages}
                                            className="bg-dark mt-4 text-white px-3 py-2 rounded"
                                        >
                                            <i className="bi bi-envelope-fill me-2"></i>
                                            <span>{count}</span>
                                        </NavLink>
                                    </div>
                                </div>
                                <hr className="text-light" />
                                <div className="d-flex justify-content-center flex-column p-2">

                                    <NavLink onClick={() => setChenge('post')} className="btn  W-100 mt-3" style={{ backgroundColor: chenge === 'post' ? "pink" : "white" }}>POST APARTMENT</NavLink>
                                    <NavLink onClick={() => setChenge('delete')} className="btn btn-light W-100 mt-3" style={{ backgroundColor: chenge === 'delete' ? "pink" : "white" }} >DELETE AND APDATE</NavLink>
                                    <NavLink onClick={() => setChenge('update')} className="btn btn-light W-100 mt-3" style={{ backgroundColor: chenge === 'update' ? "red" : "white" }} >APDATE</NavLink>

                                    {chenge === 'update' && (
                                        <p className="text-danger">plase choice apartmrnt</p>
                                    )}
                                    <img src="/admin.png" alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="product-container col-md-9 container">
                            <div className={chenge === "post" ? "" : "d-none"} >
                                <form
                                    onSubmit={handleSubmit}
                                    className="d-flex justify-content-center align-items-center vh-100 flex-column text-light"
                                >
                                    <div className="post-container w-75 p-4 rounded-3">
                                        <label>add title the apartment</label>
                                        <input
                                            type="text"
                                            onChange={(e) => setTitle(e.target.value)}
                                            value={title}
                                            className="form-control mt-2"
                                        />

                                        <label>add description</label>
                                        <input
                                            type="text"
                                            onChange={(e) => setDesc(e.target.value)}
                                            value={desc}
                                            className="form-control mt-2"
                                        />

                                        <label>add price</label>
                                        <input
                                            type="number"
                                            onChange={(e) => setPrice(e.target.value)}
                                            value={price}
                                            className="form-control mt-2"
                                        />
                                        <label>add star</label>
                                        <input
                                            type="number"
                                            onChange={(e) => setStar(e.target.value)}
                                            value={star}
                                            className="form-control mt-2"
                                        />

                                        <label>add image</label>
                                        <input
                                            type="file"
                                            onChange={(e) => setImage(e.target.files[0])}
                                            className="form-control mt-2"
                                        />

                                        <div className="d-flex justify-content-center">
                                            <button
                                                className="btn mt-2 w-25"
                                                style={{ backgroundColor: "pink" }}
                                                type="submit"
                                            >
                                                add
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>


                            <div className={chenge === "delete" || chenge === 'update' ? "" : "d-none"}>
                                <div className="apartment-container">

                                    <div className="row w-100 ">
                                        {products && products.map(product => (
                                            <div className="col-md" key={product.id}>
                                                <Cards title={product.title} price={product.price} desc={product.desc} star={product.star} image={product.image} id={product.id} handleDelete={() => handleDelete(product.id)}
                                                    context='admin' />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={chenge !== 'message' ? "d-none" : ""}>
                                <div className="vh-100">
                                    <Messages />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}