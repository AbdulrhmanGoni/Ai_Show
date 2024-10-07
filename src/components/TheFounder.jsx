import "./css/TheFounder.css";
import TitleSection from "./TitleSection";
import Logo from "./Logo";
import {  useSelector } from "react-redux";




function TheFounder(params) {

    const channelData = useSelector((state => state.theChannel));

    return (
        <div id="theFounder" className="bg-color1">
            <TitleSection title="The Founder" brief="Founder of Ai Show and leader of 10 members"/>
            <div className="theFounder d-flex flex-column flex-lg-row justify-content-center align-items-center ps-3 pe-3">
                <Logo classes="imageOverlay" img={channelData !== null? channelData.snippet.thumbnails.high.url : null} alt="imageOverlay"/>
                <img className="radius-2 bxSh founderImage" src={params.image} alt="founderImage"/>
                <div className="d-flex flex-column align-items-lg-start align-items-center text-center text-lg-start">
                    <h2 className="fw-bold main-color mb-0">{params.theFounder}</h2>
                    <span className="text-color1 fw-bold pb-3">founder of <span className="main-color">{channelData !== null? channelData.snippet.title : null}</span> channel</span>
                    <p>{params.brief}</p>
                    <p>{params.addtionBrief}</p>
                    <div className="hesSocial d-flex gap-3 fs-4">
                        <a className="d-flex align-items-center justify-content-center rounded-circle p-2" href={params.socialMediaLinks.twitter} target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                        <a className="d-flex align-items-center justify-content-center rounded-circle p-2" href={params.socialMediaLinks.instagram} target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a className="d-flex align-items-center justify-content-center rounded-circle p-2" href={params.socialMediaLinks.snapchat} target="_blank" rel="noreferrer"><i className="fa-brands fa-snapchat"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
    

}

export default TheFounder;