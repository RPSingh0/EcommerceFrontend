import {Box, Card, CardContent, CardMedia, Paper, Skeleton, styled, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {green} from "@mui/material/colors";
import {Star} from "@mui/icons-material";

export const StyledHeadingSimilarProduct = styled(Typography)(({theme}) => ({
    [theme.breakpoints.up("md")]: {
        fontSize: "1rem"
    }
}));

export const StyledLoadingPaperSimilarProduct = styled(Paper)(() => ({
    display: "flex",
    flexDirection: "column",
    padding: "1rem 1rem 1rem 1rem",
    gap: "1rem",
    width: "20rem",
    minWidth: "20rem",
    height: "20rem"
}));

export const StyledHeaderBoxSimilarProducts = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
}));

export const StyledSimilarProductsCardListContainerSimilarProducts = styled(Box)(() => ({
    margin: "auto",
    overflowX: "auto",
    padding: "0.1rem",

    display: "flex",
    flexDirection: "row",
    gap: "1rem",

    "&::-webkit-scrollbar": {
        display: "none"
    }
}));

export const StyledSimilarProductCardSimilarProducts = styled(Card)(() => ({
    display: "flex",
    flexDirection: "column",
    padding: "1rem 1rem 0 1rem",
    minWidth: "20rem",
    maxWidth: "20rem"
}));

export const StyledCardContentBoxSimilarProducts = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
}));

export const StyledSimilarProductCardNavLinkSimilarProduct = styled(NavLink)(() => ({
    textDecoration: "none",
    color: "inherit"
}));

export const StyledSimilarProductCardContentSimilarProduct = styled(CardContent)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem"
}));

export const StyledRatingContainerSimilarProducts = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.1rem 0.2rem",
    backgroundColor: green["500"],
    borderRadius: theme.shape.borderRadius,
    color: "white"
}));

export const StyledRatingElementContainerSimilarProducts = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    gap: "0.5rem",
    alignItems: "center"
}));

export function SimilarProductImageLoading() {
    return (
        <Box sx={{height: "65%"}}>
            <Skeleton animation="wave" variant="rounded" sx={{height: "100%"}}/>
        </Box>
    );
}

export function SimilarProductBriefOverviewLoading() {
    return (
        <Box sx={{height: "35%"}}>
            <Skeleton animation="wave" variant="rounded" sx={{height: "100%"}}/>
        </Box>
    );
}

export function LoadingSimilarProducts() {
    return (
        <StyledLoadingPaperSimilarProduct>
            <SimilarProductImageLoading/>
            <SimilarProductBriefOverviewLoading/>
        </StyledLoadingPaperSimilarProduct>
    );
}

export function SimilarProductsLoadingElements() {

    const elements = [1, 2, 3, 4, 5, 6];

    return (
        elements.map(item => <LoadingSimilarProducts key={`similar-${item}`}/>)
    );
}

export function SimilarProductCardMedia({image, alt}) {
    return (
        <CardMedia
            component={"img"}
            sx={{height: 150, objectFit: "contain"}}
            image={image}
            title={alt}
        />
    );
}

export function SimilarProductCardItemPrice({price}) {
    return (
        <Typography variant={"body1"}>
            &#x20B9;{price} /-
        </Typography>
    );
}

export function SimilarProductCardItemName({name}) {
    return (
        <Typography variant="body1" component="div">
            {name}
        </Typography>
    );
}

export function RatingReadOnlyElement({rating, totalRatings}) {
    return (
        <StyledRatingElementContainerSimilarProducts>
            <StyledRatingContainerSimilarProducts>
                <Star sx={{color: "yellow"}} fontSize={"small"}/>
                <Typography variant={"caption"}>
                    {rating}
                </Typography>
            </StyledRatingContainerSimilarProducts>
            <Typography variant={"caption"}>
                {totalRatings} ratings
            </Typography>
        </StyledRatingElementContainerSimilarProducts>
    );
}