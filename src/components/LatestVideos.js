import "./css/LatestVideos.css";
import "./css/animation/loadingBar.css";
import TitleSection from "./TitleSection";
import ErrorMassege from "./ErrorMassege";
import LoadingBar from "./LoadingBar";
import { useEffect } from "react";
import { getLatestVideos } from "../data_center/latestVideos-slice";
import { useSelector, useDispatch } from "react-redux";
import { getDate, timeAgo, durationVideo, numsDecorator } from "../goniFunctions.js";



const LatestVideos = () => {

    const ChannelData = useSelector(state => state.theChannel);
    const latastVideosData = useSelector(state => state.latastVideos);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLatestVideos());
    }, [])

    let theVideos = [<LoadingBar key="loadingBar" massege="Fetching Videos Data" />]
    if (latastVideosData) {
        theVideos = latastVideosData.map((video) => {
            return (
                <div key={video.id} className="card bg-color2 radius-1 overflow-hidden border-0 bxSh" style={{ width: "100%" }}>
                    <div className="position-relative">
                        <span className="overlayLink opacity-0 position-absolute text-white w-100 h-100 d-flex align-items-center justify-content-center">

                            <a href={`https://www.youtube.com/watch?v=${video.id}`} className="pe-auto text-white" target={"_blank"} rel={"noopener noreferrer"} >Play Video</a>
                        </span>
                        <img src={video.snippet.thumbnails.medium.url} className="card-img-top thumbnail h-auto" alt="thumbnal" />
                    </div>
                    <div className="card-body title_discription text-end position-relative">
                        <span className="duration position-absolute">{durationVideo(video.contentDetails.duration)}</span>
                        <span className="timeAgo position-absolute">{timeAgo(video.snippet.publishedAt)}</span>
                        <h5 className="card-title main-color fw-bold">{video.snippet.title}</h5>
                        <div className="theChannel d-flex flex-row-reverse gap-3 align-items-center">
                            <img className="rounded-circle" src={ChannelData!==null? ChannelData.snippet.thumbnails.high.url:null} alt="logo" />
                            <h5 className="m-0 fw-bold">{video.snippet.channelTitle}</h5>
                        </div>
                    </div>
                    <div className="views_liks_comments_date bg-color1 d-flex flex-row justify-content-between gap-4 p-3">
                        <div className="d-flex gap-3 text-center">
                            <span><i className="fa-regular fa-eye"></i>{numsDecorator(video.statistics.viewCount, true)}</span>
                            <span><i className="fa-regular fa-calendar-days"></i>{getDate(video.snippet.publishedAt)}</span>
                        </div>
                        <div className="d-flex gap-3 text-center">
                            <span><i className="fa-regular fa-thumbs-up"></i>{numsDecorator(video.statistics.likeCount, true)}</span>
                            <span><i className="fa-regular fa-comments"></i>{numsDecorator(video.statistics.commentCount, true)}</span>
                        </div>
                    </div>
                    <a id="goToWatchBtn" href={`https://www.youtube.com/watch?v=${video.id}`} className="btn text-white rounded-0 bg-sub-color w-100" target={"_blank"} rel={"noopener noreferrer"}>Watch The Video</a>
                </div>
            )
        })
    }

    return (
        <>
            <div className="bg-color1">
                <TitleSection title="latest Videos" brief="latest Videos Uploaded On Ai Show Channel" />
                <div id="latestVideos" className="">
                    {
                        latastVideosData === false ?
                            <ErrorMassege massege="Fetching Videos Data failed" dispatch={dispatch} do={getLatestVideos} />
                            :
                            theVideos
                    }
                </div>
            </div>
        </>
    )
}

export default LatestVideos;