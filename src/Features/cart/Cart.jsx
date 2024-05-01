import React from "react";
import {Divider} from "@mui/material";
import CartItem from "./CartItem.jsx";
import CartOverview from "./CartOverview.jsx";
import {useCartContext} from "../../Contexts/CartContext.jsx";
import {useSelector} from "react-redux";
import {isUserLoggedIn} from "../../services/user/userSlice.js";
import {
    CartEmptyOrLoginRequired,
    CartLoadingCircularProgress,
    StyledCartItemBoxCart,
    StyledContainerCart
} from "./CartRComponents.jsx";

function Cart() {

    const isLoggedIn = useSelector(isUserLoggedIn);
    const {isLoadingCart, cartData, cartError} = useCartContext();

    if (!isLoggedIn) {
        return (
            <CartEmptyOrLoginRequired image={"/auth/login-required.png"}
                                      text={"Please log in to use this feature"}/>
        );
    }

    if (!isLoadingCart && !cartError && cartData.data.products.length === 0) {
        return (
            <CartEmptyOrLoginRequired image={"/cart/empty-cart.png"}
                                      text={"Start adding some products..."}/>
        );
    }

    return (
        <>
            {!isLoadingCart && !cartError &&
                <StyledContainerCart>
                    <StyledCartItemBoxCart>
                        {cartData.data.products.map(item =>
                            <React.Fragment key={`cart-item-${item._id}`}>
                                <CartItem item={item}/>
                                <Divider/>
                            </React.Fragment>)
                        }
                    </StyledCartItemBoxCart>
                    <CartOverview/>
                </StyledContainerCart>
            }
            {isLoadingCart && <CartLoadingCircularProgress/>}
        </>
    );
}

export default Cart;