import {Box, Button, ButtonGroup, Divider, IconButton, styled, Typography} from "@mui/material";
import {Add, AddShoppingCart, Remove, ShoppingBag} from "@mui/icons-material";
import {useState} from "react";

const StyledAddToCartAndBuyNowParentBox = styled(Box)(({theme}) => ({
    display: "flex",
    gap: "1rem",

    [theme.breakpoints.up("xs")]: {
        flexDirection: "column"
    },

    [theme.breakpoints.up("sm")]: {
        flexDirection: "row"
    }
}));

const StyledAddToCartAndBuyNowBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    flexGrow: 1
}));

const StyledButtonGroup = styled(ButtonGroup)(({theme}) => ({

    [theme.breakpoints.down("sm")]: {
        width: "100%",
        "& *": {
            width: "100%"
        }
    }
}));

const StyledButtonTypography = styled(Typography)(({theme}) => ({
    [theme.breakpoints.down("md")]: {
        fontSize: "0.8rem"
    }
}));

function BuyNowAddToCart() {

    const [quantity, setQuantity] = useState(1);

    function increaseQuantity() {
        setQuantity(val => val + 1);
    }

    function decreaseQuantity() {
        setQuantity(val => val === 1 ? 1 : val - 1)
    }

    return (
        <StyledAddToCartAndBuyNowParentBox>
            <StyledButtonGroup variant="outlined">
                <Button onClick={increaseQuantity}>
                    <Add/>
                </Button>
                <Button disableRipple>
                    {quantity}
                </Button>
                <Button onClick={decreaseQuantity}><Remove/></Button>
            </StyledButtonGroup>
            <StyledAddToCartAndBuyNowBox>
                <Button variant={"contained"} startIcon={<AddShoppingCart/>} fullWidth>
                    <StyledButtonTypography variant={"body2"}>
                        Add To Cart
                    </StyledButtonTypography>
                </Button>
                <Button variant={"contained"} startIcon={<ShoppingBag/>} fullWidth>
                    <StyledButtonTypography variant={"body2"}>
                        Buy Now
                    </StyledButtonTypography>
                </Button>
            </StyledAddToCartAndBuyNowBox>
        </StyledAddToCartAndBuyNowParentBox>
    );
}

export default BuyNowAddToCart;