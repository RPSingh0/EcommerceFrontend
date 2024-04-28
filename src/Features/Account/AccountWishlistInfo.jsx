import {Box} from "@mui/material";
import {useWishlistContext} from "../../Contexts/WishlistContext.jsx";
import AccountSecondaryHeader from "./AccountSecondaryHeader.jsx";
import {AccountSecondaryDataCard, StyledSecondaryContainerAccount} from "./AccountRComponents.jsx";

function AccountWishlistInfo() {

    const {isLoadingWishlist, wishlistData, wishlistError} = useWishlistContext();

    return (
        <Box>
            <AccountSecondaryHeader text={"Wishlist"} linkTo={"/wishlist"}/>
            <StyledSecondaryContainerAccount>
                {!isLoadingWishlist && !wishlistError && wishlistData.data.products.map(item =>
                    <AccountSecondaryDataCard key={item._id} cardImage={item.coverImage} name={item.name}/>
                )}
            </StyledSecondaryContainerAccount>
        </Box>
    );
}

export default AccountWishlistInfo;