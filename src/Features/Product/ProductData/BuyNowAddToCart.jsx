import {Box, Button, ButtonGroup, styled, Typography} from "@mui/material";
import {Add, AddShoppingCart, Remove, ShoppingBag} from "@mui/icons-material";
import {useState} from "react";
import {useSingleProductContext} from "../../../Contexts/SingleProductContext.jsx";
import {useSelector} from "react-redux";
import {isUserLoggedIn} from "../../../services/user/userSlice.js";
import toast from "react-hot-toast";
import {useUpdateCart} from "../../cart/useUpdateCart.js";
import {getAuthToken} from "../../../services/user/authStatusSlice.js";
import {useNavigate} from "react-router-dom";
import {useQueryClient} from "@tanstack/react-query";

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
    const {singleProductData: {data: {product: {_id}}}} = useSingleProductContext();
    const isLoggedIn = useSelector(isUserLoggedIn);
    const queryClient = useQueryClient();
    const authToken = useSelector(getAuthToken);
    const navigate = useNavigate();
    const {isCreating: isAdding, updateCart} = useUpdateCart();

    function increaseQuantity() {
        setQuantity(val => val + 1);
    }

    function decreaseQuantity() {
        setQuantity(val => val === 1 ? 1 : val - 1)
    }

    function handleAddToCart() {
        if (!isLoggedIn) {
            toast.error("Please log in to add");
        } else {
            updateCart({
                identifier: _id,
                quantity: quantity,
                token: authToken
            }, {
                onSuccess: () => {
                    toast.success("Item added to cart")
                }
            })
        }
    }

    async function handleBuyNow() {
        handleAddToCart();
        await queryClient.invalidateQueries({queryKey: ['cart']})
        navigate("/cart");
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
                <Button onClick={decreaseQuantity}>
                    <Remove/>
                </Button>
            </StyledButtonGroup>
            <StyledAddToCartAndBuyNowBox>
                <Button variant={"contained"} startIcon={<AddShoppingCart/>} fullWidth onClick={handleAddToCart}
                        disabled={isAdding}>
                    <StyledButtonTypography variant={"body2"}>
                        Add To Cart
                    </StyledButtonTypography>
                </Button>
                <Button variant={"contained"} startIcon={<ShoppingBag/>} fullWidth onClick={handleBuyNow}
                        disabled={isAdding}>
                    <StyledButtonTypography variant={"body2"}>
                        Buy Now
                    </StyledButtonTypography>
                </Button>
            </StyledAddToCartAndBuyNowBox>
        </StyledAddToCartAndBuyNowParentBox>
    );
}

export default BuyNowAddToCart;