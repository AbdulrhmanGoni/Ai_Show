import "./css/NavBar.css";
import "./css/animation/animationSpenerCircle.css";
import toggleClasses from "./toggleClasses";
import SwitchTheme from "./SwitchTheme";
import LoadingBar from "./LoadingBar";
import Logo from "./Logo.js";
import { SpenerCircle } from "./speners";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannelData } from "../data_center/channelData-slice";



function NavBar() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    }

    const channelData = useSelector(state => state.theChannel);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchChannelData())

        document.documentElement.style.scrollPaddingTop = "80px"
        let sectionsLinks = document.querySelectorAll(".navLinks a");
        sectionsLinks.forEach((element) => {
            element.addEventListener(("click"), (event) => {
                event.preventDefault();
            })
        })
    }, []);


    return (
        <div className="bxSh navBar d-flex align-items-center flex-row position-relative">
            <div className="container-md d-flex align-items-center flex-row justify-content-between h-100">
                <div className="logo-title d-flex align-items-center">
                    {
                        channelData ?
                            <a href={`https://www.youtube.com/${channelData.snippet.customUrl}`} target={"_blank"} rel="noreferrer">
                                <Logo img={channelData.snippet.thumbnails.high.url} alt="seeee" />
                            </a>
                            : <SpenerCircle width="30px" />
                    }
                    <div className="d-flex flex-row align-items-center gap-4">
                        <div>
                            <h2 className="fs-2 text-color2 m-0 mb-1 fw-bold">{channelData ? channelData.snippet.title : <LoadingBar />}</h2>
                            <span className="fw-bold text-color1">FAN-PROJECT</span>
                        </div>
                        <SwitchTheme />
                    </div>
                </div>
                <div className="navLinks bg-color1 h-100 d-flex gap-sm-3 flex-grow-1 align-items-center justify-content-md-end justify-content-start flex-md-row flex-row">
                    <a className="align-self-center" onClick={() => { window.scrollTo(0, 0) }} href="/" id="homeBtn">Home</a>

                    <div className="position-relative dropMenu d-flex align-items-center h-100">
                        <p className="m-0 p-0">Channel</p>
                        <ul className="d-flex flex-column bg-color2 position-absolute bxSh">
                            <li><a onClick={() => { scrollToSection("introdution") }} href="/">Content</a></li>
                            <li><a onClick={() => { scrollToSection("subscripe") }} href="/">Subscripe</a></li>
                            <li><a onClick={() => { scrollToSection("introdution") }} href="/">Videos</a></li>
                        </ul>
                    </div>

                    <div className="position-relative dropMenu d-flex align-items-center h-100">
                        <p className="m-0 p-0">The Team</p>
                        <ul className="d-flex flex-column bg-color2 position-absolute bxSh">
                            <li><a onClick={() => { scrollToSection("members") }} href="/">Members</a></li>
                            <li><a onClick={() => { scrollToSection("theFounder") }} href="/">Founder</a></li>
                            <li><a onClick={() => { scrollToSection("theirStory") }} href="/">Story</a></li>
                        </ul>
                    </div>

                    <div className="position-relative dropMenu d-flex align-items-center h-100">
                        <p className="m-0 p-0">More</p>
                        <ul className="d-flex flex-column bg-color2 position-absolute bxSh">
                            <li><a onClick={() => { scrollToSection("events") }} href="/">Events</a></li>
                            <li><a onClick={() => { scrollToSection("contact") }} href="/">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <i className="fa-solid fa-bars fs-3 d-md-none dropListLinks p-1" onClick={() => { toggleClasses(".navLinks", "openNav") }}>
                </i>
            </div>
        </div>
    )
}




export default NavBar;