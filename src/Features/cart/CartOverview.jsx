import {Box, Button, ButtonGroup, Divider, styled, Typography} from "@mui/material";
import {ClearOutlined, PaymentOutlined} from "@mui/icons-material";
import {useCartContext} from "../../Contexts/CartContext.jsx";
import {useSelector} from "react-redux";
import {getCurrentCartPrice, getNumberOfItemsInCart} from "../../services/user/userSlice.js";
import CartOverviewItem from "./CartOverviewItem.jsx";
import {useClearCart} from "./useClearCart.js";
import {getAuthToken} from "../../services/user/authStatusSlice.js";
import toast from "react-hot-toast";

const StyledCartOverviewContainer = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.grey["300"],
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
}));

function CartOverview() {

    const {isLoadingCart, cartData, cartError} = useCartContext();
    const itemsInCart = useSelector(getNumberOfItemsInCart);
    const cartPrice = useSelector(getCurrentCartPrice);
    const token = useSelector(getAuthToken);
    const {isClearing, clearCart} = useClearCart();

    function handleClearCart() {
        clearCart(token, {
            onSuccess: () => {
                toast.success("Cart Cleared");
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }

    return (
        <StyledCartOverviewContainer>
            <Typography variant={"h6"}>
                Overview
            </Typography>
            {!isLoadingCart && !cartError && cartData.data.products.map(item =>
                <CartOverviewItem item={item}/>
            )}
            <Divider/>
            <Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Typography variant={"subtitle2"}>
                        Total Items
                    </Typography>
                    <Typography variant={"subtitle2"}>
                        {itemsInCart}
                    </Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Typography variant={"subtitle2"}>
                        Total Price
                    </Typography>
                    <Typography variant={"subtitle2"}>
                        &#x20B9; {cartPrice} /-
                    </Typography>
                </Box>
            </Box>
            <ButtonGroup variant="outlined" fullWidth>
                <Button size={"small"} startIcon={<PaymentOutlined/>} disabled={isClearing}>
                    Checkout
                </Button>
                <Button size={"small"} startIcon={<ClearOutlined/>} onClick={handleClearCart} disabled={isClearing}>
                    Clear Cart
                </Button>
            </ButtonGroup>
        </StyledCartOverviewContainer>
    );
}

export default CartOverview;