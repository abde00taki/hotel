import axios from "axios";
import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function Cards(props) {

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-header">
                    <img src={props.image} alt="" width="100%" />
                </div>
                <div className="card-body">
                    <h2 > {props.title} </h2>
                    <p> {props.desc} </p>
                    <h3 className={props.price < 20000 ? "alert  alert-danger" : "bg-light"}> {props.price} HD</h3>
                    
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <Link to={'/apartment/' + props.id} className="btn btn-primary">rent</Link>
                    <button onClick={props.handleDelete} className="btn btn-danger">delete</button>
                </div>
            </div>
           
        </>
    )
}
