import { Routes, Route, NavLink } from "react-router-dom";
import Card from "../component/Card";
import Image from "../component/Image";
import Apartment from "./Apartment";
import Badroom from "./Badroom";
import SwimingPool from "./SwimingPool";
import Footer from "../component/Footer";
import { useState } from "react";
import Slide from "../component/Slide";

export default function Home() {
    
    const [chenge, setChenge] =  useState(false);
    const [visibel, setVisibel] = useState('apartment');

     

    function chengeProduct() {
        setChenge(!chenge)
    }

    return (
        <div>
            <div className="homeContainer d-flex justify-content-center flex-column
            align-items-center text-light ">
                <div className="titre-and-paragraph">
                    <div className="btn-home">
                        <h2 className=" text-dark"><span className="textBtnHome">azilal</span>/ozoud</h2>
                    </div>
                    <h1 className="mt-3 ">HOTEL ABDERRAHMANE</h1>
                    <h5 className="mt-3">welcome to hotel abderrahmane evry day <br />
                        we have a lot of discounts
                    </h5>
                </div>
            </div>

            <section >
                <Slide />
            </section>


            <section className="container mt-4">
                <div className="row w-100">
                    <div className="  col mt-4 d-flex justify-content-end">
                        <Image image="badroom.jpg" />
                    </div>
                    <div className=" col mt-4">
                        <div className="back-img">
                            <div>
                            <h2 className="text-danger">apartment</h2>
                            <h5 className="mt-4 fs-3 ">this is our best apartment <br />
                                , it has air conditioning and <br />
                                many features and overlooks, <br />
                                the valley</h5>
                            <img className="img-none" src="rent.png" alt="" />
                        </div>
                        </div>
                    </div>
                    <div className=" col mt-4">
                        <div className="apartmentContainer">
                            <h3 className="apartment-ditai"><img src="bad.png" alt="" /> 2 BADROOM</h3>
                            <hr />
                            <h3 className="apartment-ditai mt-4 "><img src="kitchen.png" alt="" /> 1 KITCHEN</h3>
                            <hr />
                            <h3 className="apartment-ditai mt-4 "><img src="BATHROOM.png" alt="" /> 1 BATHROOM</h3>
                            <hr />
                            <h3 className="apartment-ditai mt-4"><img src="livenroom.png" alt="" /> 1 LIVENROOM</h3>
                            <hr />
                            <div>
                                <button className="btn btn-warning w-100">rent</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-4">
                <div className="containerApartment2 d-flex justify-content-center flex-column align-items-center ">
                    <h2 className="text-light mt-4">welcome to our apartment <br />
                        in my hotel <br /> hotel abderrahmane</h2>
                    <div className=" d-flex justify-content-center mt-3">
                        <video className="videos" controls src="hotel.mp4" type="video.mp4"></video>
                    </div>
                </div>
            </section>

            <section className="mt-4">
                <div className="d-flex justify-content-center">
                    <div>
                        <div className="row w-100  ">
                            <Card title="4 aparltment" desc="the best apartment" image="apartments.png" />
                            <Card title="6 badroom" desc="the best badroom" image="room.png" />
                            <Card title="2 swiming pool" desc="the best swiming pool" image="pisine.png" />
                        </div>
                    </div>
                </div>
            </section >


            <section className="product-hotel">
                <nav className="d-flex justify-content-center mt-4">
                    <div className="row w-100 mt-4">
                        <div className="col-md-4 d-flex justify-content-center mt-4">
                            <h3 className="text-danger">Our products</h3>
                        </div>
                        <div className="col-md-8 mt-4">
                            <ul className="d-flex list-inline mb-0">
                                <li className="mx-3 list-inline-item">
                                    <NavLink onClick={() => setVisibel('apartment')} className="nav-product nav-link" >Apartment</NavLink>
                                </li>
                                <li className="mx-4 list-inline-item">
                                    <NavLink onClick={() => setVisibel('room')} className="nav-product nav-link">rooms</NavLink>
                                </li>
                                <li className="mx-4 list-inline-item">
                                    <NavLink onClick={() => setVisibel('swiming')} className="nav-product nav-link">swiming pool</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className={visibel === 'apartment' ? "" : "d-none"}>
                    <Apartment ></Apartment>
                </div>
                <div className={visibel === 'room' ? "" : "d-none"}>
                    <Badroom />
                </div>
                <div className={visibel === 'swiming' ? "" : "d-none"}>
                    <SwimingPool />
                </div>
            </section>
            <Footer />
        </div>
    )
}