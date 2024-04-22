import {Badge, Box, styled, Typography} from "@mui/material";
import {ShoppingCart} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {getNumberOfItemsInCart} from "../../services/user/userSlice.js";

const StyledHeaderCart = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    gap: "0.4rem",
    alignItems: "center",
    justifyContent: "center"
}))

function HeaderCart() {

    const items = useSelector(getNumberOfItemsInCart);

    return (
        <StyledHeaderCart>
            <Badge badgeContent={items} color={"error"} variant={"standard"}>
                <ShoppingCart/>
            </Badge>
            <Typography
                variant={"h6"}
                sx={{display: {xs: "none", sm: "none", md: "block"}}}>
                Cart
            </Typography>
        </StyledHeaderCart>
    );
}

export default HeaderCart;