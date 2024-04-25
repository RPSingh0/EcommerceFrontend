import {Box, Divider} from "@mui/material";
import {StyledCartContainer, StyledProductsContainer} from "../Ui/RStyledComponents.jsx";
import CartItem from "./CartItem.jsx";
import CartOverview from "./CartOverview.jsx";
import {useCartContext} from "../../Contexts/CartContext.jsx";

function Cart() {

    const {isLoadingCart, cartData, cartError} = useCartContext();

    if (!isLoadingCart && !cartError && cartData.data.products.length === 0) {
        return (
            <StyledProductsContainer>
                No Data in Cart
            </StyledProductsContainer>
        );
    }

    return (
        <StyledCartContainer>
            <Box sx={{display: "flex", flexDirection: "column", gap: "1rem"}}>
                {!isLoadingCart && !cartError && cartData.data.products.map(item =>
                    <>
                        <CartItem item={item}/>
                        <Divider/>
                    </>)}
            </Box>
            <CartOverview/>
        </StyledCartContainer>
    );
}

export default Cart;