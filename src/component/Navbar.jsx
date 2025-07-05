import { Link, NavLink } from "react-router-dom";
import { CiLight } from "react-icons/ci";
import { MdNightlightRound } from "react-icons/md";
import { useState } from "react";

export default function Navbar(props) {
    const [darckMod, setDarckMod] = useState(false)


    return (
        <>
        {props.chow === "nav" && (
             <nav className="navbar navbar-expand-lg   position-fixed w-100" >
                <div className="container-fluid">

                    <a className="navbar-brand mx-4 fs-3  text-light" href="#"> <img src="hotel.png" alt="" /> Hotel</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item ">
                                <Link to='/' className="nav-link fs-5 mx-4 text-light " >Home </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to='/apartment' className="nav-link fs-5 mx-4 text-light " >Apartment </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  mx-4 fs-5 text-light" >Rooms</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  fs-5 text-light" >Contact us</Link>
                            </li>

                        </ul>

                        <button onClick={props.chengeLight} className='btn btn-warning'>
                            {darckMod && <MdNightlightRound />}
                            {!darckMod && <CiLight />}
                        </button>

                    </div>
                </div>
            </nav>
        ) }
           
        </>
    )
}