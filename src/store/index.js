import { configureStore } from "@reduxjs/toolkit";
import { chartSlice } from "./slices/chartDataSlice";
import { listingSlice } from "./slices/listingSlice";
import { searchListSlice } from "./slices/searchListSlice";
import { trendingSlice } from "./slices/trendingSlice";
import { viewSlice } from "./slices/viewSlice";

const store = configureStore({
    reducer: {listing: listingSlice.reducer, searchList: searchListSlice.reducer, trendList: trendingSlice.reducer, view: viewSlice.reducer, chart: chartSlice.reducer}
});

export default store;
