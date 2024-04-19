import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
}

const authStatusSlice = createSlice({
    name: "authStatus",
    initialState: initialState,
    reducers: {
        setAuthStatus(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        removeAuthStatus(state) {
            state.email = null;
            state.token = null;
        }
    }
});

export const getAuthStatus = state => state.authStatus;

export const {setAuthStatus, removeAuthStatus} = authStatusSlice.actions;
export default authStatusSlice.reducer;