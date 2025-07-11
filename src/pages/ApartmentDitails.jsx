import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";

export default function ApartmentDitails() {
  const [product, setProducts] = useState()
  const { id } = useParams();
  useEffect(() => {
    axios.get('http://localhost:8888/products/' + id)
      .then(res => {
        setProducts(res.data);

      });
  }, []);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar chow="nav" />
      <div className="card">
        <div>
          <h1>{product.title}</h1>
          <p>{product.desc}</p>
          <p>{product.price}</p>
          <img src={`http://localhost:8888/uploads/${product.image}`} alt={product.title} />
        </div>
      </div>
    </>
  )
}