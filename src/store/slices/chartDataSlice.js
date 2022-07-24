import { createSlice } from "@reduxjs/toolkit";

export const chartSlice = createSlice({
    name: "Data for Chart",
    initialState: {
        data: [],
        isLoad: false,
        error: ""
    },
    reducers: {
        createData(state, action){
            state.data = action.payload.data;
        },
        setLoad(state, action){
            state.isLoad = action.payload.isLoad;
        },
        setError(state, action){
            state.error = action.payload.err;
        }
    }
})

export const chartAction = chartSlice.actions;