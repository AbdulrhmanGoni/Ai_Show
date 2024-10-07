import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchChannelData = createAsyncThunk(
    "fetchChannelData",
    async () => {
        const apiKey = import.meta.env.VITE_API_KEY;
        const channelId = import.meta.env.VITE_CHANNELID;

        const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`)
        const data = await response.json();
        return data.items[0];
    }
)

const channelDataSlice = createSlice({
    initialState: null,
    name: "channelDataSlice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchChannelData.fulfilled, (state, action) => {
            return state = action.payload;
        })
    }
})


export const { getChannelData } = channelDataSlice.actions;
export default channelDataSlice.reducer;