import ProductImageCrousal from "./ProductImageCrousal.jsx";
import ProductInfo from "./ProductInfo.jsx";
import {Divider} from "@mui/material";
import ProductDescription from "./ProductDescription.jsx";
import SimilarProductsInfo from "../SimilarProduct/SimilarProductsInfo.jsx";
import {SingleProductContextProvider} from "../../../Contexts/SingleProductContext.jsx";
import ProductReviewInfo from "../ProductReview/ProductReviewInfo.jsx";
import {
    StyledProductContainerProductData,
    StyledProductImageInfoContainerProductData
} from "./ProductDataRComponents.jsx";

function SingleProduct() {
    return (
        <SingleProductContextProvider>
            <StyledProductContainerProductData>
                <StyledProductImageInfoContainerProductData>
                    <ProductImageCrousal/>
                    <ProductInfo/>
                </StyledProductImageInfoContainerProductData>
                <ProductDescription/>
                <Divider/>
                <SimilarProductsInfo/>
                <Divider/>
                <ProductReviewInfo/>
            </StyledProductContainerProductData>
        </SingleProductContextProvider>
    );
}

export default SingleProduct;