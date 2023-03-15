import { useSelector } from "react-redux";
import { channelLinks as links, teamMembers } from "../Ai_Show_Data";
import "./css/Footer.css"
import { ReactComponent as Ad } from "../svgImages/badge-ad.svg";
import Logo from "./Logo";
import { SpenerCircle } from "./speners";
import LoadingBar from "./LoadingBar";


function Footer() {

    const channelData = useSelector(state => state.theChannel);

    const contentImgs = teamMembers.map((member, i) => {
        return (
            <img src={member.images[0]} alt="content" className="rounded border-1" key={i} style={{ width: "50px", height: "50px" }} />
        )
    })

    return (
        <footer className="bg-color2 d-grid border-top">
            <div className="row w-100">
                <div className="col-lg-4 col-sm-6 p-4 logo-title d-flex flex-column gap-3">
                    <div className="logo-title d-flex flex-row">
                        {
                            channelData ?
                                <a href={`https://www.youtube.com/${channelData.snippet.customUrl}`} target={"_blank"} rel="noreferrer">
                                    <Logo img={channelData.snippet.thumbnails.high.url} alt="seeee" />
                                </a>
                                : <SpenerCircle width="30px" />
                        }
                        <h2 className="fs-2 text-color2 m-0 mt-1 fw-bold">{channelData ? channelData.snippet.title : <LoadingBar />}</h2>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                        {contentImgs}
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-4 contactInfo">
                    <div className="p-2 text-color1 fw-bold"><i className="me-2 fa-brands fa-whatsapp"></i> 966+550564120</div>
                    <div className="p-2 text-color1 fw-bold"><i className="me-2 fa-solid fa-envelope"></i> aishowteam@gmail.com</div>
                    <div className="p-2 text-color1 fw-bold"><Ad className="me-2" style={{ minWidth: "30px", minHeight: "30px" }}></Ad> AISHOW@fpecocsa.com</div>
                    <div className="p-2 text-color1 fw-bold"><i className="me-2 fa-solid fa-location-dot"></i> Saudi Arabia, Al-Ahsa</div>
                </div>
                <div className="col-lg-4 col-sm-6 p-4">
                    <div className="media-footer d-flex flex-column gap-2">
                        <a href={links.youtube} target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i>youtube</a>
                        <a href={links.twitter} target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i>twitter</a>
                        <a href={links.instagram} target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i>instagram</a>
                        <a href={links.twitch} target="_blank" rel="noreferrer"><i className="fa-brands fa-twitch"></i>twitch</a>
                        <a href={links.telegram} target="_blank" rel="noreferrer"><i className="fa-brands fa-telegram"></i>telegram</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;