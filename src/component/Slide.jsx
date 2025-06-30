export default function Slide() {
    return (
        <div id="carouselExampleControlsNoTouching" className="carousel slide d-block d-md-none  " data-bs-touch="false">

            <div className="carousel-inner vh-100" style={{ borderRadius: "20px" }}>
                <div className="carousel-item active vh-50" style={{ borderRadius: "20px" }}>
                    {/* <img style={{ borderRadius: "20px" }} src="apartment.jpeg" className="d-block w-100 vh-50" alt="..." /> */}
                </div>
                <div className="carousel-item vh-50" style={{ borderRadius: "20px" }}>
                    {/* <img style={{ borderRadius: "20px" }} src="badroom2.jpg" className="d-block w-100 vh-50" alt="..." /> */}
                </div>
                <div className="carousel-item vh-50" style={{ borderRadius: "20px" }}>
                    {/* <img style={{ borderRadius: "20px" }} src="swiming-pool.jpg" className="d-block w-100 vh-50" alt="..." /> */}
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}