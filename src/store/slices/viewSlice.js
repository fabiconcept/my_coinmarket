import { createSlice } from "@reduxjs/toolkit";

export const viewSlice =  createSlice({
    name: "Data for single view",
    initialState:{
        mainData: [],
        isLoad: false,
        error: null
    },
    reducers:{
        addTodata(state, action){
            state.mainData =  action.payload.data;
        },
        catchErr(state, action){
            state.error = action.payload.error;
        },
        updateLoad(state, action){
            state.isLoad = action.payload.load;
        }
    }
});


export const viewAction =  viewSlice.actions;