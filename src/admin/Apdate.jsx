import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Update() {
    const { id } = useParams();
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(Number)
    const [image, setImage] = useState('')
    const [chenge, setChenge] = useState("post")


    useEffect(() => {
        axios
            .get(`http://localhost:8888/products/${id}`)
            .then((res) => {
                const product = res.data;
                setTitle(product.title);
                setDesc(product.desc);
                setPrice(product.price);
                setImage(product.image);
            })
            .catch((err) => {
                console.error(err);
                alert("Failed to load product data");
            });
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("desc", desc);
        formData.append("price", price);
        if (image instanceof File) {
            formData.append("image", image);
        }

        axios
            .put(`http://localhost:8888/products/${id}`, formData)
            .then((res) => {
                console.log("Updated:", res.data);
                alert("Product updated successfully!");
            })
            .catch((err) => {
                console.error(err);
                alert("Failed to update the product.");
            });
    };

    return (
        <>

            <div className="row w-100">
                <div className="col-md-3 ">
                    <div className="sidebar  vh-100 w-25 text-break " style={{ position: "fixed" }}>
                        <h2 className="text-light text-center mt-3" >admin</h2>
                        <hr className="text-light" />
                        <div className="d-flex justify-content-center flex-column p-2">
                            <NavLink to={'/admin'} className="btn btn-light W-100 mt-3 " >POST APARTMENT</NavLink>
                            <NavLink to={'/admin'+ chenge === 'delete'} className="btn btn-light W-100 mt-3" >DELETE AND APDATE</NavLink>
                            <NavLink className="btn btn-light W-100 mt-3" style={{ backgroundColor: "pink" }} >APDATE</NavLink>
                            <img src="/admin.png" alt="" />
                        </div>

                    </div>
                </div>
                <div className="product-container col-md-9 container">
                    <form action="" className="d-flex justify-content-center align-items-center vh-100 flex-column text-light " onSubmit={handleUpdate} >
                        <div className="post-container w-75 p-4 rounded-3">
                            <div className="d-flex justify-content-between">
                                <label style={{ alignContent: "end" }} htmlFor="">
                                    add title the apartment
                                </label>
                                <h3 className="update-title">UPDATE</h3>
                            </div>
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
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                                className="form-control mt-2"
                            />

                            <div className="d-flex justify-content-center">
                                <button className="btn  mt-2 w-25 " style={{ backgroundColor: "pink" }} type="submit">Updated</button>
                            </div>
                        </div>
                    </form>



                </div>
            </div>





        </>
    )
}