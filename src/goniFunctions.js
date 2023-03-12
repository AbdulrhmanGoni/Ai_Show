// shoetcut for localStorage function [g => getItems] [s => setItems] 
function loSt_s(kye, value) { return localStorage.setItem(kye, value) }
function loSt_g(kye) { return localStorage.getItem(kye) }

// shoetcut for sessionStorage function [g => getItems] [s => setItems] 
function seSt_s(kye, value) { return sessionStorage.setItem(kye, value) }
function seSt_g(kye) { return sessionStorage.getItem(kye) }

// function to handle the repeated toggle between elements 
function activeClassHandling(theArray, activeClass, targetEl) {
    theArray.forEach(element => {
        element.classList.remove(activeClass);
    });
    targetEl.classList.add(activeClass);
}

// how Much Time Ago
function Date_timeAgo(theTime) {
    let date = theTime.slice(0,10);
    const allDate = new Date().getTime();
    const startDate= new Date(`${theTime}`).getTime();
    let time = allDate - startDate;
    if (time / 1000 <= 60) {
        time = `${Math.floor(time / 1000)} seconds ago`;
    }
    else if (time / 1000 / 60 <= 60) {
        time = `${Math.floor(time / 1000 / 60)} minutes ago`;
    }
    else if (time / 1000 / 60 / 60 <= 24) {
        time = `${Math.floor(time / 1000 / 60 / 60)} hours ago`;
    }
    else if (time / 1000 / 60 / 60 / 24 <= 14) {
        time = `${Math.floor(time / 1000 / 60 / 60 / 24)} days ago`;
    }
    else if (time / 1000 / 60 / 60 / 24 / 7 <= 4) {
        time = `${Math.floor(time / 1000 / 60 / 60 / 24 / 7 )} week ago`;
    }
    else if (time / 1000 / 60 / 60 / 24 / 30 <= 12) {
        time = `${Math.floor(time / 1000 / 60 / 60 / 24 / 28 )} month ago`;
    }
    else {
        time = `${Math.floor(time / 1000 / 60 / 60 / 24 / 365)} year ago`;
    }

    return [date, time];
}

function numsDecorator(number, title=false, language="en") {
    number = number.toString().split("").reverse();
    if (!(number.some((n) => {return isNaN(parseInt(n))})) && number.length > 3) {
        for (let i = 3; i < number.length; i+=3) {
            number[i] += ",";
        }
        number.reverse();
        let lang ={"en":0, "ar":1};
        let theTitle = "";
        if (title === true) {
            switch (true) {
                case number.length < 4:
                    theTitle = "";
                    break;
                case number.length < 7:
                    theTitle = ["k", " ألف"];
                    break;
                case number.length < 10:
                    theTitle = ["m", " مليون"];
                    break;
                case number.length < 13:
                    theTitle = ["b", " مليار"];
                    break;
                case number.length < 16:
                    theTitle = ["t", " تريليون"];
                    break;
                case number.length < 19:
                    theTitle = ["q", " كوادريليون"];
                    break;
            
                default:
                    theTitle = "";
                    break;
            }
            number = number.join("");
            return number.slice(0, number.indexOf(",")) + theTitle[lang[language]];
        }
        else {
            return number.join("");
        }  
    }
    else {
        return number.reverse().join("");
    }
    
}

function durationVideo(theTime) {
    let finallTime = theTime.match(/\d+\w/g).map((t) => {
        return t.slice(0, -1).length < 2? "0" + t : t
    });
    const struct = ["00", "00", "00"];
    finallTime.map((time) => {
        if (time.endsWith("H")) {
            struct[0] = time.slice(0, -1);
        } 
        else if (time.endsWith("M")) {
            struct[1] = time.slice(0, -1);
        }
        else if (time.endsWith("S")) {
            struct[2] = time.slice(0, -1);
        }
    })

    if (struct[0] === "00") {
        struct.shift()
    }

    const result = struct.join(":");

    return result
}

function textLimitation(text, limitWords) {
    text = text.split(" ")
    if (typeof(limitWords) != "number") {
        throw Error(`'${limitWords}' must be a number`);
    }
    else if (limitWords && text.length >= limitWords) {
        text = text.filter((word, index) => index < limitWords ? word: false);
    }

    return text.join(" ") + "...";
}


export {loSt_s, loSt_g, seSt_s, seSt_g, activeClassHandling, Date_timeAgo, numsDecorator, textLimitation, durationVideo};
