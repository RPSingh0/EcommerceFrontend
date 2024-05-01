import {Box, Card, CardMedia, CircularProgress, styled, Typography} from "@mui/material";
import {StyledCartEmptyOrLoginRequiredBoxCart} from "../cart/CartRComponents.jsx";

export const StyledFixedLoadingSpinnerWishlist = styled(Box)(() => ({
    position: "fixed",
    top: "50%",
    right: "50%",
    transform: "translate(50%, 50%)"
}));

export const StyledContainerWishlist = styled(Box)(({theme}) => ({
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

export const StyledWishlistItemCardContainer = styled(Box)(({theme}) => ({
    display: "grid",
    rowGap: "1rem",
    columnGap: "1rem",

    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: "1fr",
    },

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

export const StyledWishlistEmptyOrLoginRequiredBoxWishlist = styled(Box)(() => ({
    position: "absolute",
    height: "15rem",
    width: "15rem",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
}));

export const StyledWishlistCardWishlist = styled(Card)(() => ({
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
}));

export function LoadingWishlistSpinner() {
    return (
        <StyledFixedLoadingSpinnerWishlist>
            <CircularProgress/>
        </StyledFixedLoadingSpinnerWishlist>
    );
}

export function WishlistEmptyOrLoginRequired({image, text}) {
    return (
        <StyledWishlistEmptyOrLoginRequiredBoxWishlist>
            <img src={image} height={"100%"} width={"100%"} style={{objectFit: "cover"}}/>
            <Typography variant={"subtitle1"}>
                {text}
            </Typography>
        </StyledWishlistEmptyOrLoginRequiredBoxWishlist>
    );
}

export function WishlistCardMedia({image, altText}) {
    return (
        <CardMedia
            component="img"
            image={image}
            sx={{height: 150, objectFit: "contain"}}
            alt={altText}
        />
    );
}
