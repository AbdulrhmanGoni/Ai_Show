import "./css/LatestVideos.css";
import "./css/animation/loadingBar.css";
import TitleSection from "./TitleSection";
import VideoCard from "./VideoCard";
import ErrorMassege from "./ErrorMassege";
import LoadingBar from "./LoadingBar";
import { useEffect } from "react";
import { getLatestVideos } from "../data_center/latestVideos-slice";
import { useSelector, useDispatch } from "react-redux";
import { getDate, timeAgo, durationVideo, numsDecorator } from "../goniFunctions";



const LatestVideos = () => {

    const channelData = useSelector(state => state.theChannel);
    const latastVideosData = useSelector(state => state.latastVideos);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLatestVideos());
    }, [])

    let theVideos = [<LoadingBar key="loadingBar" massege="Fetching Videos Data" />]
    if (latastVideosData) {
        theVideos = latastVideosData.map((video) => {
            return (
                <VideoCard key={video.id}
                    link={`https://www.youtube.com/watch?v=${video.id}`}
                    title={video.snippet.title}
                    thumbnail={video.snippet.thumbnails.medium.url}
                    duration={durationVideo(video.contentDetails.duration)}
                    timeAgo={timeAgo(video.snippet.publishedAt)}
                    views={numsDecorator(video.statistics.viewCount, true)}
                    likes={numsDecorator(video.statistics.likeCount, true)}
                    comments={numsDecorator(video.statistics.commentCount, true)}
                    channelLogo={channelData?.snippet.thumbnails.high.url}
                    channelName={video.snippet.channelTitle}
                />
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
                            <ErrorMassege
                                massege="Fetching Videos Data failed"
                                dispatch={dispatch}
                                do={getLatestVideos}
                            />
                            :
                            theVideos
                    }
                </div>
            </div>
        </>
    )
}

export default LatestVideos;