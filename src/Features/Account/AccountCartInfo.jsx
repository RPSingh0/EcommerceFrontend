import {Box} from "@mui/material";
import {useCartContext} from "../../Contexts/CartContext.jsx";
import AccountSecondaryHeader from "./AccountSecondaryHeader.jsx";
import {AccountSecondaryDataCard, StyledSecondaryContainerAccount} from "./AccountRComponents.jsx";

function AccountCartInfo() {

    const {isLoadingCart, cartData, cartError} = useCartContext();

    return (
        <Box>
            <AccountSecondaryHeader text={"Cart"} linkTo={"/cart"}/>
            <StyledSecondaryContainerAccount>
                {!isLoadingCart && !cartError && cartData.data.products.map(item =>
                    <AccountSecondaryDataCard key={item._id} cardImage={item.coverImage} name={item.name}/>
                )}
            </StyledSecondaryContainerAccount>
        </Box>
    );
}

export default AccountCartInfo;