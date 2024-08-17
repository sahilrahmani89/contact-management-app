import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export const navSlice = createSlice({
    name:'navbar',
    initialState:{
        isNav:false,
        page:'Contact'
    },
    reducers:{
        toggleNavbar:state=>{
               state.isNav=!state.isNav
        },
        setPageName: (state, action: PayloadAction<string>) => {
            state.page = action.payload;
        }
    }
})

export const { toggleNavbar ,setPageName} = navSlice.actions;
export default navSlice.reducer;