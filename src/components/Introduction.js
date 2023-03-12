// import { useState } from "react"
import { useState } from "react";
import { CardImTiTxLtr } from "./cards.js";
import { Row } from "./gridSystemBootstrap.js";
import TitleSection from "./TitleSection.js";
import { theContent } from "../Ai_Show_Data";
import "./css/Introduction.css"



function Introduction() {
    
    const [contents, setContent] = useState([theContent]);

    let theContents = Object.keys(contents[0]).map((content) => (
        <CardImTiTxLtr 
            title = {contents[0][content].title}
            contentImg = {contents[0][content].contentImg}
            contentDiscription = {contents[0][content].contentDiscription}
            classes = {contents[0][content].classes}
            key = {contents[0][content].title}
        />
    ))

    return (
        <div id="introdution">
            <TitleSection title="AI SHOW WORLD" brief="Wellcome To Ai Show World, World Of Anime & Manga" />
            <div className="brief d-grid container">
                <Row classes="text-center w-100">
                    {theContents}
                </Row>
            </div>
        </div>
    )
}

export default Introduction;