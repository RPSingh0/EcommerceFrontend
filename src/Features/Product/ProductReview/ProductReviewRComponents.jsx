import {Avatar, Box, DialogTitle, Paper, Skeleton, styled, Typography} from "@mui/material";

export const StyledHeadingProductReview = styled(Typography)(({theme}) => ({
    [theme.breakpoints.up("md")]: {
        fontSize: "1rem"
    }
}));

export const StyledProductReviewContainerProductReview = styled(Box)(() => ({
    margin: "auto",
    overflowX: "auto",
    padding: "0.1rem",

    display: "flex",
    flexDirection: "row",
    gap: "1rem",

    "&::-webkit-scrollbar": {
        display: "none"
    },
}));

export const StyledReviewPaperProductReview = styled(Paper)(() => ({
    width: "20rem",
    minWidth: "20rem",
    height: "8rem",
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    gap: "1rem"
}));

export const StyledReviewDataContainerProductReview = styled(Box)(() => ({
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem"
}));

export const StyledReviewContainerPaperProductReview = styled(Paper)(() => ({
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    padding: "1rem",
    minWidth: "20rem",
    maxWidth: "20rem"
}));

export const StyledReviewUserNameAndActionContainerProductReview = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
}));

export const StyledEditReviewDialogTitleProductReview = styled(DialogTitle)(() => ({
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
}));

export const StyledEditReviewFormProductReview = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "0.5rem 0"
}));

export function LoadingUserImageProductReview() {
    return (
        <Skeleton variant="circular" width={45} height={45}/>
    );
}

export function LoadingUserAndRating() {
    return (
        <Skeleton sx={{height: "40%"}}/>
    );
}

export function LoadingReviewText() {
    return (
        <Skeleton variant="rounded" animation={"wave"} sx={{height: "60%"}}/>
    );
}

export function ProductReviewLoadingElements() {

    const elements = [1, 2, 3, 4, 5, 6];

    return (
        elements.map(item =>
            <StyledReviewPaperProductReview key={`review-${item}`}>
                <LoadingUserImageProductReview/>
                <StyledReviewDataContainerProductReview>
                    <LoadingUserAndRating/>
                    <LoadingReviewText/>
                </StyledReviewDataContainerProductReview>
            </StyledReviewPaperProductReview>
        )
    );
}

export function ProductReviewUserAvatar({userImage, altText}) {
    return (
        <Avatar alt={altText} src={userImage ? userImage : '/user/user-not-found.jpg'}/>
    );
}