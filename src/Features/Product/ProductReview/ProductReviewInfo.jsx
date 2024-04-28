import {Box, Paper, Skeleton} from "@mui/material";
import {StyledSingleProductInformationTypographyHeadings} from "../../Ui/RStyledComponents.jsx";
import {useSingleProductContext} from "../../../Contexts/SingleProductContext.jsx";
import ProductReviewCard from "./ProductReviewCard.jsx";

function ProductReviewInfo() {

    const {isLoadingProductReviews, productReviewData, productReviewError} = useSingleProductContext();


    console.log(productReviewData)

    return (
        <Box>
            <StyledSingleProductInformationTypographyHeadings variant={"subtitle2"}>
                Product Reviews
            </StyledSingleProductInformationTypographyHeadings>
            <Box sx={{
                margin: "auto",
                overflowX: "auto",
                padding: "0.1rem",

                display: "flex",
                flexDirection: "row",
                gap: "1rem",

                "&::-webkit-scrollbar": {
                    display: "none"
                },
            }}>
                {!isLoadingProductReviews && !productReviewError && productReviewData.data.reviews.map(item =>
                    <ProductReviewCard item={item}/>)}
                {
                    isLoadingProductReviews &&
                    [1, 2, 3, 4, 5, 6].map(item =>
                        <Paper key={item} sx={{
                            width: "20rem",
                            minWidth: "20rem",
                            height: "8rem",
                            padding: "1rem",
                            display: "flex",
                            flexDirection: "row",
                            gap: "1rem"
                        }}>
                            <Skeleton variant="circular" width={45} height={45}/>
                            <Box sx={{flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.4rem"}}>
                                <Skeleton sx={{height: "40%"}}/>
                                <Skeleton variant="rounded" animation={"wave"} sx={{height: "60%"}}/>
                            </Box>
                        </Paper>
                    )
                }
            </Box>
        </Box>
    );
}

export default ProductReviewInfo;