import {Box, Button, IconButton, Typography} from "@mui/material";
import {Add, AddShoppingCart, Remove, ShoppingBag} from "@mui/icons-material";
import {useState} from "react";

function BuyNowAddToCart() {

    const [quantity, setQuantity] = useState(1);
    const dummyPrice = quantity * 72000;

    function increaseQuantity() {
        setQuantity(val => val + 1);
    }

    function decreaseQuantity() {
        setQuantity(val => val === 1 ? 1 : val - 1)
    }

    return (
        <Box>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <Box sx={{display: "flex", flexDirection: "row", gap: "1rem", alignItems: "center"}}>
                    <IconButton onClick={increaseQuantity}>
                        <Add/>
                    </IconButton>
                    <Box sx={{minWidth: "1rem"}}>
                        {quantity}
                    </Box>
                    <IconButton onClick={decreaseQuantity}>
                        <Remove/>
                    </IconButton>
                </Box>
                <Typography variant={"subtitle2"}>
                    $ {dummyPrice} /-
                </Typography>
            </Box>
            <Box sx={{display: "flex", flexDirection: "row", gap: "1rem"}}>
                <Button variant={"contained"} startIcon={<AddShoppingCart/>} fullWidth>
                    <Typography variant={"body2"}>
                        Add To Cart
                    </Typography>
                </Button>
                <Button variant={"contained"} startIcon={<ShoppingBag/>} fullWidth>
                    <Typography variant={"body2"}>
                        Buy Now
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
}

export default BuyNowAddToCart;