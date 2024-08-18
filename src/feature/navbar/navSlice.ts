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
        }, // toggling the buttton where its update isNav
        setPageName: (state, action: PayloadAction<string>) => {
            state.page = action.payload; 
        }  //this function used to set the page num
    }
})

export const { toggleNavbar ,setPageName} = navSlice.actions;
export default navSlice.reducer;