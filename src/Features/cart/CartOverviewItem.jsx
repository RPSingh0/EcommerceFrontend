import {Box, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {getItemQuantityFromCart} from "../../services/user/userSlice.js";

function CartOverviewItem({item}) {

    const presentQuantity = useSelector(getItemQuantityFromCart(item._id))

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start"
        }}>
            <Typography variant={"body1"}>
                {presentQuantity} x {item.name}
            </Typography>
            <Typography variant={"caption"}>
                &#x20B9; {presentQuantity * parseInt(item.price)} /-
            </Typography>
        </Box>
    );
}

export default CartOverviewItem;