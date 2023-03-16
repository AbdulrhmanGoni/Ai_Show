// import { useState } from "react"
import { CardImTiTxLtr } from "./cards.js";
import TitleSection from "./TitleSection.js";
import { theContent } from "../Ai_Show_Data";
import "./css/Introduction.css"


console.log(theContent)

function Introduction() {
    
    let theContents = Object.keys(theContent).map((content) => (
        <CardImTiTxLtr 
            title = {theContent[content].title}
            contentImg = {theContent[content].contentImg}
            contentDiscription = {theContent[content].contentDiscription}
            classes = "col-md-6 col-lg-4 pb-2 pt-2 p-0"
            key = {theContent[content].title}
        />
    ))

    return (
        <div id="introdution">
            <TitleSection title="AI SHOW WORLD" brief="Wellcome To Ai Show World, World Of Anime & Manga" />
            <div className="brief d-grid container">
                <div className="row text-center w-100">
                    {theContents}
                </div>
            </div>
        </div>
    )
}

export default Introduction;