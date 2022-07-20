import { configureStore } from "@reduxjs/toolkit";
import { listingSlice } from "./slices/listingSlice";
import { searchListSlice } from "./slices/searchListSlice";
import { trendingSlice } from "./slices/trendingSlice";

const store = configureStore({
    reducer: {listing: listingSlice.reducer, searchList: searchListSlice.reducer, trendList: trendingSlice.reducer}
})

export default store;
