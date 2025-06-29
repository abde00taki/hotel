export default function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className=" row w-100 ">
                    <div className="d-flex justify-content-center">
                        <div className="col-md-4">
                            <div>
                                <img src="hotel-footer.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-4 mt-4 mt-75">
                            <h5 className="text-light">Menus</h5>
                            <hr className="text-light" />
                            <h6 className="text-light">Home</h6>
                            <h6 className="text-light">Apartments</h6>
                            <h6 className="text-light">Rooms</h6>
                            <h6 className="text-light">Contact us</h6>
                        </div>
                        <div className="col-md-4 mt-4 ">
                            <div className="d-flex justify-content-center ">
                                <div style={{ width: "400px" }}>
                                    <h5 className="text-light">Contacts</h5>
                                    <hr className="text-light" />
                                    <h6 className="text-light"> <img src="call.png" alt="" /> 05 254 254 554</h6>
                                    <h6 className="text-light"> <img src="email.png" alt="" /> email</h6>
                                    <h6 className="text-light"> <img src="location.png" alt="" /> adres</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}