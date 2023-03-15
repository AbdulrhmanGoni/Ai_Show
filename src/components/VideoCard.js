import "./css/VideoCard.css";

function VideoCard(props) {

    return (
        <div className="card bg-color2 radius-1 overflow-hidden border-0 bxSh" style={{ width: "100%" }}>
            <div className="position-relative">
                <span className="overlayLink opacity-0 position-absolute text-white w-100 h-100 d-flex align-items-center justify-content-center">
                    <a href={props.link} className="pe-auto text-white" target={"_blank"} rel={"noopener noreferrer"} >Play Video</a>
                </span>
                <img src={props.thumbnail} className="card-img-top thumbnail h-auto" alt="thumbnal" />
            </div>
            <div className="card-body title_discription text-end position-relative">
                <span className="duration position-absolute">{props.duration}</span>
                <span className="timeAgo position-absolute">{props.timeAgo}</span>
                <h5 className="card-title video-title fw-bold main-color overflow-hidden text-nowrap w-100" style={{ textOverflow: "ellipsis", direction: "rtl" }}>
                    {props.title}
                    <p className="position-absolute bg-color1 p-1 w-75 p-2 text-wrap fullText" style={{ fontSize: "17px", zIndex: "-10", opacity: 0, transition: ".3s" }}>{props.title}</p>
                </h5>
                <div className="theChannel d-flex flex-row-reverse gap-3 align-items-center">
                    <img className="rounded-circle" src={props.channelLogo} alt="logo" />
                    <h5 className="m-0 fw-bold">{props.channelTitle}</h5>
                </div>
            </div>
            <div className="views_liks_comments_date bg-color1 d-flex flex-row justify-content-between gap-4 p-3">
                <div className="d-flex gap-1 align-items-center text-center">
                    <i className="fa-regular fa-eye"></i> {props.views} views
                </div>
                <div className="d-flex gap-1 align-items-center text-center">
                    <i className="ms-3 fa-regular fa-thumbs-up"></i>{props.likes}
                    <i className="ms-3 fa-regular fa-comments"></i>{props.comments}
                </div>
            </div>
            <a id="goToWatchBtn" href={props.link} className="btn text-white rounded-0 bg-sub-color w-100" target={"_blank"} rel={"noopener noreferrer"}>Watch The Video</a>
        </div>
    )
}

export default VideoCard;