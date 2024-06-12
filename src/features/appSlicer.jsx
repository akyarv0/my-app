import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   loading: false,
        
    }

    export const appSlicer = createSlice({  
        name: 'app',
        initialState,
        reducers: {

        },

        extraReducers: (builder) => {
        }

    })
    export const {  } = appSlicer.actions

    export default appSlicer.reducer
