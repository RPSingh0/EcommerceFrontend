import {Badge, Box, styled, Typography} from "@mui/material";
import {FavoriteOutlined, ShoppingCart} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {getNumberOfItemsInCart, getNumberOfItemsInWishlist} from "../../services/user/userSlice.js";

const StyledHeaderWishlist = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    gap: "0.4rem",
    alignItems: "center",
    justifyContent: "center"
}))

function HeaderWishlist() {

    const items = useSelector(getNumberOfItemsInWishlist);

    return (
        <StyledHeaderWishlist>
            <Badge badgeContent={items} color={"error"} variant={"standard"}>
                <FavoriteOutlined/>
            </Badge>
            <Typography
                variant={"h6"}
                sx={{display: {xs: "none", sm: "none", md: "block"}}}>
                Wishlist
            </Typography>
        </StyledHeaderWishlist>
    );
}

export default HeaderWishlist;