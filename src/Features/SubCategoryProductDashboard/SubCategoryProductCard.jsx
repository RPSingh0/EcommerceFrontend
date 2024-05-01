import {Box, CardContent} from "@mui/material";
import {useLocation} from "react-router-dom";
import toast from "react-hot-toast";
import {useSelector} from "react-redux";
import {isItemAlreadyInCart, isItemAlreadyInWishlist, isUserLoggedIn} from "../../services/user/userSlice.js";
import {getAuthToken} from "../../services/user/authStatusSlice.js";
import {useUpdateCart} from "../cart/useUpdateCart.js";
import {useUpdateWishlist} from "../wishlist/useUpdateWishlist.js";
import {getRoundedValueWithPointFivePrecision} from "../../utilities/utilities.js";
import {
    StyledCardContentBoxSubCategoryProductDashboard,
    StyledCardSubCategoryProductDashboard,
    StyledNavLinkSubCategoryProductDashboard,
    StyledProductCardActionsSubCategoryProductDashboard,
    SubCategoryProductCardAddToCart,
    SubCategoryProductCardAddToWishlist,
    SubCategoryProductCardMedia,
    SubCategoryProductCardName,
    SubCategoryProductCardPrice,
    SubCategoryProductCardRating,
    SubCategoryProductKeywordsElement
} from "./SubCategoryProductDashboardRComponents.jsx";


function SubCategoryProductCard({item}) {

    const {pathname: singleProductLink} = useLocation();
    const isLoggedIn = useSelector(isUserLoggedIn);
    const authToken = useSelector(getAuthToken);

    // Cart
    const {isCreating: isAddingInCart, updateCart} = useUpdateCart();
    const itemInCart = useSelector(isItemAlreadyInCart(item._id));
    const shouldDisableAddToCart = itemInCart || isAddingInCart;
    const textAddToCart = itemInCart ? "Already in Cart" : "Add to Cart";

    // Wishlist
    const {isCreating: isAddingInWishlist, updateWishlist} = useUpdateWishlist();
    const itemInWishlist = useSelector(isItemAlreadyInWishlist(item._id));
    const shouldDisableAddToWishlist = itemInWishlist || isAddingInWishlist;
    const textAddToWishlist = itemInWishlist ? "Already in Wishlist" : "Add to Wishlist";

    function handleAddToCart() {
        if (!isLoggedIn) {
            toast.error("Please log in to add");
        } else {
            updateCart({
                identifier: item._id,
                quantity: 1,
                token: authToken
            }, {
                onSuccess: () => {
                    toast.success("Item added to cart");
                }
            })
        }
    }

    function handleAddToWishlist() {
        if (!isLoggedIn) {
            toast.error("Please log in to add")
        } else {
            updateWishlist({
                identifier: item._id,
                token: authToken
            }, {
                onSuccess: () => {
                    toast.success("Item added to wishlist");
                }
            })
        }
    }

    return (
        <StyledCardSubCategoryProductDashboard>
            <SubCategoryProductCardMedia image={item.coverImage} alt={`${item.name} image`}/>
            <StyledCardContentBoxSubCategoryProductDashboard>
                <StyledNavLinkSubCategoryProductDashboard to={`${singleProductLink}/${item._id}`}>
                    <CardContent>
                        <SubCategoryProductCardName name={item.name}/>
                        <SubCategoryProductCardPrice price={item.price}/>
                        <SubCategoryProductKeywordsElement keywords={item.keywords} itemId={item._id}/>
                    </CardContent>
                </StyledNavLinkSubCategoryProductDashboard>
                <StyledProductCardActionsSubCategoryProductDashboard>
                    <Box>
                        <SubCategoryProductCardAddToWishlist tooltipText={textAddToWishlist}
                                                             onClick={handleAddToWishlist}
                                                             disabled={shouldDisableAddToWishlist}/>
                        <SubCategoryProductCardAddToCart tooltipText={textAddToCart}
                                                         onClick={handleAddToCart}
                                                         disabled={shouldDisableAddToCart}/>
                    </Box>
                    <SubCategoryProductCardRating rating={getRoundedValueWithPointFivePrecision(item.averageRating)}/>
                </StyledProductCardActionsSubCategoryProductDashboard>
            </StyledCardContentBoxSubCategoryProductDashboard>
        </StyledCardSubCategoryProductDashboard>
    );
}

export default SubCategoryProductCard;