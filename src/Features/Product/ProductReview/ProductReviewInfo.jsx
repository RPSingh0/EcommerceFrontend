import {Box} from "@mui/material";
import {StyledSingleProductInformationTypographyHeadings} from "../../Ui/RStyledComponents.jsx";
import {useSingleProductContext} from "../../../Contexts/SingleProductContext.jsx";
import ProductReviewCard from "./ProductReviewCard.jsx";
import EditProductReview from "./EditProductReview.jsx";

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
            </Box>
        </Box>
    );
}

export default ProductReviewInfo;