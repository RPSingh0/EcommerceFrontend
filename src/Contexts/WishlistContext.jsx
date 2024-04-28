import {createContext, useContext} from "react";
import {useQuery} from "@tanstack/react-query";
import {useSelector} from "react-redux";
import {getAuthToken} from "../services/user/authStatusSlice.js";
import {getWishlistItemsService} from "../services/wishlist/wishlistService.js";
import {isUserLoggedIn} from "../services/user/userSlice.js";

const WishlistContext = createContext();

function WishlistContextProvider({children}) {

    const token = useSelector(getAuthToken);
    const isLoggedIn = useSelector(isUserLoggedIn);
    const {isLoading: isLoadingWishlist, data: wishlistData, error: wishlistError} = useQuery({
        queryKey: ['wishlist'],
        queryFn: () => getWishlistItemsService(token),
        enabled: isLoggedIn
    });

    return (
        <WishlistContext.Provider value={{
            isLoadingWishlist,
            wishlistData,
            wishlistError
        }}>
            {children}
        </WishlistContext.Provider>
    )
}

function useWishlistContext() {
    const context = useContext(WishlistContext);

    if (context === undefined) {
        throw new Error("Oops! using context outside the accessible area is not allowed ;)");
    }

    return context;
}

export {WishlistContextProvider, useWishlistContext};