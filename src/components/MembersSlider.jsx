import "./css/MembersSlider.css";
import { useSelector } from "react-redux";
import Separators from "./Separators";

const MembersSlider = (props) => {

    const membersData = useSelector(state => state.theMembers);

    const theMember = props.theMember;
    const key = theMember.name.title
    const membersImages = membersData.map((member) => {
        let title = member.name.title;
        return (<div key={title + "wrapper"}
            className={`memberIcon bxSh p-1 rounded-3 d-flex flex-row justify-content-lg-start justify-content-center align-items-center ${title === key ? "active" : ""}`}>
            <img onClick={() => { props.showFullData(member) }}
                key={title + "img"}
                className="rounded-circle d-inline-block me-lg-2 position-relative z-i"
                src={member.images[0]}
                style={{ width: "40px", height: "40px" }}
                alt="member" />

            <span onClick={() => { props.showFullData(member) }} key={title + "title"}
                className="fw-bold text-color1 d-none d-lg-inline-block position-relative z-i"
                style={{ fontSize: "13px" }}>{title}</span>
        </div>)
    })



    return (
        // <div className="sliderContainer d-flex flex-column justify-content-center overflow-hidden">
        <div id={props.id} className="d-flex flex-column container bg-color1 rounded-3 p-3 position-relative bxSh rounded-3 overflow-hidden">
            <i className="close-slider text-color1 mb-2 fa-solid fa-circle-xmark" onClick={() => { props.close() }}></i>
            <div className="d-grid">
                <div className="row overflow-hidden">
                    <div className="membersBar col-md-2 d-flex flex-md-column flex-row gap-2 z-i overflow-auto mt-3 mb-3 pb-2 m-md-0">
                        {membersImages}
                    </div>
                    <div className="detailsSection col-md-10 h-100 d-flex flex-column flex-lg-row-reverse align-items-center justify-content-lg-between z-i gap-5">
                        <div className="d-flex flex-column align-items-center gap-3 ">
                            <img className="rounded-circle memberImage" style={{ width: "300px" }} src={theMember.images[0]} alt="member" />
                            <h4 className="titleMember fw-bold main-color bg-color1 borderTrickMain bxSh p-1 ps-3 pe-3 m-0 rounded-3">{theMember.name.title}</h4>
                            <div className="d-flex flex-row gap-2">
                                {theMember.position.map((pos) => <span key={key + pos} className="text-color1 bxSh borderTrickSub rounded-3 p-1 fw-bold">{pos}</span>)}
                            </div>
                            <div className="socialMedia d-flex gap-2 fs-5">
                                <a className="d-flex align-items-center justify-content-center bg-text-color1 rounded-circle p-2" href={theMember.socialMedia.twitter} target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                                <a className="d-flex align-items-center justify-content-center bg-text-color1 rounded-circle p-2" href={theMember.socialMedia.instagram} target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                                <a className="d-flex align-items-center justify-content-center bg-text-color1 rounded-circle p-2" href={theMember.socialMedia.snapchat} target="_blank" rel="noreferrer"><i className="fa-brands fa-snapchat"></i></a>
                                <a className="d-flex align-items-center justify-content-center bg-text-color1 rounded-circle p-2" href={theMember.socialMedia.tiktok} target="_blank" rel="noreferrer"><i className="fa-brands fa-tiktok"></i></a>
                            </div>
                        </div>
                        <div className="d-flex flex-column" style={{ gap: "2.5rem" }}>
                            <div className="fullName borderTrickSub bxSh p-3 bg-color1 rounded-3 fw-bold fs-4 d-flex flex-wrap position-relative lh-1">
                                <p className="position-absolute fs-5 main-color start-0 ms-1 m-0" style={{ top: "-25px" }}>Full Name</p>
                                <p className="main-color firstName m-0 me-2">{theMember.name.firstName}</p>
                                <p className="lastName m-0 text-color1">{theMember.name.lastName}</p>
                            </div>
                            <div className="d-flex align-items-center flex-wrap borderTrickSub bg-color1 fw-bold bxSh p-2 gap-2 rounded-3 position-relative">
                                <p className="position-absolute main-color fs-5 start-0 ms-1 m-0" style={{ top: "-30px" }}>Birth</p>
                                <div className="d-flex align-items-center flex-wrap ">
                                    Date:
                                    <span className="text-color1 rounded-3 bg-color1 ms-2 p-2">{theMember.birth.date}</span>
                                </div>
                                <div className="d-flex align-items-center flex-wrap">
                                    Place:
                                    <span className="text-color1 rounded-3 bg-color1 ms-2 p-2">{theMember.birth.place.join(", ")}</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column borderTrickSub bg-color1 fw-bold bxSh p-2 rounded-3 position-relative">
                                <p className="position-absolute main-color fs-5 start-0 ms-1 m-0" style={{ top: "-30px" }}>Faivoret</p>
                                <div className="d-flex align-items-center flex-wrap ">
                                    Manga:
                                    <span className="text-color1 rounded-3 ms-2 p-2">{theMember.faivoret.manga}</span>
                                </div>
                                <div className="d-flex align-items-center flex-wrap">
                                    Anime:
                                    <span className="text-color1 rounded-3 ms-2 p-2">{theMember.faivoret.anime}</span>
                                </div>
                                <div className="d-flex align-items-center flex-wrap">
                                    Character:
                                    <span className="text-color1 rounded-3 ms-2 p-2">{theMember.faivoret.character}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Separators.Separator1 className="Decorsvg position-absolute start-0 bottom-0" />
            <Separators.Separator5 className="Decorsvg2 position-absolute start-0 top-0" />
        </div>
        // </div>
    )
}


export default MembersSlider