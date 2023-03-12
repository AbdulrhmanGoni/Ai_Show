import { createSlice } from "@reduxjs/toolkit";
import { teamMembers } from "../Ai_Show_Data";

const membersDataSlice = createSlice({
    initialState: teamMembers,
    name: "membersDataSlice",
    reducers: {
        setMembersData: (state, action) => {
            return state = action.payload;
        },
        addMember: (state, action) => {
            return state.push(action.payload);
        },
    }
})


export const { setMembersData, addMember } = membersDataSlice.actions;
export default membersDataSlice.reducer;