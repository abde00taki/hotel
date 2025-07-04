import axios from "axios";
import { useState } from "react"

export default function AddApartment() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(Number)
     const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8888/products', 
      {title, desc, price}
        );
      alert('apartment added : ' + res.data.title);
    } catch (error) {
      console.error('Erreur POST:', error);
    }
  };
    return (
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
            <div>
                <button className="btn btn-primary mt-2 " type="submit">add</button>
            </div>
        </form>
    )
}