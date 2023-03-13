import "./css/EmailForm.css";
import ReactDOM from "react-dom/client"
import { useSelector } from "react-redux";
import PopUpMassege from "./PopUpMassege";

import Logo from "./Logo";

export const EmailForm = () => {

    const channelData = useSelector(state => state.theChannel);

    const sectionsStyles = {
        flexBasis: "100%",
        padding: "40px"
    }

    const dealWithSubmit = () => {
        let emailInput = document.querySelector("#emailForm #emailInput");
        let subject = document.querySelector("#emailForm #subject");
        let massege = document.querySelector("#emailForm #massege");
        const theMail = {
            emailInput: emailInput.value,
            subject: subject.value,
            massege: massege.value,
        }
        
        console.log(theMail);
        emailInput.value = "";
        subject.value = "";
        massege.value = "";

        const overlayContainer = document.createElement("div");
        overlayContainer.className = "overlayContainer bg-overlay position-fixed w-100 h-100 top-0 d-flex align-items-center justify-content-center";
        overlayContainer.style.zIndex = "559";
        document.querySelector("#contact").appendChild(overlayContainer);

        const overlayCon = ReactDOM.createRoot(document.querySelector(".overlayContainer"));
        overlayCon.render(<PopUpMassege title="Send Mail" massege="your Massege sendimg done" type="okBtn" />);


    }

    return (
        <form id="emailForm" className="d-flex flex-column flex-lg-row w-100 container" onSubmit={(event) => {event.preventDefault(); dealWithSubmit()}}>
            <div className="d-flex flex-column justify-content-center bg-color2 gap-4" style={sectionsStyles}>
                <h4 className="fw-bold text-color2 m-0" >Mail
                    {<span className="main-color ps-2 pe-2">{channelData !== null ? channelData.snippet.title : null}</span>}
                    {<Logo style={{ width: "30px", border: "solid 2px var(--main-color)" }} img={channelData !== null ? channelData.snippet.thumbnails.high.url : null} />}
                </h4>
                <input className="p-2 bg-transparent borderTrickMain rounded-2 bxSh" id="emailInput" type="email" placeholder="Your Email" required/>
                <input className="p-2 bg-transparent borderTrickMain rounded-2 bxSh" id="subject" type="text" placeholder="Subject Title" />
                <textarea className="p-2 bg-transparent borderTrickMain rounded-2 bxSh" id="massege" style={{minHeight: "200px", maxHeight: "300px"}} placeholder="Your Massege" required></textarea>
                <input className="p-2 fw-bold text-white bg-sub-color rounded-3" style={{ width: "fit-content", alignSelf: "end" }} id="submitBtn" type="submit" value="Send" />
            </div>
            <div className="d-flex flex-column justify-content-center gap-3 bg-main-color p-4" style={sectionsStyles}>
                <h4 className="sub-color fw-bold">For Contact With Them</h4>
                <div className="p-2 bxSh bg-color1 text-color2 rounded-2 borderTrickSub fw-bold"><i className="main-color me-2 fa-brands fa-whatsapp"></i> 966+550564120</div>
                <div className="p-2 bxSh bg-color1 text-color2 rounded-2 borderTrickSub fw-bold"><i className="main-color me-2 fa-solid fa-envelope"></i> aishowteam@gmail.com</div>
                <div className="p-2 bxSh bg-color1 text-color2 rounded-2 borderTrickSub fw-bold"><i className="main-color me-2 fa-solid fa-location-dot"></i> Saudi Arabia, Al-Ahsa</div>
                <img className="w-100" src={require("../images/emailBG.png")} alt="bg" />
            </div>
        </form>
    )
}
