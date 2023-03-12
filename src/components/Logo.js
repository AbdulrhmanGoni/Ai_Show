
function Logo(props) {
    return (
        <img className={"rounded-circle me-3 " + props.classes} src={props.img} style={props.style} alt={props.alt ? props.alt: "LOGO"}/>
    )
}

export default Logo;