/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit' // a package that allows you to create a reducer easily 


const initialValue = {name: "", age: 0, email: ""}
 export const userSlice = createSlice({
    name: "user", // this is the name of the state you want to create
    initialState: { value: initialValue }, // this is pretty explanatory
    reducers : {
        login: (state, action) => {
            state.value = action.payload // the payload is an object containing the new values that we want to set for the state.
        },
        logout: (state) => {
           state.value = initialValue
        }
    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer