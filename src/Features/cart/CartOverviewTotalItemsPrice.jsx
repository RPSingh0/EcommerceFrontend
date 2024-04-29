import {Box, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {getCurrentCartPrice, getNumberOfItemsInCart} from "../../services/user/userSlice.js";
import {StyledCartOverviewTotalItemsPriceContainerCart} from "./CartRComponents.jsx";

function CartOverviewTotalItemsPrice() {

    const itemsInCart = useSelector(getNumberOfItemsInCart);
    const cartPrice = useSelector(getCurrentCartPrice);

    return (
        <Box>
            <StyledCartOverviewTotalItemsPriceContainerCart>
                <Typography variant={"subtitle2"}>
                    Total Items
                </Typography>
                <Typography variant={"subtitle2"}>
                    {itemsInCart}
                </Typography>
            </StyledCartOverviewTotalItemsPriceContainerCart>
            <StyledCartOverviewTotalItemsPriceContainerCart>
                <Typography variant={"subtitle2"}>
                    Total Price
                </Typography>
                <Typography variant={"subtitle2"}>
                    &#x20B9; {cartPrice} /-
                </Typography>
            </StyledCartOverviewTotalItemsPriceContainerCart>
        </Box>
    );
}

export default CartOverviewTotalItemsPrice;