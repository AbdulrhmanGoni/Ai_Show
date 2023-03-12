
function BackBtn(props) {
    return (
        <button 
            type="button" 
            className={`btn btn-outline-warning ${props.classes}`}
            style={props.cssStyle} >
            {props.text}
        </button>
    )
}

export { BackBtn };
