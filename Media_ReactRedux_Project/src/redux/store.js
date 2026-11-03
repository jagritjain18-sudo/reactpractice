import {configureStore} from "@reduxjs/toolkit"
import searchReducer from "./Feature/searchSlice"
export const store= configureStore({
    reducer:{
        search:searchReducer
    }
})