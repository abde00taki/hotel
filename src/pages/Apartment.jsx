export default function Apartment() {
    return (
        <div className="row w-100 d-flex justify-content-center mt-4">
            <div className="col-md-3 mt-4">
                <div className="hotel-peoducts-ditails  ">
                    <h3 className="apartment-ditai"><img src="bad.png" alt="" /> 2 BADROOM</h3>
                    <hr />
                    <h3 className="apartment-ditai mt-4 "><img src="kitchen.png" alt="" /> 1 KITCHEN</h3>
                    <hr />
                    <h3 className="apartment-ditai mt-4 "><img src="BATHROOM.png" alt="" /> 1 BATHROOM</h3>
                    <hr />
                    <h3 className="apartment-ditai mt-4"><img src="livenroom.png" alt="" /> 1 LIVENROOM</h3>


                </div>
            </div>
            <div className="col-md-5 d-flex justify-content-center mt-4">
                <img className="" width="75%" height="75%" src="apartment.jpeg" alt="" />
            </div>
            <div className="col-md-3">
                <div className=" d-flex justify-content-center mt-4">
                <div>
                    <h2 className="text-danger">apartment</h2>
                    <h5 className="mt-4 fs-5 ">this is our best apartment <br />
                        , it has air conditioning and <br />
                        many features and overlooks, <br />
                        the valley</h5>
                    <img src="rent.png" alt="" />
                    <div>
                        <button className="btn btn-warning w-100 ">rent</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}