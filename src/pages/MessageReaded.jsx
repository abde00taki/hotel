import { useEffect, useState } from "react";
import CardMessage from "../component/CardMessage";
import axios from "axios";

export default function MessageReaded() {

    const [users, setUsers] = useState([]);
    
    useEffect(() => {

        axios.get('http://localhost:8888/contact/readed')
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
        <div className="row w-100">
            {users.map(user => (
                <div className="col-md-4" key={user.id}>
                    <CardMessage delete={() => handleDelete(user.id)} name={user.name} email={user.email} message={user.message} />
                </div>
            ))}
        </div>
    )
}