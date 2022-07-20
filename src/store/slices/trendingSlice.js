import { createSlice } from "@reduxjs/toolkit";

export const trendingSlice =  createSlice({
    name: "List of Trending coins",
    initialState: {
        trendList: []
    },
    reducers: {
        createTrend(state, action){
            state.trendList = action.payload.trendList;
        }
    }
})

export const trendAction =trendingSlice.actions;