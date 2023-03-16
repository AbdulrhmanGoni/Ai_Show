import TitleSection from "./TitleSection.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { numsDecorator, textLimitation }  from "../goniFunctions";
import "./css/Events.css";




function LatstEvents(props) {
    return (
        <div className="anEvent d-flex flex-column bg-color1 bxSh">
            <div className="imgEvents position-relative mb-3">
                <span className="linkEvents position-absolute d-flex align-items-center justify-content-center text-white w-100 h-100">
                    <Link  to={`/eventPage/${props.id}`} className="opacity-0 text-white fw-normal" >More Details</Link> 
                </span>
                <img className="w-100" src={props.image} alt="excerpts"/>
                <div className="position-absolute d-flex justify-content-between bg-main-color text-white w-100 bottom-0 start-0 p-2">
                    <div className="date fw-bold">
                        <i className="pe-2 fa-solid fa-calendar-days"></i>
                        <span className="text-white">{props.date}</span>
                        <span className="ms-3 rounded-2 bxSh p-1 text-white">{props.state}</span>
                    </div>
                    <div className="attendees fw-bold">
                        <i className="pe-2 fa-solid fa-people-group"></i>
                        <span className="text-white">{props.attendees}</span>
                        
                    </div>
                </div>
            </div>
            <div className="datelsContener p-3 pt-0 ">
                <h3 className="fw-bold main-color text-capitalize">{props.title} event</h3>
                <p>{props.discription}</p>
                <div className="d-flex flex-row flex-wrap align-items-center gap-2">
                    <span className="fw-bold">Tags: </span>
                    {props.tags.map((t, i) => <span key={i} className="p-1 ps-2 pe-2 rounded-2 bxSh bg-color2 text-color2">{t}</span>)}
                </div>
            </div>
        </div>
    )
} 

function PreviousEvents(props) {
    return (
        <div className="preEvent bg-color1 p-3 radius-1 bxSh d-flex flex-row flex-md-column flex-lg-row align-items-center text-md-center text-lg-start gap-3">
            <div className="position-relative">
                <span className="linkEvents position-absolute d-flex align-items-center justify-content-center radius-2 text-white w-100 h-100">
                    <Link  to={`/eventPage/${props.id}`} className="opacity-0 text-white fw-normal" >More Details</Link> 
                </span>
                <img className="prevImg radius-2" src={props.image} alt="event"/>
            </div>
            <div className="d-flex flex-column">
                <h4 className="main-color fw-bold">{props.title}</h4>
                <p className="preEventDiscription m-0">{props.discription}</p>
                {/* <p className="max-lines">{props.discription}</p> */}
                {/* <p>{textLimitation(props.discription, 10)}</p> */}
            </div>
        </div>
    )
}

function Events(props) {

    const [theEvents, setEvents] = useState(props.theEvents);

    const allEvents = theEvents.map((anEvent, index) => {
        if (index < 2) {
            return (
                <LatstEvents 
                    key={index}
                    id={index}
                    title={anEvent.title} 
                    image={anEvent.image} 
                    tags={anEvent.tags} 
                    attendees={numsDecorator(anEvent.attendees, true)}
                    date={anEvent.date}
                    state={anEvent.state}
                    discription={anEvent.discription}
                />
            )
        } 
        else {
            return (
                <PreviousEvents 
                    key={index}
                    id={index}
                    title={anEvent.title}
                    image={anEvent.image}
                    date={anEvent.date}
                    discription={anEvent.discription}
                />
            )
        }
    })

    const latstEvents = allEvents.filter((event, index) => {
        return index < 2 ?? event
    })

    const previousEvents = allEvents.filter((event, index) => {
        return index > 1 ?? event
    })

    return (
        <div id="events" className="events">
            <TitleSection title="Events" brief="the events they participte in"/>
            <div className="container d-grid">
            <div className="row gap-5 gap-md-0">
                <div className="latestEvents col-md-7 d-flex flex-column gap-4">
                    {latstEvents}
                </div>
                <div className="previousEvents col-md-5 d-flex flex-column gap-3">
                    <h2 className="text-color1 fw-bold m-0 text-center">Previous Events</h2>
                    {previousEvents}
                    
                </div>
            </div>
            </div>
    </div>
    )
}

export default Events;
