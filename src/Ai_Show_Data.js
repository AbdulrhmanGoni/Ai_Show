

let homePageBgs = [
    require("./images/Ai-Show-Team-1.jpg"),
    require("./images/Ai-Show-Team-2.png"),
    require("./images/Ai-Show-Team-3.jpg")
]

let theContent = {
    AnimeLiveStream: {
        title: "Anime Live Stream",
        contentImg: require("./animeImages/anime-logo.png"),
        contentDiscription: "the weekly Live Stream that comes every thuesday with Ai Show Crew member",
        classes: "col-md-6 col-lg-4 p-2"
    },
    MangaLiveStream: {
        title: "Manga Live Stream",
        contentImg: require("./animeImages/manga-logo.png"),
        contentDiscription: "the weekly Live Stream that comes every monday with Ai Show Crew member",
        classes: "col-md-6 col-lg-4 p-2"
    },
    kingdom: {
        title: "Kingdom",
        contentImg: require("./animeImages/kingdom-logo.png"),
        contentDiscription: "kingdom",
        classes: "col-md-6 col-lg-4 p-2"
    },
    DetectiveConan: {
        title: "Detective Conan",
        contentImg: require("./animeImages/Detective_Conan_logo.png"),
        contentDiscription: "my only GOAT is Detective Conan and never comes who best them",
        classes: "col-md-6 col-lg-4 p-2"
    },
    VetoOnePiece: {
        title: "Veto One Piece",
        contentImg: require("./animeImages/one-piece.png"),
        contentDiscription: "Veto One Piece",
        classes: "col-md-6 col-lg-4 p-2"
    },
    VetoDiverified: {
        title: "Veto Diverified",
        contentImg: require("./animeImages/animeWorld.png"),
        contentDiscription: "Veto Diverified",
        classes: "col-md-6 col-lg-4 p-2"
    },
}

let theirStory = {
    images: [require("./images/Ai-Show-Team-1.jpg")],
    title: "story of mohammed and majid",
    theStory: "amet consectetur seee colmadm roll Lorem ipsum dolor sit, amet consectetur seee colmadm roll exsprion dom adipisicing elit. Pariatur, Lorem ipsum dolor sit, fugiat in. Excepe beatae!amet consectetur seee colmadm roll fugiat in. Excepe beatae",
    successes: "Successes in anime world and real live amet consectetur seee colmadm roll fugiat in. Excepe beatae!",
    foundedDate: "Jan / 2012",
}

let FounderData = {
    name: "Mohammed Al-Naami",
    image: ["https://live.staticflickr.com/65535/52712037729_9504a6a85f_h.jpg", "https://live.staticflickr.com/65535/52711254192_221df6f884_w.jpg"],
    brief: "Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, possimus eos facere off",
    addtionBrief: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.  elit possimus eos facere off",
    socialMediaLinks: {
        twitter: "https://twitter.com/Topdsecret?t=88WIHe3G2zdEVQkctJLUAg&s=08",
        instagram: "https://instagram.com/topdsecret?igshid=N2ZiY2E3YmU=",
        snapchat: "https://www.snapchat.com/add/topdsecret?share_id=0non_BCzaHY&locale=en-US"
    },
}

let theEvents = [
    {
        title: "Anime Town",
        image: require("./images/event1.jpg"),
        discription: "Anime Town dolor sit, amet porro officia dicta in provident, quaerat, nam eius nulla. Ullam, vero commodi?",
        date: "2023/2/10",
        state: "On Live Now",
        attendees: 3677,
        location: { fullDetails: "Saudi Arabia, Riyadh City", abbreviated: "KSA Riyadh" },
        duration: 45,
        tags: ["Anime", "Ai Show", "live Stage", "Town"],
        id: "atow-3"
    },
    {
        title: "Anime Expo",
        image: require("./images/event3.jpg"),
        discription: "Anime Expo its ceremony's Anime & cosplay nam eius nulla. Ullam, vero  commodi?",
        date: "2022/11/30",
        state: "End",
        attendees: 4097,
        location: { fullDetails: "Saudi Arabia Riyadh City", abbreviated: "KSA Riyadh" },
        duration: 14,
        tags: ["Anime", "Ai Show", "Expo"],
        id: "aex-2"
    },
    {
        title: "Anime Town",
        image: require("./images/event2.jpg"),
        discription: "Lorem ipsum dolor sit, amet porro officia dicta in provident, quaerat, nam eius nulla. Ullam, vero commodi?",
        date: "2018/9/01",
        state: "End",
        attendees: 2707,
        location: { fullDetails: "Saudi Arabia Riyadh City", abbreviated: "KSA Riyadh" },
        duration: 10,
        tags: ["Anime", "Ai Show", "live Stage", "Town"],
        id: "atow-2"
    },
    {
        title: "Anime Expo",
        image: require("./images/event4.jpg"),
        discription: "Lorem ipsum dolor sit, amet porro officia dicta in provident, quaerat, nam eius nulla. Ullam, vero commodi?",
        date: "2017/6/18",
        state: "End",
        attendees: 1677,
        location: { fullDetails: "Saudi Arabia Riyadh City", abbreviated: "KSA Riyadh" },
        duration: 7,
        tags: ["Anime", "Ai Show", "live Stage", "Town"],
        id: "aex-1"
    },
    {
        title: "Anime Town",
        image: require("./images/event5.jpg"),
        discription: "Lorem ipsum dolor sit, amet porro officia dicta in provident, quaerat, nam eius nulla. Ullam, vero commodi?",
        date: "2017/1/08",
        state: "End",
        attendees: 1906,
        location: { fullDetails: "Saudi Arabia Riyadh City", abbreviated: "KSA Riyadh" },
        duration: 6,
        tags: ["Anime", "Ai Show", "live Stage", "Town"],
        id: "atow-1"
    },
]

let teamMembers = [
    {
        name: {
            firstName: "Mohammed",
            lastName: "Al-Naame",
            fullName: "Mohammed Al-Naame",
            title: "Abo Hemead"
        },
        images: [require("./teamMembers/Mohammed1.jpg"), require("./teamMembers/Mohammed1.jpg")],
        position: ["The Founder", "Presenter"],
        birth: {
            place: [ "Saudi Arabia", " Al-Ahsa"],
            date: "1983/5/9"
        },
        faivoret: {
            anime: "Grengaizir",
            manga: "One Piece",
            character: "Ryleh",
        },
        socialMedia: {
            twitter: "https://twitter.com/Topdsecret?t=88WIHe3G2zdEVQkctJLUAg&s=08",
            instagram: "https://instagram.com/topdsecret?igshid=N2ZiY2E3YmU=",
            snapchat: "https://www.snapchat.com/add/topdsecret?share_id=0non_BCzaHY&locale=en-US",
            tikTok: "https://www.tiktok.com/@topdsecret?_t=8XcfOBOGyf4&_r=1",
        }
    },
    {
        name: {
            firstName: "Majed",
            lastName: "Al-Aamer",
            fullName: "Majed Al-Aamer",
            title: "Abo Brhom"
        },
        images: [require("./teamMembers/Majed1.png"), require("./teamMembers/Majed1.png")],
        position: ["Founder Member", "Presenter"],
        birth: {
            place: [ "Saudi Arabia", " Al-Ahsa"],
            date: "1983/5/9"
        },
        faivoret: {
            anime: "Attac On Titan",
            manga: "One Piece",
            character: "Shanks",
        },
        socialMedia: {
            twitter: "https://twitter.com/mj_alamer?s=21",
            instagram: "https://instagram.com/mj_alamer?utm_medium=copy_link",
            snapchat: "https://www.snapchat.com/add/majed_alamer",
            
            tikTok: "https://vm.tiktok.com/ZSeGayHS7/",
            
        }
    },
    {
        name: {
            firstName: "Ibrahim",
            lastName: "Al-Aamer",
            fullName: "Ibrahim Al-Aamer",
            title: "Abo Khalel"
        },
        images: [require("./teamMembers/Ibrahim1.png"), require("./teamMembers/Ibrahim1.png")],
        position: ["Founder Member", "Presenter"],
        birth: {
            place: [ "Saudi Arabia", " Al-Ahsa"],
            date: "1983/5/9"
        },
        faivoret: {
            anime: "Boku No Hero Academy",
            manga: "One Piece",
            character: "Itachi",
        },
        socialMedia: {
            twitter: "https://twitter.com/hema_y_a?t=ZJtI0ZLuPqwbOQhhUs5Wmw&s=09",
            instagram: "https://instagram.com/hema_y_a?r=nametag",
            snapchat: "https://www.snapchat.com/add/utc2015?share_id=MkIwNTY5&locale=ar_SA@calendar=gregorian",
            
            tikTok: "http://www.tiktok.com/@hema_y_a",
            
        }
    },
    {
        name: {
            firstName: "Abduljalel",
            lastName: "Al-Jehani",
            fullName: "Abduljalel Al-Jehani",
            title: "Jello"
        },
        images: [require("./teamMembers/jello1.jpg"), require("./teamMembers/jello1.jpg")],
        position: ["Presenter"],
        birth: {
            place: [ "Saudi Arabia", " Younboa"],
            date: "1992/9/2"
        },
        faivoret: {
            anime: "Hunter X Hunter",
            manga: "Hunter X Hunter",
            character: "Izen Suski",
        },
        socialMedia: {
            twitter: "",
            instagram: "",
            snapchat: "",
            
            tikTok: "",
            
        }
    },
    {
        name: {
            firstName: "Abdulrhman",
            lastName: "Al-Ryzan",
            fullName: "Abdulrhman Al-Ryzan",
            title: "Abo Dahem"
        },
        images: [require("./teamMembers/dhme1.png"), require("./teamMembers/dhme1.png")],
        position: ["Presenter"],
        birth: {
            place: [ "Saudi Arabia", " Al-Ahsa"],
            date: "1994/2/22"
        },
        faivoret: {
            anime: "One Piece",
            manga: "Kingdom",
            character: "Madara Utchiha",
        },
        socialMedia: {
            twitter: "",
            instagram: "",
            snapchat: "",
            
            tikTok: "",
            
        }
    },
    {
        name: {
            firstName: "Rashed",
            lastName: "Al-dosary",
            fullName: "Rashed Al-dosary",
            title: "Rashod"
        },
        images: [require("./teamMembers/rashed1.png"), require("./teamMembers/rashed1.png")],
        position: ["Presenter"],
        birth: {
            place: [ "Saudi Arabia", " Al-Ahsa"],
            date: "1996/7/11"
        },
        faivoret: {
            anime: "Naruro",
            manga: "Detective Conan",
            character: "Naruro",
        },
        socialMedia: {
            twitter: "",
            instagram: "",
            snapchat: "",
            
            tikTok: "",
            
        }
    },
    {
        name: {
            firstName: "Ahmed",
            lastName: "Al-Yamani",
            fullName: "Ahmed Al-Yamani",
            title: "Abo Jannat"
        },
        images: [require("./teamMembers/ahmed1.jpeg"), require("./teamMembers/ahmed1.jpeg")],
        position: ["Presenter"],
        birth: {
            place: [ "Saudi Arabia", " Jeddah"],
            date: "1980/8/3"
        },
        faivoret: {
            anime: "Detective Conan",
            manga: "Detective Conan",
            character: "Yosako Kudo",
        },
        socialMedia: {
            twitter: "",
            instagram: "",
            snapchat: "",
            
            tikTok: "",
            
        }
    },
    {
        name: {
            firstName: "Mohamed",
            lastName: "Al-Salem",
            fullName: "Mohamed Al-Salem",
            title: "Abo Salem"
        },
        images: [require("./teamMembers/aboSalim1.png"), require("./teamMembers/aboSalim1.png")],
        position: ["Presenter"],
        birth: {
            place: [ "Saudi Arabia", " Al-Ahsa"],
            date: "1985/1/27"
        },
        faivoret: {
            anime: "Black Clover",
            manga: "Black Clover",
            character: "Asta",
        },
        socialMedia: {
            twitter: "",
            instagram: "",
            snapchat: "",
            
            tikTok: "",
            
        }
    },
    {
        name: {
            firstName: "Moaaz",
            lastName: "Al-Salom",
            fullName: "Moaaz Al-Salom",
            title: "Moaaz"
        },
        images: [require("./teamMembers/Moaaz1.png"), require("./teamMembers/Moaaz1.png")],
        position: ["Presenter"],
        birth: {
            place: [ "Saudi Arabia", " Al-Ahsa"],
            date: "1997/4/1"
        },
        faivoret: {
            anime: "Sword Art Online",
            manga: "Kingdom",
            character: "Kireto",
        },
        socialMedia: {
            twitter: "",
            instagram: "",
            snapchat: "",
            
            tikTok: "",
            
        }
    },
    {
        name: {
            firstName: "Abdulbari",
            lastName: "Al-Salem",
            fullName: "Abdulbari Al-Salem",
            title: "Z3Z3"
        },
        images: [require("./teamMembers/z3z31.png"), require("./teamMembers/z3z31.png")],
        position: ["Presenter"],
        birth: {
            place: [ "Saudi Arabia", " Bredah"],
            date: "1997/4/1"
        },
        faivoret: {
            anime: "Hunter X Hunter",
            manga: "One Piece",
            character: "Tetch",
        },
        socialMedia: {
            twitter: "",
            instagram: "",
            snapchat: "",
            
            tikTok: "",
            
        }
    },
    {
        name: {
            firstName: "Suaod",
            lastName: "Unknown",
            fullName: "Suaod Unknown",
            title: "Suaod"
        },
        images: [require("./teamMembers/Suaod1.png"), require("./teamMembers/Suaod1.png")],
        position: ["Presenter"],
        birth: {
            place: [ "Saudi Arabia", " AlAhsa"],
            date: "1997/2/19"
        },
        faivoret: {
            anime: "Detective Conan",
            manga: "Detective Conan",
            character: "Unknown",
        },
        socialMedia: {
            twitter: "",
            instagram: "",
            snapchat: "",
            
            tikTok: "",
            
        }
    },
    {
        name: {
            firstName: "Turki",
            lastName: "Al-Jueser",
            fullName: "Turki Al-Jueser",
            title: "Hero Devil"
        },
        images: [require("./teamMembers/Turki1.png"), require("./teamMembers/Turki1.png")],
        position: ["Presenter"],
        birth: {
            place: [ "Saudi Arabia", " AlAhsa"],
            date: "1997/2/19"
        },
        faivoret: {
            anime: "Bleach",
            manga: "One Piece",
            character: "Izen",
        },
        socialMedia: {
            twitter: "",
            instagram: "",
            snapchat: "",
            
            tikTok: "",
            
        }
    },
    {
    name: {
        firstName: "Yaser",
        lastName: "Al-Barrak",
        fullName: "Yaser Al-Barrak",
        title: "bad son"
    },
    images: [require("./teamMembers/yaser1.jpg"), require("./teamMembers/yaser1.jpg")],
    position: ["Presenter"],
    birth: {
        place: [ "Saudi Arabia", " AlAhsa"],
        date: "1995/6/25"
    },
    faivoret: {
        anime: "Monster",
        manga: "20th Country boys",
        character: "unknown",
    },
    socialMedia: {
        twitter: "",
        instagram: "",
        snapchat: "",
        
        tikTok: "",
        
    }
}
]



export { homePageBgs, theContent, theirStory, FounderData, theEvents, teamMembers };























// const apiKey = 'AIzaSyA_nZ30x1kOjflxf89cp37Mcy3P9D1ZX-Y';
// const fetchChannelData = async () => {
//     const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`);
//     const data = await response.json();
//     sessionStorage.setItem("channelData", JSON.stringify(data.items));
//     return data.items;
// };
// fetchChannelData();
// let channelData = JSON.parse(sessionStorage.getItem("channelData"))[0];