
function ErrorMassege(props) {
    const style = {color: "inherit"}
    return (
        <div style={{width: "fit-content"}} className="mt-5 mb-5 fw-bold rejictedMassege alert alert-danger">
            <span style={style} >
                {props.massege}
                <i style={style} onClick={() => {props.dispatch(props.do())}} className="reFetchBtn fa-solid fa-rotate-right ms-2"></i>
            </span>
        </div>
    )
}

export default ErrorMassege;