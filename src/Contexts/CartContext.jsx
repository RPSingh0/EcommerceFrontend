import {createContext, useContext} from "react";
import {useQuery} from "@tanstack/react-query";
import {getCartItemsService} from "../services/cart/cartService.js";
import {useSelector} from "react-redux";
import {getAuthToken} from "../services/user/authStatusSlice.js";
import {isUserLoggedIn} from "../services/user/userSlice.js";

const CartContext = createContext();

function CartContextProvider({children}) {

    const token = useSelector(getAuthToken);
    const isLoggedIn = useSelector(isUserLoggedIn);
    const {isLoading: isLoadingCart, data: cartData, error: cartError} = useQuery({
        queryKey: ['cart'],
        queryFn: () => getCartItemsService(token),
        enabled: isLoggedIn
    });

    return (
        <CartContext.Provider value={{
            isLoadingCart,
            cartData,
            cartError
        }}>
            {children}
        </CartContext.Provider>
    )
}

function useCartContext() {
    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error("Oops! using context outside the accessible area is not allowed ;)");
    }

    return context;
}

export {CartContextProvider, useCartContext};