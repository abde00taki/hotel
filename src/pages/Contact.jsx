import { useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";


export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8888/contact", {
            name: name,
            email: email,
            message: message,
        })
            .then((res) => {
                console.log("Response:", res.data);
                alert("Message sent!");
            })
            .catch((err) => {
                console.error(err);
                alert("Something went wrong.");
            });
    };

    return (
        <>
            <Navbar chow="nav" ></Navbar>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">full name</label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="">email</label>
                    <input type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="">your message</label>
                    <textarea className="form-control"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        name="" rows={5} cols={50} id=""></textarea>

                       <div>
                         <button className="btn btn-primary" type="submit">send</button>
                       </div>
                </form>
            </div>
         
        </>
    )
}