import {configureStore} from "@reduxjs/toolkit";
import userReducer from './services/user/userSlice.js';
import authReducer from './services/user/authStatusSlice.js';
import {loadState, saveState} from "./utilities/localStorage.js";

const preloadedState = {
    'authStatus': loadState('authStatus')
}

const store = configureStore({
    reducer: {
        'user': userReducer,
        'authStatus': authReducer
    },
    preloadedState
});

store.subscribe(() => {
    saveState('authStatus', store.getState().authStatus);
})

export default store;