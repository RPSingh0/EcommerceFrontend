import {Box} from "@mui/material";
import {useCartContext} from "../../Contexts/CartContext.jsx";
import AccountSecondaryHeader from "./AccountSecondaryHeader.jsx";
import {
    AccountSecondaryDataCard,
    NoItemContainer,
    ProductsLoadingElements,
    StyledSecondaryContainerAccount
} from "./AccountRComponents.jsx";
import {RemoveShoppingCartOutlined} from "@mui/icons-material";

function AccountCartInfo() {

    const {isLoadingCart, cartData, cartError} = useCartContext();

    return (
        <Box>
            <AccountSecondaryHeader text={"Cart"} linkTo={"/cart"}/>
            <StyledSecondaryContainerAccount>
                {!isLoadingCart && !cartError && cartData.data.products.map(item =>
                    <AccountSecondaryDataCard key={item._id} cardImage={item.coverImage} name={item.name}/>
                )}
                {!isLoadingCart && !cartError && cartData.data.products.length === 0 &&
                    <NoItemContainer
                        cardText={"Your cart is empty as of now, put something in cart"}
                        buttonText={"Buy Something"}
                        buttonLink={"/home"}
                    >
                        <RemoveShoppingCartOutlined/>
                    </NoItemContainer>
                }
                {isLoadingCart && <ProductsLoadingElements/>}
            </StyledSecondaryContainerAccount>
        </Box>
    );
}

export default AccountCartInfo;