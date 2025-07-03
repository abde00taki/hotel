import { Link } from "react-router-dom";

export default function Cards(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-header">
                <img src={props.image} alt="" width="100%"/>
            </div>
            <div className="card-body">
                <h2> {props.title} </h2>
                <p> {props.desc} </p>
                <h3> {props.price} HD</h3>
            </div>
            <div className="card-footer">
                <Link to={'/apartment' + props.id} className="btn btn-primary">rent</Link>
            </div>
        </div>
    )
}