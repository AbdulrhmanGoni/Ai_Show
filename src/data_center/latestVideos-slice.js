import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const channelId = import.meta.env.VITE_CHANNELID;

const getLatestVideosData = async (videoId) => {
    const baseUrl = "https://www.googleapis.com/youtube/v3/videos?";
    const queryParams = `part=snippet,statistics,contentDetails&id=${videoId}&key=${apiKey}`;
    const latestVideos = await axios.get(baseUrl + queryParams).then((videoData) => {
        return videoData.data.items;
    });

    return latestVideos;
};

export const getLatestVideos = createAsyncThunk("getLatestVideos", async () => {

    const baseUrlForIDs = 'https://www.googleapis.com/youtube/v3/search';
    const queryParamsForIDs = `?part=snippet&channelId=${channelId}&order=date&maxResults=5&type=video&key=${apiKey}`;
    const IDs = await axios.get(baseUrlForIDs + queryParamsForIDs).then((videoData) => {
        const ids = videoData.data.items.map((video) => video.id.videoId);
        return ids;
    })

    const latestVideos = getLatestVideosData(IDs);
    return latestVideos;
})


const latestVideosData = createSlice({
    initialState: null,
    name: "latestVideosData",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getLatestVideos.pending, (state) => {
            return state = null;
        })
        builder.addCase(getLatestVideos.fulfilled, (state, action) => {
            return state = action.payload;
        })
        builder.addCase(getLatestVideos.rejected, (state) => {
            return state = false;
        })
    }
})

export const { refresh } = latestVideosData.actions
export default latestVideosData.reducer;