import {
    Box,
    Card,
    CardActions,
    CardMedia,
    CircularProgress,
    IconButton, Rating,
    styled,
    Tooltip,
    Typography,
    Zoom
} from "@mui/material";
import {NavLink} from "react-router-dom";
import {AddShoppingCart, FavoriteBorder} from "@mui/icons-material";

export const StyledSubCategoryProductsContainer = styled(Box)(({theme}) => ({
    margin: "auto",
    backgroundColor: theme.palette.grey["100"],
    padding: "1.5rem 1rem",
    borderRadius: theme.shape.borderRadius,
    width: "100%",

    [theme.breakpoints.up('md')]: {
        width: "90%"
    },

    "&::-webkit-scrollbar": {
        display: "none"
    },
}));

export const StyledSubCategoryProductCardBox = styled(Box)(({theme}) => ({
    display: "grid",
    rowGap: "1rem",
    columnGap: "1rem",

    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: "1fr 1fr",
    },

    [theme.breakpoints.up('lg')]: {
        gridTemplateColumns: "1fr 1fr 1fr",
    },

    [theme.breakpoints.up('xl')]: {
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
}));

export const StyledFixedDataSpinnerBox = styled(Box)(() => ({
    position: "fixed",
    top: "50%",
    right: "50%",
    transform: "translate(50%, 50%)"
}));

export const StyledCardSubCategoryProductDashboard = styled(Card)(() => ({
    display: "flex",
    flexDirection: "column",
    padding: "1rem 0"
}));

export const StyledCardContentBoxSubCategoryProductDashboard = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1
}));

export const StyledNavLinkSubCategoryProductDashboard = styled(NavLink)(() => ({
    textDecoration: "none",
    color: "inherit"
}));

export const StyledProductKeywordsContainerSubCategoryProductDashboard = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "0.5rem"
}));

export const StyledProductKeywordContainerSubCategoryProductDashboard = styled(Box)(() => ({
    border: "1px solid black",
    padding: "0.1rem 0.2rem",
}));

export const StyledProductCardActionsSubCategoryProductDashboard = styled(CardActions)(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
}));

export function DataSpinnerSubCategoryDashboard() {
    return (
        <StyledFixedDataSpinnerBox>
            <CircularProgress/>
        </StyledFixedDataSpinnerBox>
    );
}

export function SubCategoryProductCardMedia({image, alt}) {
    return (
        <CardMedia
            component={"img"}
            sx={{height: 150, objectFit: "contain"}}
            image={image}
            title={alt}
        />
    );
}

export function SubCategoryProductCardName({name}) {
    return (
        <Typography variant="subtitle1" component="div">
            {name}
        </Typography>
    );
}

export function SubCategoryProductCardPrice({price}) {
    return (
        <Typography variant={"h6"}>
            &#x20B9;{price} /-
        </Typography>
    );
}

export function SubCategoryProductKeywordsElement({keywords, itemId}) {
    return (
        <StyledProductKeywordsContainerSubCategoryProductDashboard>
            {keywords.map((keyword, index) =>
                <StyledProductKeywordContainerSubCategoryProductDashboard key={`${itemId}-k${index}`}>
                    <Typography variant={"caption"}>{keyword}</Typography>
                </StyledProductKeywordContainerSubCategoryProductDashboard>)}
        </StyledProductKeywordsContainerSubCategoryProductDashboard>
    );
}

export function SubCategoryProductCardAddToWishlist({tooltipText, onClick, disabled}) {
    return (
        <Tooltip TransitionComponent={Zoom} title={tooltipText}>
            <span>
                <IconButton onClick={onClick} disabled={disabled}>
                    <FavoriteBorder/>
                </IconButton>
            </span>
        </Tooltip>
    );
}

export function SubCategoryProductCardAddToCart({tooltipText, onClick, disabled}) {
    return (
        <Tooltip TransitionComponent={Zoom} title={tooltipText}>
            <span>
                <IconButton onClick={onClick} disabled={disabled}>
                    <AddShoppingCart/>
                </IconButton>
            </span>
        </Tooltip>
    );
}

export function SubCategoryProductCardRating({rating}) {

    return (
        <Tooltip TransitionComponent={Zoom} title={`Overall: ${rating} / 5`}>
            <Box>
                <Rating value={rating} precision={0.5} readOnly/>
            </Box>
        </Tooltip>
    );
}
