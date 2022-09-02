import {createSlice} from "@reduxjs/toolkit";

const initialState={

}

export const Films = createSlice({
    name: 'films',
    initialState,
    reducers: {
        // addFavourite(state, action: PayloadAction<string>) {
        //     state.favourites.push(action.payload)
        //     localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        // },

    }
})
export default Films;