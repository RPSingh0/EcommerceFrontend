import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoggedIn: false
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUserData(state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        logoutUser(state) {
            state.user = null;
            state.isLoggedIn = false
        }
    }
});

export const getUserImage = state => state.user.user?.userImage;
export const isUserLoggedIn = state => state.user.isLoggedIn;
export const getUserName = state => `${state.user.user?.firstName} ${state.user.user?.lastName}`;

export const {setUserData, logoutUser} = userSlice.actions;
export default userSlice.reducer;