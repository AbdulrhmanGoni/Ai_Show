
import { useEffect } from "react";


const SwitchTheme = () => {

    const style = {
        transition: ".3s",
        fontSize: "0px"
    }

    const setTheme = (theTheme) => {
        const page = document.documentElement;
        if (theTheme === "dark") {
            page.style.setProperty("--bg-color1", "black");
            page.style.setProperty("--bg-color2", "#1b1a18");
            page.style.setProperty("--text-color1", "#8f733d");
            page.style.setProperty("--text-color2", "white");
            localStorage.setItem("themeColors", "dark");
            switchIcons(theTheme);
        }
        else if (theTheme === "light") {
            page.style.setProperty("--bg-color1", "white");
            page.style.setProperty("--bg-color2", "#fff6e2");
            page.style.setProperty("--text-color1", "#9b6b00");
            page.style.setProperty("--text-color2", "black");
            localStorage.setItem("themeColors", "light");
            switchIcons(theTheme);
        }
    }

    function switchIcons(id) {
        const icons = document.querySelectorAll(".switchTheme i");
        icons.forEach((icon) => {
            if (icon.id === id) {
                icon.style.fontSize = "0px";
            }
            else {
                icon.style.fontSize = "19px";
            }
        })
        
    }
    
    const icons = document.querySelectorAll(".switchTheme i");
    icons.forEach((icon) => {
        icon.addEventListener(("click"), () => {
            setTheme(icon.id);
            switchIcons(icon.id);
        })
    })


    useEffect(() => {
        let theme = localStorage.getItem("themeColors");
        if (theme) {
            if (theme === "dark") {
                setTheme("dark");
            }
            else {
                setTheme("light");
            }
        }
        else {
            setTheme("dark");
        }
    }, []);





    return (
        <div className="switchTheme">
            <div className="position-relative">
                <i id="light" style={style} className="text-color2 showBtn position-absolute translate-middle top-50 start-50 fa-solid fa-sun"></i>
                <i id="dark" style={style} className="text-color2 position-absolute translate-middle top-50 start-50 fa-solid fa-moon"></i>
            </div>
        </div>
    )
}

export default SwitchTheme;