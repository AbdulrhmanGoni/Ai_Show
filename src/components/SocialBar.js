import "./css/SocialBar.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram, faSnapchat, faTwitter } from '@fortawesome/free-brands-svg-icons'

// const element = <FontAwesomeIcon icon={faTwitter} />

function SocialBar() {
    return (
        <div className="socialBar bg-main-color">
            <div className="container d-flex flex-row align-items-center justify-content-between pt-3 pb-3">
                <div className="d-flex gap-3 align-items-center">
                    <a className="d-flex" target="_blank" rel="noreferrer" href="https://www.aishow.sa/">
                        <i className="fa-solid fa-shop me-2"></i>
                        <p className="m-0 d-sm-block d-none fw-normal">Store</p>
                    </a>
                    <a className="d-flex" href="#home">
                        <i className="fa-solid fa-envelope me-2"></i>
                        <p className="m-0 d-sm-block d-none fw-normal">aishowteam@gmail.com</p>
                    </a>
                </div>
                <div className="d-flex gap-3">
                    <a target="_blank" rel="noreferrer" href="https://t.me/aishowo">
                        <i className="fa-brands fa-telegram"></i>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://youtube.com/@AiSHOWoo">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://instagram.com/ai_showoo?igshid=YmMyMTA2M2Y=">
                        <i className="fa-brands fa-instagram"></i>

                    </a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/ai_showoo?s=21&t=xog5PN7FHmxkO1bk7WO7fw">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://twitch.tv/aishowoo">
                        <i className="fa-brands fa-twitch"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SocialBar;