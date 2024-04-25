import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Rating,
    styled,
    Tooltip,
    Typography,
    Zoom
} from "@mui/material";
import {AddShoppingCart, FavoriteBorder} from "@mui/icons-material";
import {NavLink, useLocation} from "react-router-dom";
import toast from "react-hot-toast";
import {useSelector} from "react-redux";
import {isItemAlreadyInCart, isItemAlreadyInWishlist, isUserLoggedIn} from "../../services/user/userSlice.js";
import {getAuthToken} from "../../services/user/authStatusSlice.js";
import {useUpdateCart} from "../cart/useUpdateCart.js";
import {useUpdateWishlist} from "../wishlist/useUpdateWishlist.js";

const StyledCard = styled(Card)(() => ({
    display: "flex",
    flexDirection: "column",
    padding: "1rem 0"
}));

const StyledCardContentBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1
}));

const StyledKeywordsBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "0.5rem"
}));

const StyledSingleKeywordContainer = styled(Box)(() => ({
    border: "1px solid black",
    padding: "0.1rem 0.2rem",
    // borderRadius: "9px"
}));

const StyledCardActions = styled(CardActions)(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
}));

const StyledNavLink = styled(NavLink)(() => ({
    textDecoration: "none",
    color: "inherit"
}))

function ProductBySubCategoryCardAddToWishlist({tooltipText, onClick, disabled}) {
    return (
        <Tooltip TransitionComponent={Zoom} title={tooltipText}>
            <span>
                <IconButton aria-label="add-to-wishlist" onClick={onClick} disabled={disabled}>
                    <FavoriteBorder/>
                </IconButton>
            </span>
        </Tooltip>
    );
}

function ProductBySubCategoryCardAddToCart({tooltipText, onClick, disabled}) {
    return (
        <Tooltip TransitionComponent={Zoom} title={tooltipText}>
            <span>
                <IconButton aria-label="add-to-cart" onClick={onClick} disabled={disabled}>
                    <AddShoppingCart/>
                </IconButton>
            </span>
        </Tooltip>
    );
}

function ProductBySubCategoryCardRating() {

    const rating = Math.round(5 * Math.random());

    return (
        <Tooltip TransitionComponent={Zoom} title={`Overall: ${rating} / 5`}>
            <Box>
                <Rating name="read-only" value={rating} precision={0.5}
                        readOnly/>
            </Box>
        </Tooltip>
    );
}

function ProductBySubCategoryCardPrice({price}) {
    return (
        <Typography variant={"h6"}>
            {price}
        </Typography>
    );
}

function ProductBySubCategoryCardName({name}) {
    return (
        <Typography variant="subtitle1" component="div">
            {name}
        </Typography>
    );
}

function ProductBySubCategoryCardKeywords({keywords, itemId}) {
    return (
        <StyledKeywordsBox>
            {keywords.map((keyword, index) =>
                <StyledSingleKeywordContainer key={`${itemId}-k${index}`}>
                    <Typography variant={"caption"}>{keyword}</Typography>
                </StyledSingleKeywordContainer>)}
        </StyledKeywordsBox>
    );
}

function ProductBySubCategoryCardMedia({image, alt}) {
    return (
        <CardMedia
            component={"img"}
            sx={{height: 150, objectFit: "contain"}}
            image={image}
            title={alt}
        />
    );
}

function ProductsBySubCategoryCard({item}) {

    const {pathname: singleProductLink} = useLocation();
    const isLoggedIn = useSelector(isUserLoggedIn);
    const authToken = useSelector(getAuthToken);

    // Cart
    const {isCreating: isAddingInCart, updateCart} = useUpdateCart();
    const itemInCart = useSelector(isItemAlreadyInCart(item._id));
    const shouldDisableAddToCart = itemInCart || isAddingInCart;
    const textAddToCart = itemInCart ? "Already in Cart" : "Add to Cart";

    // Cart
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
                },
                onError: (error) => {
                    console.log(error);
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
                },
                onError: (error) => {
                    console.log(error);
                }
            })
        }
    }

    return (
        <StyledCard>
            <ProductBySubCategoryCardMedia image={item.coverImage} alt={`${item.name} image`}/>
            <StyledCardContentBox>
                <StyledNavLink to={`${singleProductLink}/${item._id}`}>
                    <CardContent>
                        <ProductBySubCategoryCardName name={item.name}/>
                        <ProductBySubCategoryCardPrice price={item.price}/>
                        <ProductBySubCategoryCardKeywords keywords={item.keywords} itemId={item._id}/>
                    </CardContent>
                </StyledNavLink>
                <StyledCardActions>
                    <Box>
                        <ProductBySubCategoryCardAddToWishlist tooltipText={textAddToWishlist}
                                                               onClick={handleAddToWishlist}
                                                               disabled={shouldDisableAddToWishlist}/>
                        <ProductBySubCategoryCardAddToCart tooltipText={textAddToCart}
                                                           onClick={handleAddToCart}
                                                           disabled={shouldDisableAddToCart}/>
                    </Box>
                    <ProductBySubCategoryCardRating/>
                </StyledCardActions>
            </StyledCardContentBox>
        </StyledCard>
    );
}

export default ProductsBySubCategoryCard;