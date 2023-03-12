import { useEffect, useState } from "react";
import "./css/HomePage.css"
import Separators from "./Separators";
function HomePage(props) {
    let [imagesList, setList] = useState(props.bgImages);
    let [currentImg, setCurrentImg] = useState(0);
    let [randomNum, setRandomNum] = useState(0);


    const style = (bg) => {
        return {
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
        }
    }

    const moveToRight = () => {
        if (imagesList.length - 1 > currentImg) {
            setCurrentImg(currentImg + 1);
        }
        else {
            setCurrentImg(0);
        }
    }

    const moveToLeft = () => {
        if (currentImg > 0) {
            setCurrentImg(currentImg - 1);
        }
        else {
            setCurrentImg(imagesList.length - 1);
        }
    }

    const randomChange = () => {
        setTimeout(() => {
            moveToRight();
            setRandomNum(randomNum + 1);
        }, 6000);
    }

    useEffect(() => {
        randomChange();
    }, [randomNum]);

    return (
        <div className="bg-color1 position-relative w-100">
            <img className="w-100 h-100 position-absolute start-50 top-50 translate-middle"
                src={props.bgImages[currentImg]}
                style={{ filter: "blur(5px)" }}
                alt="backGround" />

            <div id="homePage" className="homePage container-md bxSh" style={style(props.bgImages[currentImg])}>
                <i onClick={moveToLeft} className="changeBg text-white fa-solid fa-angle-left m-4 fs-1 position-absolute top-50 start-0"></i>
                <i onClick={moveToRight} className="changeBg text-white fa-solid fa-angle-right m-4 fs-1 position-absolute top-50 end-0"></i>
            </div>
        </div>
    )
}

export default HomePage