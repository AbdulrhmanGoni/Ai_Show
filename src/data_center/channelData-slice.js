import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchChannelData = createAsyncThunk(
    "fetchChannelData",
    async () => {
        const apiKey = 'AIzaSyA_nZ30x1kOjflxf89cp37Mcy3P9D1ZX-Y';
        const channelId = 'UCYwpozNeo2tcmb0sZVb1X-A';

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
        // builder.addCase(fetchChannelData.pending, (state, action) => {
        //     console.log("seeeeeeeeeeeeeeeeeee")
        // });
        
        builder.addCase(fetchChannelData.fulfilled, (state, action) => {
            return state = action.payload;
        })
    }
})


export const { getChannelData } = channelDataSlice.actions;
export default channelDataSlice.reducer;