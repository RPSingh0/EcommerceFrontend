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
    }
});

export const getAuthStatus = state => state.authStatus;

export const {setAuthStatus} = authStatusSlice.actions;
export default authStatusSlice.reducer;