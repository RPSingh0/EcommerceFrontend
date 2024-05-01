import {Badge, Typography} from "@mui/material";
import {FavoriteOutlined} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {getNumberOfItemsInWishlist} from "../../services/user/userSlice.js";
import {StyledCartWishlistHeader} from "./HeaderRComponents.jsx";

function HeaderWishlist() {

    const items = useSelector(getNumberOfItemsInWishlist);

    return (
        <StyledCartWishlistHeader>
            <Badge badgeContent={items} color={"error"} variant={"standard"}>
                <FavoriteOutlined/>
            </Badge>
            <Typography
                variant={"h6"}
                sx={{display: {xs: "none", sm: "none", md: "block"}}}>
                Wishlist
            </Typography>
        </StyledCartWishlistHeader>
    );
}

export default HeaderWishlist;