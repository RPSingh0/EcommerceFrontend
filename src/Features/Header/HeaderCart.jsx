import {Badge, Typography} from "@mui/material";
import {ShoppingCart} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {getNumberOfItemsInCart} from "../../services/user/userSlice.js";
import {StyledCartWishlistHeader} from "./HeaderRComponents.jsx";

function HeaderCart() {

    const items = useSelector(getNumberOfItemsInCart);

    return (
        <StyledCartWishlistHeader>
            <Badge badgeContent={items} color={"error"} variant={"standard"}>
                <ShoppingCart/>
            </Badge>
            <Typography variant={"h6"} sx={{display: {xs: "none", sm: "none", md: "block"}}}>
                Cart
            </Typography>
        </StyledCartWishlistHeader>
    );
}

export default HeaderCart;