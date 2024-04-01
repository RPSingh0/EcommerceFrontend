import {Badge, Box, styled, Typography} from "@mui/material";
import {ShoppingCart} from "@mui/icons-material";

const StyledHeaderCart = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    gap: "0.4rem",
    alignItems: "center",
    justifyContent: "center"
}))

function HeaderCart() {
    return (
        <StyledHeaderCart>
            <Badge badgeContent={7} color={"error"} variant={"standard"}>
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