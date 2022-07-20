import { CreateList } from "../slices/listingSlice";
import { searchListAction } from "../slices/searchListSlice";
import { trendAction } from "../slices/trendingSlice";

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=100&page=1&sparkline=false";


export const fetchListings = () => {
    return async (dispatch) => {
        const fetchQuery = async () => {
            const res = await fetch(url);

            const data = res.json();

            return data;
        }

        try {
            const response = await fetchQuery();
            dispatch(CreateList.endLoad({ isLoading: false }));
            dispatch(CreateList.createList({ list: response }));
        } catch (error) {
            dispatch(CreateList.endLoad({ isLoading: false }));
            dispatch(CreateList.catchError({ error: error.message }));
        }
    }
}

const urlSimple = "https://api.coingecko.com/api/v3/simple/supported_vs_currencies";


export const fetchSearchList = () => {
    return async (dispatch) => {
        const fetchQuery = async () => {
            const res = await fetch(urlSimple);

            const data = res.json();

            return data;
        }

        try {
            const response = await fetchQuery();
            dispatch(searchListAction.createList({list: response}));
        } catch (error) {
            console.log(error.message)
        }
    }
}

const urlTrend = "https://api.coingecko.com/api/v3/search/trending";
export const fetchTrend = () => {
    return async (dispatch) => {
        const fetchQuery = async () => {
            const res = await fetch(urlTrend);

            const data = res.json();

            return data;
        }

        try {
            const response = await fetchQuery();
            dispatch(trendAction.createTrend({trendList: response}));
        } catch (error) {
            console.log(error.message)
        }
    }
}