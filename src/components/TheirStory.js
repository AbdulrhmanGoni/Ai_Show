import TitleSection from "./TitleSection";
import {Row} from "./gridSystemBootstrap";
import "./css/TheirStory.css"

function TheirStory(props) {
    const styles = {
        backgroundImage: `url(${props.img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };
    return (
        <div id="theirStory" className="theirStory">
        <TitleSection title="their Story" brief="the story of foundtion ai show crew"/>
        <div className="container d-grid">
            <Row classes="gap-lg-0 gap-3" >
                <div className="imgAiShow radius-2 col-lg-6" style={styles}>
                    <img className="w-100 d-lg-none radius-2" src={props.img} alt={props.alt? props.alt:"img"}/>
                </div>
                <div className="d-flex flex-column gap-3 col-lg-6">
                    <div className="sec1">
                        <div className="theStory radius-2 p-3 bg-color1 w-100 bxSh">
                            <h3 className="fw-bold main-color">Our Story</h3>
                            <h5 className="fw-bold text-color1">{props.title}</h5>
                            <p>{props.theStory}</p>
                        </div>
                    </div>
                    <div className="sec2 d-flex flex-md-row flex-column gap-3">
                        <div className="successes radius-2 p-3 bg-color1 col-sm-8 w-100 bxSh">
                            <h3 className="fw-bold main-color">Our Successes</h3>
                            <p>
                                {props.successes}
                            </p>
                        </div>
                        <div className="Founded radius-2 d-flex flex-column align-items-center justify-content-center p-3 p-lg-0 bg-color1 col-sm-4 w-auto bxSh">
                            <p className="fw-bold main-color fs-5">Founded</p>
                            <span className="fw-bolder text-color2 fs-6">{props.foundedDate}</span>
                        </div>
                    </div>
                </div>
            </Row>
        </div>
        </div>

    )
}

export default TheirStory;