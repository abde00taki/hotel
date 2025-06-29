export default function Card(props) {
    return (
        
            <div className="cardHotel card mt-4 mx-4" style={{border: "none"}}>
                <img src="orange.png" style={{width: "50px",  marginTop: "20px", position: "relative"}} alt="" />
                <div className="cardHotelBody card-body" >
                    <h2> <img src={props.image} alt="" /> {props.title} </h2>
                    <p className="mx-4"> {props.desc} </p>
                </div>
            </div>
        
    )
}