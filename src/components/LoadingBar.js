
const LoadingBar = (props) => {
    return (
        <div className="loadingMassege d-flex align-items-center justify-content-center flex-column gap-2">
            <div className="loadingBar">
                <span className="animate"></span>
            </div>
            <span className="fw-bold">
                {props.massege}
            </span>
        </div>
    )
}

export default LoadingBar