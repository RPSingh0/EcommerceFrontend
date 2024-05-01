import {useWishlistContext} from "../../Contexts/WishlistContext.jsx";
import WishlistItem from "./WishlistItem.jsx";
import {useSelector} from "react-redux";
import {isUserLoggedIn} from "../../services/user/userSlice.js";
import {
    LoadingWishlistSpinner,
    StyledContainerWishlist,
    StyledWishlistItemCardContainer,
    WishlistEmptyOrLoginRequired
} from "./WishlistRComponents.jsx";

function Wishlist() {

    const isLoggedIn = useSelector(isUserLoggedIn);
    const {isLoadingWishlist, wishlistData, wishlistError} = useWishlistContext();

    if (!isLoggedIn) {
        return (
            <WishlistEmptyOrLoginRequired image={"/auth/login-required.png"}
                                          text={"Please log in to add something to wishlist"}/>
        );
    }

    if (!isLoadingWishlist && !wishlistError && wishlistData.data.products.length === 0) {
        return (
            <WishlistEmptyOrLoginRequired image={"/wishlist/empty-wishlist.png"} text={"Add some products here..."}/>
        );
    }

    return (
        <>
            {!isLoadingWishlist && !wishlistError &&
                <StyledContainerWishlist>
                    <StyledWishlistItemCardContainer>
                        {wishlistData.data.products.map(item => <WishlistItem item={item} key={`wishlist-item-${item._id}`}/>)}
                    </StyledWishlistItemCardContainer>
                </StyledContainerWishlist>
            }
            {isLoadingWishlist && <LoadingWishlistSpinner/>}
        </>
    );
}

export default Wishlist;