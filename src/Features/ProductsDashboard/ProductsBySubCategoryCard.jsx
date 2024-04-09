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

function ProductBySubCategoryCardAddToWishlist() {
    return (
        <Tooltip TransitionComponent={Zoom} title="Add To Wishlist">
            <IconButton aria-label="add-to-wishlist">
                <FavoriteBorder/>
            </IconButton>
        </Tooltip>
    );
}

function ProductBySubCategoryCardAddToCart() {
    return (
        <Tooltip TransitionComponent={Zoom} title="Add to Cart">
            <IconButton aria-label="add-to-cart">
                <AddShoppingCart/>
            </IconButton>
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
                        <ProductBySubCategoryCardAddToWishlist/>
                        <ProductBySubCategoryCardAddToCart/>
                    </Box>
                    <ProductBySubCategoryCardRating/>
                </StyledCardActions>
            </StyledCardContentBox>
        </StyledCard>
    );
}

export default ProductsBySubCategoryCard;