import "./css/EventPage.css";
import { Link, useParams } from "react-router-dom";
import { BackBtn } from "./buttons";
import { Row } from "./gridSystemBootstrap";
import { theEvents } from "../Ai_Show_Data";
import { numsDecorator } from "../goniFunctions";

const TheEvents = (props) => {
    return (
        <div className="container d-grid">
            <Row classes="gap-4 gap-lg-0">
                <div className="anEvent col-lg-7 p-0 d-flex flex-column bg-color1 bxSh">
                    <div className="imgEvents position-relative mb-3">
                        <img className="w-100" src={props.theEvents.image} alt="excerpts" />
                        <div className="position-absolute d-flex align-items-center justify-content-between bg-main-color text-white w-100 bottom-0 start-0 p-2 fw-bold">
                            <div className="date">
                                <i className="pe-2 fa-solid fa-calendar-days"></i>
                                <span>{props.theEvents.date}</span>
                            </div>
                            <span className="ms-3 bxSh p-2 pt-1 pb-1">{props.theEvents.state}</span>
                        </div>
                    </div>
                    <div className="datelsContener p-3 pt-0 fw-bold">
                        <h3 className="main-color fw-bold text-capitalize">{props.theEvents.title} event</h3>
                        <p>{props.theEvents.discription}</p>

                    </div>
                </div>
                <div className="col-lg-5 ps-lg-5 p-0">
                    <div className="d-flex flex-column gap-3">
                        <div className="radius-1 bxSh fw-bold p-3 bg-color1 main-color">
                            <i className="main-color pe-2 fa-solid fa-people-group"></i>
                            <span> Attendees : </span>
                            <span className="float-end ">{numsDecorator(props.theEvents.attendees)}</span>
                        </div>
                        <div className="radius-1 bxSh fw-bold p-3 bg-color1 main-color">
                            <i className="main-color pe-2 fa-solid fa-location-dot"></i>
                            <span>Location : </span>
                            <span className="float-end ">{props.theEvents.location.fullDetails}</span>
                        </div>
                        <div className="attendees radius-1 bxSh fw-bold p-3 bg-color1 main-color">
                            <i className="main-color pe-2 fa-solid fa-location-dot"></i>
                            <span>Event Duration : </span>
                            <span className="float-end text-day">{props.theEvents.duration} days</span>
                        </div>
                        <div className="d-flex flex-row bxSh flex-wrap radius-1 bg-color1 align-items-center p-3 gap-2">
                            <span className="fw-bold main-color">Tags:</span>
                            {props.theEvents.tags.map((t) => <span key={t + t[0]} className="fw-bold bg-color2 p-1 ps-2 pe-2 rounded-2 bg-color1 bxSh">{t}</span>)}
                        </div>
                    </div>
                </div>
            </Row>
        </div>
    )
}

const PageHeader = (props) => {
    return (
        <nav className="navbar bg-color1 bxSh">
            <div className="container">
                <span className="fw-bold main-color fs-4 pt-2 pb-2">{props.title} / <span className="">{props.date}</span></span>
            </div>
        </nav>
    )
}



function EventPage() {
    const targetEvent = useParams();
    const anEvent = theEvents[+targetEvent.id];
    return (
        <>
            <div className="thePage bg-color2">
                <PageHeader title={anEvent.title} date={anEvent.date} />
                <div className="container d-flex flex-column align-items-center justify-content-center">
                    <Link to="/" style={{ alignSelf: "start" }}>
                        <BackBtn
                            text="back"
                            classes="backBtn bg-main-color text-white fw-bold"
                            cssStyle={{ padding: "10px 25px", margin: "25px 0px" }}
                        />
                    </Link>
                    <div className="eventPage position-relative">
                        <TheEvents theEvents={anEvent} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventPage;