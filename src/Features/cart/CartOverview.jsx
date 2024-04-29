import {Button, ButtonGroup, Divider, Typography} from "@mui/material";
import {ClearOutlined, PaymentOutlined} from "@mui/icons-material";
import {useCartContext} from "../../Contexts/CartContext.jsx";
import {useSelector} from "react-redux";
import CartOverviewItem from "./CartOverviewItem.jsx";
import {useClearCart} from "./useClearCart.js";
import {getAuthToken} from "../../services/user/authStatusSlice.js";
import toast from "react-hot-toast";
import CartOverviewTotalItemsPrice from "./CartOverviewTotalItemsPrice.jsx";
import {StyledCartOverviewContainerCart} from "./CartRComponents.jsx";


function CartOverview() {

    const {isLoadingCart, cartData, cartError} = useCartContext();
    const token = useSelector(getAuthToken);
    const {isClearing, clearCart} = useClearCart();

    function handleClearCart() {
        clearCart(token, {
            onSuccess: () => {
                toast.success("Cart Cleared");
            }
        })
    }

    return (
        <StyledCartOverviewContainerCart>
            <Typography variant={"h6"}>
                Overview
            </Typography>
            {
                !isLoadingCart && !cartError &&
                cartData.data.products.map(item => <CartOverviewItem itemId={item._id} name={item.name}
                                                                     price={item.price} key={`overview-${item._id}`}/>)
            }
            <Divider/>
            <CartOverviewTotalItemsPrice/>
            <ButtonGroup variant="outlined" fullWidth>
                <Button size={"small"} startIcon={<PaymentOutlined/>} disabled={isClearing}>
                    Checkout
                </Button>
                <Button size={"small"} startIcon={<ClearOutlined/>} onClick={handleClearCart} disabled={isClearing}>
                    Clear Cart
                </Button>
            </ButtonGroup>
        </StyledCartOverviewContainerCart>
    );
}

export default CartOverview;