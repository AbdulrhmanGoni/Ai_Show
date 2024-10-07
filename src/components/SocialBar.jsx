import "./css/SocialBar.css";
import { channelLinks as links } from "../Ai_Show_Data";

function SocialBar() {
    return (
        <div className="socialBar bg-main-color">
            <div className="container d-flex flex-row align-items-center justify-content-between pt-3 pb-3">
                <div className="d-flex gap-3 align-items-center">
                    <a className="d-flex" target="_blank" rel="noreferrer" href={links.store}>
                        <i className="fa-solid fa-shop me-2"></i>
                        <p className="m-0 d-sm-block d-none fw-normal">Store</p>
                    </a>
                    <a className="d-flex" href="#home">
                        <i className="fa-solid fa-envelope me-2"></i>
                        <p className="m-0 d-sm-block d-none fw-normal">aishowteam@gmail.com</p>
                    </a>
                </div>
                <div className="d-flex gap-3">
                    <a target="_blank" rel="noreferrer" href={links.telegram}>
                        <i className="fa-brands fa-telegram"></i>
                    </a>
                    <a target="_blank" rel="noreferrer" href={links.youtube}>
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a target="_blank" rel="noreferrer" href={links.instagram}>
                        <i className="fa-brands fa-instagram"></i>

                    </a>
                    <a target="_blank" rel="noreferrer" href={links.twitter}>
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a target="_blank" rel="noreferrer" href={links.twitch}>
                        <i className="fa-brands fa-twitch"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SocialBar;