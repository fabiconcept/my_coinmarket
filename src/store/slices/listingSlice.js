/* Importing the createSlice function from the reduxjs/toolkit library. */
import { createSlice } from "@reduxjs/toolkit";

export const listingSlice = createSlice({
    name: "All Listing",
    initialState: {
        list: [],
        listFav: [],
        error: null,
        isLoading: false
    },
    reducers: {
        createList(state, action) {
            state.list = action.payload.list;
            const data = action.payload.list;

            const fav = ['btc', 'eth', 'bnb', 'trx'];
            
            for (let index = 0; index < data.length; index++) {
                const ele = data[index];
                const name = ele.name;
                const current_price = ele.current_price;
                const image = ele.image;
                const symbol = ele.symbol;
                
                for (let index = 0; index < fav.length; index++) {
                    const element = fav[index];
                    const cItem = {name, current_price, image}
    
                    if (symbol === element) {
                        const isExist = state.listFav.find(item => item.name === cItem.name);
                        if (!isExist) {
                            state.listFav.push(cItem);
                        }
                    }
                }
                
            }
        },
        endLoad(state, action) {
            state.isLoading = action.payload.isLoading;
        },
        catchError(state, action) {
            state.error = action.payload.error;
        }
    }
})

/* Creating a new action creator. */
export const CreateList = listingSlice.actions;