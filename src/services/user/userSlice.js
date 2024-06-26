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
        },
    }
});
export const getUserDetails = state => state.user.user;
export const getUserImage = state => state.user.user?.userImage;
export const isUserLoggedIn = state => state.user.isLoggedIn;
export const getUserName = state => `${state.user.user?.firstName} ${state.user.user?.lastName}`;
export const getUserId = state => state.user.user?._id;
export const getUserCart = state => state.user.user?.cart;
export const getNumberOfItemsInCart = state => state.user.user?.cart.reduce((acc, cur) => acc + cur.quantity, 0);
export const isItemAlreadyInCart = identifier => state => {
    const cart = state.user.user?.cart;

    if (cart === undefined) {
        return false;
    }

    const existingItemIndex = cart.findIndex(cartItem => cartItem.identifier === identifier);

    return existingItemIndex !== -1;

}
export const getItemQuantityFromCart = identifier => state => {
    const cart = state.user.user.cart;
    const existingItemIndex = cart.findIndex(cartItem => cartItem.identifier === identifier);

    if (existingItemIndex !== -1) {
        return cart[existingItemIndex].quantity;
    }

    return 1;
}
export const getCurrentCartPrice = state => state.user.user?.currentCartPrice;
export const isItemAlreadyInWishlist = identifier => state => {
    const wishlist = state.user.user?.wishlist;

    if (wishlist === undefined) {
        return false;
    }

    const existingItemIndex = wishlist.findIndex(cartItem => cartItem.identifier === identifier);

    return existingItemIndex !== -1;
}
export const getNumberOfItemsInWishlist = state => state.user.user?.wishlist.length;
export const {setUserData, logoutUser} = userSlice.actions;
export default userSlice.reducer;