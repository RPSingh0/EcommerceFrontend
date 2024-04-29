import {Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {getItemQuantityFromCart} from "../../services/user/userSlice.js";
import {StyledCartOverviewItemCart} from "./CartRComponents.jsx";

function CartOverviewItem({itemId, name, price}) {

    const presentQuantity = useSelector(getItemQuantityFromCart(itemId))

    return (
        <StyledCartOverviewItemCart>
            <Typography variant={"body1"}>
                {presentQuantity} x {name}
            </Typography>
            <Typography variant={"caption"}>
                &#x20B9;{presentQuantity * parseInt(price)} /-
            </Typography>
        </StyledCartOverviewItemCart>
    );
}

export default CartOverviewItem;