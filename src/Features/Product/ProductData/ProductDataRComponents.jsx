import {Box, IconButton, MobileStepper, Paper, Skeleton, styled, Typography} from "@mui/material";
import {Star} from "@mui/icons-material";
import {green} from "@mui/material/colors";

export const StyledProductImageInfoContainerProductData = styled(Box)(({theme}) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    columnGap: "1rem",
    paddingBottom: "0",

    [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    }
}));

export const StyledImagePaperContainerProductData = styled(Paper)(() => ({
    padding: "1rem",
    position: "relative",
    overflow: "hidden",
    height: "50dvh"
}));

export const StyledImageButtonStepperContainerProductData = styled(Box)(() => ({
    overflow: "hidden",
    position: "relative",
    width: "100%",
    height: "100%"
}));

export const StyledLeftButtonImageProductData = styled(IconButton)(({theme}) => ({
    position: "absolute",
    top: "50%",
    left: "3%",
    transform: "translate(0, -50%)",
    color: "white",
    backgroundColor: theme.palette.grey["700"],
}));

export const StyledRightButtonImageProductData = styled(IconButton)(({theme}) => ({
    position: "absolute",
    top: "50%",
    right: "3%",
    transform: "translate(0, -50%)",
    color: "white",
    backgroundColor: theme.palette.grey["700"],
}));

export const StyledMobileStepperImageProductData = styled(MobileStepper)(() => ({
    position: "absolute",
    bottom: "3%",
    left: "50%",
    transform: "translate(-50%, 0)",
    background: "none"
}));

export const StyledProductInfoParentContainerProductData = styled(Box)(() => ({
    height: "100%"
}));

export const StyledProductInfoContainerProductData = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "space-between",
    height: "100%"
}));

export const StyledRatingReadOnlyElementContainerProductData = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    gap: "0.5rem",
    alignItems: "center"
}));

export const StyledRatingStarAndRatingContainerProductData = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.1rem 0.2rem",
    backgroundColor: green["500"],
    borderRadius: theme.shape.borderRadius,
    color: "white"
}));

export const StyledKeywordsContainerProductData = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "0.5rem",
    padding: "0 1rem"
}));

export const StyledSingleKeywordContainerProductData = styled("ul")(() => ({
    padding: "0.1rem 0.2rem",
}));

export const StyledProductDescriptionProductData = styled(Typography)(({theme}) => ({
    [theme.breakpoints.up("md")]: {
        fontSize: "1rem"
    }
}));


export function FullHeightWidthWaveSkeleton() {
    return (
        <Skeleton animation={"wave"} variant="rectangular" sx={{height: "100%", width: "100%"}}/>
    );
}

export function FullHeightProductInfoWaveSkeleton() {
    return (
        <Box sx={{height: "100%"}}>
            <Skeleton variant="rounded" animation="wave" sx={{height: "100%", minHeight: "2rem"}}/>
        </Box>
    );
}

export function DescriptionLoadingWaveSkeleton() {
    return (
        <Skeleton variant="rounded" animation="wave"/>
    );
}

export function RatingReadOnlyElement({rating, totalRatings}) {
    return (
        <StyledRatingReadOnlyElementContainerProductData>
            <StyledRatingStarAndRatingContainerProductData>
                <Star sx={{color: "yellow"}} fontSize={"small"}/>
                <Typography variant={"caption"}>
                    {rating}
                </Typography>
            </StyledRatingStarAndRatingContainerProductData>
            <Typography variant={"caption"}>
                {totalRatings} ratings
            </Typography>
        </StyledRatingReadOnlyElementContainerProductData>
    );
}

export function ProductKeywords({keywords, itemId}) {
    return (
        <StyledKeywordsContainerProductData>
            {keywords.map((keyword, index) =>
                <StyledSingleKeywordContainerProductData key={`${itemId}-k${index}`}>
                    <li>
                        <Typography variant={"caption"}>{keyword}</Typography>
                    </li>
                </StyledSingleKeywordContainerProductData>)}
        </StyledKeywordsContainerProductData>
    );
}