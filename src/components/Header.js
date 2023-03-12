import { useState, useEffect } from "react";
import "./css/Header.css";


function Header(props) {
    const [position, setPosition] = useState("0px");

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY <= 84) {
                setPosition("0px");
            }
            else {
                setPosition("-56px");
            }
        });
    })


    return (
        <header style={{top: position}} className="fixidHeader position-fixed w-100">
            {props.children}
        </header>
    )

}

export default Header;