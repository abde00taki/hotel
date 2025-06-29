export default function Footer() {
    return (
        <>
        <div className=" row w-100 ">
            <div className="d-flex justify-content-center">
                <div className="col-md-4">
                <div>
                    <img src="hotel-footer.png" alt="" />
                </div>
            </div>
            <div className="col-md-4 mt-4">
                <h5>Menus</h5>
                <hr />
                <h4>Home</h4>
                <h4>Apartments</h4>
                <h4>Rooms</h4>
                <h4>Contact us</h4>
            </div>
            <div className="col-md-4 mt-4 ">
              <div className="d-flex justify-content-center ">
                <div style={{width: "400px"}}>
                     <h5>Contacts</h5>
               <hr />
               <h4>tel: 05 ***** 0</h4>
               <h4>email</h4>
               <h4>adres</h4>
                </div>
              </div>
            </div>
            </div>
        </div>
        </>
    )
}