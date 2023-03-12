import { configureStore } from "@reduxjs/toolkit";
import channelDataSlice from "./channelData-slice";
import membersDataSlice  from "./membersData-slice";
import latestVideosData  from "./latestVideos-slice";

const dataCenter = configureStore({
    reducer: {
        theMembers: membersDataSlice,
        theChannel: channelDataSlice,
        latastVideos: latestVideosData
    }
})

export default dataCenter;