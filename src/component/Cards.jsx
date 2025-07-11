
import { Link } from "react-router-dom";
import HoverRating from "./HoverRating";

export default function Cards(props) {





    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="card mb-3  " style={{ width: "18rem", border: "none", boxShadow: "0 0 8px rgba(0, 0, 0, 0.37)" }}>
                    <div className="card-header">
                        <div id={props.id} className="carousel slide " data-bs-touch="false">
                            <div className="carousel-inner ">
                                <div className="carousel-item active rounded-3">
                                    <img src={`http://localhost:8888/uploads/${props.image}`} className="d-block w-100 rounded-3" alt={props.title} />
                                </div>
                                <div className="carousel-item rounded-3">
                                    <img src={`http://localhost:8888/uploads/${props.image}`} className="d-block w-100 rounded-3" alt={props.title} />
                                </div>
                                <div className="carousel-item rounded-3">
                                    <img src={`http://localhost:8888/uploads/${props.image}`} className="d-block w-100 rounded-3" alt={props.title} />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target={`#${props.id}`} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target={`#${props.id}`} data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className=" w-50 " >{props.title}</h5>
                            <h5 className={props.price < 4000 ? "text-danger" : ""} style={{ color: "orange", alignContent: "center" }} > {props.price} HD</h5>
                        </div>
                        <h6> {props.star}<img width="20px" src="star.png" alt="" /> </h6>
                           <HoverRating id={props.id} initialStar={props.star} />

                        <p> {props.desc} </p>

                        <div className="d-flex justify-content-center w-100">
                            {props.context !== 'admin' ? (<Link to={'/apartment/' + props.id} className="btn btn-warning w-75"> rent </Link>) :
                                (<div>
                                    <hr />
                                    <button onClick={props.handleDelete} className="btn w-100" style={{ backgroundColor: "pink" }}> delet </button>
                                    <Link to={'/update/' + props.id} onClick={props.handleUpdate} className="btn btn-warning w-100 mt-2" > update </Link>
                                </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
