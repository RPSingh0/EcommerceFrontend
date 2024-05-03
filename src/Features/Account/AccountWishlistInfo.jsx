import {Box} from "@mui/material";
import {useWishlistContext} from "../../Contexts/WishlistContext.jsx";
import AccountSecondaryHeader from "./AccountSecondaryHeader.jsx";
import {
    AccountSecondaryDataCard,
    NoItemContainer,
    ProductsLoadingElements,
    StyledSecondaryContainerAccount
} from "./AccountRComponents.jsx";
import {HeartBrokenOutlined} from "@mui/icons-material";

function AccountWishlistInfo() {

    const {isLoadingWishlist, wishlistData, wishlistError} = useWishlistContext();

    return (
        <Box>
            <AccountSecondaryHeader text={"Wishlist"} linkTo={"/wishlist"}/>
            <StyledSecondaryContainerAccount>
                {!isLoadingWishlist && !wishlistError && wishlistData.data.products.map(item =>
                    <AccountSecondaryDataCard key={item._id} cardImage={item.coverImage} name={item.name}/>
                )}
                {!isLoadingWishlist && !wishlistError && wishlistData.data.products.length === 0 &&
                    <NoItemContainer
                        cardText={"Your wishlist is empty as of now, put something in wishlist"}
                        buttonText={"Add Something"}
                        buttonLink={"/home"}
                    >
                        <HeartBrokenOutlined/>
                    </NoItemContainer>
                }
                {isLoadingWishlist && <ProductsLoadingElements/>}
            </StyledSecondaryContainerAccount>
        </Box>
    );
}

export default AccountWishlistInfo;