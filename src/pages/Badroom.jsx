export default function Badroom() {
    return (
        <div className="d-flex justify-content-center mt-4">
            <div className="mt-4">
                <div className="hotel-peoducts-ditails  ">
                    <h3 className="apartment-ditai"><img src="bad.png" alt="" /> 2 BEDS</h3>
                    <hr />
                    <h3 className="apartment-ditai mt-4 "><img src="kitchen.png" alt="" /> 1 SMALL KITCHEN</h3>
                    <hr />
                    <h3 className="apartment-ditai mt-4 "><img src="BATHROOM.png" alt="" /> 1 BATHROOM</h3>
                    <hr />
                    <h3 className="apartment-ditai mt-4"><img src="wardrobe.png" alt="" /> 1 TREASURY</h3>
                    
                    
                </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <img className="" width="75%" height="75%" src="badroom2.jpg" alt="" />
            </div>
            <div className="mt-4">
                <h2 className="text-danger">Badroom</h2>
                <h5 className="mt-4 fs-5 ">this is our best badroom <br />
                    , it has air conditioning and <br />
                    many features and overlooks, <br />
                    the valley</h5>
                <img src="rent.png" alt="" />
                <div>
                    <button className="btn btn-warning w-100">rent</button>
                </div>
            </div>
        </div>
    )
}