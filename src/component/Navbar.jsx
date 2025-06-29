import { NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg  position-fixed w-100">
            <div className="container-fluid">
                
                <a className="navbar-brand mx-4 fs-3  text-light" href="#"> <img src="hotel.png" alt="" /> Hotel</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item ">
                            <a className="nav-link fs-5 mx-4 text-light " href="#">Home </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link fs-5 mx-4 text-light " href="#">Apartment </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  mx-4 fs-5 text-light" href="#">Rooms</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  fs-5 text-light" href="#">Contact us</a>
                        </li>
                       
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}