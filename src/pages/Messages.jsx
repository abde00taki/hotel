import { useEffect, useState } from "react"
import CardMessage from "../component/CardMessage";
import axios from "axios";
import MessageReaded from "./MessageReaded";

export default function Messages() {
    const [users, setUsers] = useState([]);
    const [chenge, setChenge] = useState("unreaded")

    useEffect(() => {

        axios.get('http://localhost:8888/contact')
            .then(res => {
                setUsers(res.data);

            });
    }, []);

    const handleDelete = (id) => {
        if (confirm('do you want delete product')) {
            axios.delete(`http://localhost:8888/contact/${id}`)
                .then(() => {
                    setUsers(prevProducts => prevProducts.filter(p => p.id !== id));
                })
                .catch(err => console.error(err));
        }
    };
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <button onClick={() => setChenge('readed')} className="btn btn-primary">
                        <i className="bi bi-check-circle-fill"></i>
                    </button>
                    <button onClick={() => setChenge('unreaded')} className="btn btn-primary">
                        <i className="bi bi-envelope-fill"></i>
                    </button>
                </div>

                <div className="row w-100">

                </div>
                <div className={chenge === 'unreaded' ? "" : "d-none"} >
                    {users.map(user => (
                        <div className="col-md-4" key={user.id}>
                            <CardMessage delete={() => handleDelete(user.id)} name={user.name} email={user.email} message={user.message} />
                        </div>
                    ))}
                </div>
                <div className={chenge === 'readed' ? "" : "d-none"} >
                    <MessageReaded />
                </div>
            </div>
        </>
    )
}