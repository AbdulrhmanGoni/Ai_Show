// import {  } from "module";
import { ReactComponent as Sep1 } from "../svgImages/Separator1.svg";
import { ReactComponent as Sep2 } from "../svgImages/Separator2.svg";
import { ReactComponent as Sep3 } from "../svgImages/Separator3.svg";
import { ReactComponent as Sep4 } from "../svgImages/Separator4.svg";
import { ReactComponent as Sep5 } from "../svgImages/Separator5.svg";


const Separators = {

    Separator1: (props) => {
        return <Sep1 className={props.className} />
    },

    Separator2: (props) => {
        return <Sep2  className={props.className} />
    },

    Separator3: (props) => {
        return <Sep3  className={props.className} />
    },

    Separator4: (props) => {
        return <Sep4  className={props.className} />
    },
    Separator5: (props) => {
        return <Sep5  className={props.className} />
    },
};

export default Separators;