function TitleSection(props) {
    return (
        <div className="title-section p-2 pb-5 pt-5 text-center">
            <h1 className="text-uppercase main-color fw-bolder m-0">{props.title}</h1>
            <p className="text-capitalize fw-bold text-color1">
                {props.brief}
            </p>
        </div>
    );
}

export default TitleSection;