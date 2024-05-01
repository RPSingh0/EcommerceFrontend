import {Box} from "@mui/material";
import {useSingleProductContext} from "../../../Contexts/SingleProductContext.jsx";
import ProductReviewCard from "./ProductReviewCard.jsx";
import {
    ProductReviewLoadingElements,
    StyledHeadingProductReview,
    StyledProductReviewContainerProductReview
} from "./ProductReviewRComponents.jsx";

function ProductReviewInfo() {

    const {isLoadingProductReviews, productReviewData, productReviewError} = useSingleProductContext();

    return (
        <Box>
            <StyledHeadingProductReview variant={"subtitle2"}>
                Product Reviews
            </StyledHeadingProductReview>
            <StyledProductReviewContainerProductReview>
                {
                    !isLoadingProductReviews && !productReviewError && productReviewData.data.reviews.map(item =>
                        <ProductReviewCard item={item} key={`review-${item._id}`}/>)
                }
                {isLoadingProductReviews && <ProductReviewLoadingElements/>}
            </StyledProductReviewContainerProductReview>
        </Box>
    );
}

export default ProductReviewInfo;