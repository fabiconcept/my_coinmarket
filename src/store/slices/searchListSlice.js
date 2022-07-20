/* Importing the createSlice function from the reduxjs/toolkit library. */
import { createSlice } from "@reduxjs/toolkit";

export const searchListSlice = createSlice({
    name: "Search List for query",
    /* Importing the createSlice function from the reduxjs/toolkit library. */
    initialState:{
        list: []
    },
    reducers:{
        createList(state, action){
            state.list = action.payload.list
        }
    }
})

export const searchListAction = searchListSlice.actions;
