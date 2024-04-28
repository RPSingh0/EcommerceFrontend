import {Box, CircularProgress, Divider, Typography} from "@mui/material";
import {StyledCartContainer} from "../Ui/RStyledComponents.jsx";
import CartItem from "./CartItem.jsx";
import CartOverview from "./CartOverview.jsx";
import {useCartContext} from "../../Contexts/CartContext.jsx";
import {useSelector} from "react-redux";
import {isUserLoggedIn} from "../../services/user/userSlice.js";

function Cart() {

    const isLoggedIn = useSelector(isUserLoggedIn);
    const {isLoadingCart, cartData, cartError} = useCartContext();

    if (!isLoggedIn) {
        return (
            <Box sx={{
                position: "absolute",
                height: "15rem",
                width: "15rem",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>
                <img src={"/auth/login-required.png"} height={"100%"} width={"100%"} style={{objectFit: "cover"}}/>
                <Typography variant={"subtitle1"}>
                    Please log in to add something to cart
                </Typography>
            </Box>
        );
    }

    if (!isLoadingCart && !cartError && cartData.data.products.length === 0) {
        return (
            <Box sx={{
                position: "absolute",
                height: "15rem",
                width: "15rem",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>
                <img src={"/cart/empty-cart.png"} height={"100%"} width={"100%"} style={{objectFit: "cover"}}/>
                <Typography variant={"subtitle1"}>
                    Start adding some products...
                </Typography>
            </Box>
        );
    }

    return (
        <>
            {!isLoadingCart && !cartError &&
                <StyledCartContainer>
                    <Box sx={{display: "flex", flexDirection: "column", gap: "1rem"}}>
                        {cartData.data.products.map(item =>
                            <>
                                <CartItem item={item}/>
                                <Divider/>
                            </>)}
                    </Box>
                    <CartOverview/>
                </StyledCartContainer>
            }
            {isLoadingCart &&
                <Box sx={{
                    position: "fixed",
                    top: "50%",
                    right: "50%",
                    transform: "translate(50%, 50%)"
                }}>
                    <CircularProgress/>
                </Box>
            }
        </>
    );
}

export default Cart;