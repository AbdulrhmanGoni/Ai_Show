import { useEffect } from "react";



const PopUpMassege = (props) => {

    const btnStyle = {
        border: "2px var(--main-color) solid",
        width: "100px",
        padding: "8px",
        transition: ".5s",
        borderRadius: "10px",
        fontWeight: "bold",
    }
    const parentStyle = {
        maxWidth: "280px",
    }

    const closePopUp = () => {
        document.querySelector(".overlayContainer").remove();
    }

    useEffect(() => {
        document.onclick = (ev) => {
            if (ev.target.classList.contains("overlayContainer") || ev.target.id === "okBtn") {
                closePopUp();
            }
        }

        // window.addEventListener(("scroll"), (event) => {
        //     event.preventDefault();
        // })

        const element = document.getElementById("cancelBtn");
        if (element) {
            const events = ["mouseover", "mouseout"]
            events.forEach((event) => {
                element.addEventListener((event), () => {
                    element.classList.toggle("bg-main-color");
                })
            })
        }
        
    }, []);



    const options = {
        okBtn: (props) => {
            return (
                <>
                    <button id="okBtn" className="bg-main-color border-0" style={{ ...btnStyle, ...props.style }} type="button">OK</button>
                </>
            )
        },
        okOrCancelBtn: (props) => {
            return (
                <>
                    <button className="bg-main-color border-0" id="okBtn" style={{ ...btnStyle, ...props.style }} type="button">OK</button>
                    <button className="" id="cancelBtn" style={{ ...btnStyle, ...props.style }} type="button">Cancel</button>
                </>
            )
        }
    }

    return (
        <div className="massegeCard p-4 text-center bg-color1 rounded-3" style={parentStyle}>
            <h3 className="titleMassege">{props.title}</h3>
            <p className="massegeContent">{props.massege}</p>
            <div className="options d-flex flex-row justify-content-center align-items-center gap-3">
                {
                    props.type === "okBtn" ?
                        <options.okBtn />
                        :
                        props.type === "okOrCancelBtn" ?
                            <options.okOrCancelBtn />
                            : null
                }
            </div>
        </div>
    )
}

export default PopUpMassege;