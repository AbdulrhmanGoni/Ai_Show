import Logo from "./Logo";
import { numsDecorator } from "../goniFunctions";
import "./css/Subscribe.css";
import { useSelector } from "react-redux";


function Subscribe() {

    const channelData = useSelector(state => state.theChannel);

    if (channelData) {
        return (
            <div id="subscripe" className="subscripe position-relative bg-color1 overflow-hidden">
                <picture>
                    <source media="(min-width: 768px)" srcSet="/channels4_banner-disktop.jpg"/>
                    <source media="(max-width: 767px)" srcSet="/channels4_banner-mobile.jpg"/>
                    <img className="w-100" src="" alt="seee"/>
                </picture>
                <div className="decoratorDiv d-flex flex-column-reverse flex-md-row justify-content-around align-items-center pb-5 pt-5 gap-md-5 position-relative container">
                    <a href={`https://www.youtube.com/${channelData.snippet.customUrl}`} 
                    className="subscripeBtn bg-sub-color d-flex align-items-center justify-content-center border-0 fw-bold overflow-hidden radius-3 p-4 pe-5 ps-5" 
                    rel="noreferrer" 
                    target="_blank">
                        Subscripe
                    </a>
                    <div className="channelContainer d-flex flex-column-reverse flex-md-row align-items-center gap-3">
                        <div className="d-flex flex-column text-center align-items-md-end text-md-start">
                            <h2 className="fw-bold main-color"> {channelData.snippet.title}</h2>
                            <h4 className="text-color1">{channelData.snippet.customUrl}</h4>
                            <p className="fs-5" style={{direction: "rtl"}}>{numsDecorator(channelData.statistics.subscriberCount, true, "ar")} مشترك</p>
                        </div>
                        <a href={`https://www.youtube.com/${channelData.snippet.customUrl}`} rel="noreferrer" target="_blank">
                            <Logo img={channelData.snippet.thumbnails.high.url} classes="channelLogo"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

}





export default Subscribe;