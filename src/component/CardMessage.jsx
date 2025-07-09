export default function CardMessage(props) {
    return (
        <>
            {/* <div className="card">
            <div className="card-header">
                <h5>NAME: {props.name} </h5>
                <h6>EMAIL: {props.email} </h6>
            </div>
            <div className="card-body">
                <p>MESSAGE: {props.message} </p>
            </div>
            <div className="card-footer">
                <button  onClick={props.delete} className="btn btn-danger">delete</button>
            </div>
        </div> */}


            <div class="container my-4">
                <div class="card shadow-sm border-0 rounded-4">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start">
                            <div>
                                <h5 class="card-title mb-0">
                                    <i class="bi bi-person-fill text-primary"></i> {props.name}
                                </h5>
                                <small class="text-muted">
                                    <i class="bi bi-envelope-fill"></i> {props.email}
                                </small>
                            </div>


                            <button
                                onClick={props.delete}
                                class="btn btn-sm btn-outline-danger"
                                title="Delete"
                            >
                                <i class="bi bi-trash3-fill"></i>
                            </button>
                        </div>

                        <hr />
                        <p class="card-text">
                            <i class="bi bi-chat-dots-fill text-secondary"></i>
                            {props.message}
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}