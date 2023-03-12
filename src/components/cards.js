import Separators from "./Separators";


function CardImTiTxLtr(props) {
    return (
        <div className={props.classes}>
            <div className="aContent bxSh">
                <div className="imgContainer d-flex align-items-center justify-content-center">
                    <img src={props.contentImg} alt="img" />
                </div>
                <p className="main-color fw-bold pt-3 fs-3">{props.title}</p>
                <p className="fs-5 text-capitalize fs-6">{props.contentDiscription}</p>
            </div>
        </div>
    )
}



function PersonalCard(props) {
    return (
        <div style={{ transition: ".3s" }} className="theCard d-flex flex-column justify-content-between bg-color1 p-3 p-sm-4 position-relative overflow-hidden rounded-3 bxSh">
            <div className="d-flex flex-row justify-content-between ">
                <div className="infoContainer z-i d-flex flex-column justify-content-around">
                    <div className="basicInfo mb-5">
                        <div className="fullName fw-bold fs-4 d-flex flex-wrap mb-2 lh-1">
                            <p className="main-color firstName m-0 me-2">{props.firstName}</p>
                            <p className="lastName m-0 text-color1">{props.lastName}</p>
                        </div>
                        <div className="title fw-bold lh-1" style={{ fontSize: "14px" }}>
                            {props.title.map((tit, i) => (<p className="m-0" key={i}><span className="main-color">-</span> {tit}</p>))}
                        </div>
                    </div>
                </div>
                <div className="imgContainer z-i d-flex align-items-center justify-content-center">
                    <img className="rounded-circle" src={props.image} alt="img" />
                </div>
            </div>
            <img className="logoOverlay top-50 start-50" src={props.logo} alt="logo" />
            <span className="decor one"></span>
            <span className="decor tow"></span>
            <div className="d-flex flex-row justify-content-between mt-4 z-i">
                <div className="socialMedia d-flex flex-row">
                    <a className="d-flex align-items-center justify-content-center rounded-circle me-2 p-2" href={props.twitter} target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                    <a className="d-flex align-items-center justify-content-center rounded-circle me-2 p-2" href={props.instagram} target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    <a className="d-flex align-items-center justify-content-center rounded-circle me-2 p-2" href={props.snapchat} target="_blank" rel="noreferrer"><i className="fa-brands fa-snapchat"></i></a>
                    <a className="d-flex align-items-center justify-content-center rounded-circle me-2 p-2" href={props.tiktok} target="_blank" rel="noreferrer"><i className="fa-brands fa-tiktok"></i></a>
                </div>
                <button className="glow-on-hover" type="button" onClick={() => { props.showFullData(props.fullData)}}>DETAILS</button>
            </div>
        </div>
    )
}

export { CardImTiTxLtr, PersonalCard }