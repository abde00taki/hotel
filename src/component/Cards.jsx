
import { Link} from "react-router-dom";

export default function Cards(props) {

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-header">
                    <div id={props.id} className="carousel slide" data-bs-touch="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={props.image} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={props.image} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={props.image} className="d-block w-100" alt="..."/>
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
                    <h2 > {props.title} </h2>
                    <p> {props.desc} </p>
                    <h3 className={props.price < 20000 ? "alert  alert-danger" : "bg-light"}> {props.price} HD</h3>

                </div>
                <div className="card-footer d-flex justify-content-center w-100">
                    {props.context !== 'admin' ? (<Link to={'/apartment/' + props.id} className="btn btn-primary"> rent </Link>):
                    (<button onClick={props.handleDelete} className="btn btn-danger"> delet </button>)}
                    
                    
                </div>
            </div>

        </>
    )
}
