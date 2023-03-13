import "./css/Contact.css";
import { EmailForm } from "./EmailForm.js"
import TitleSection from "./TitleSection";


function Contact() {


    return (
        <div id="contact" className="bg-color1">
            <TitleSection title="Contact" brief="For Contacting Or Adverties"/>
            <EmailForm />
        </div>
    )
}

export default Contact;
