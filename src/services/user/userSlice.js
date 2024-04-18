import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUserData(state, action) {
            state.user = action.payload
        },
    }
});

export const getUserImage = state => state.user.user?.userImage;

export const {setUserData} = userSlice.actions;
export default userSlice.reducer;