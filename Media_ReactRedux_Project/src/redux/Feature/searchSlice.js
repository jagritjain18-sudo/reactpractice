import { createSlice } from "@reduxjs/toolkit";

export const searchSlice=createSlice({
    name:'search',
    initialState:{
        query:'',
        loading:false,
        error:null,
        result:[],
        activeTab:'photos'
    },
    reducers:{
        setQuery(state,action){
            state.query=action.payload;
        },
        setLoading(state){
            state.loading=true;
            state.error=null;
        },
        setActiveTab(state,action){
            state.activeTab=action.payload;
        },
        setResult(state,action){
            state.result=action.payload;
            state.loading=false;
        },
        setClearResult(state){
            state.result=[];
        },
        setError(state,action){
            state.error=action.payload;
            state.loading=false;
        }
    }

})

export const {
    setQuery,
    setActiveTab,
    setClearResult,
    setError,
    setLoading,
    setResult

}=searchSlice.actions;

export default searchSlice.reducer