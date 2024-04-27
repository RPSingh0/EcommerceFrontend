import SingleProductProductImagesCarousel from "./SingleProductProductImagesCrousal.jsx";
import {StyledSingleProductContainer} from "../Ui/RStyledComponents.jsx";
import SingleProductProductInfo from "./SingleProductProductInfo.jsx";
import {Box, Divider, styled} from "@mui/material";
import ProductDescription from "./ProductDescription.jsx";
import SimilarProductsInfo from "./SimilarProduct/SimilarProductsInfo.jsx";
import {SingleProductContextProvider} from "../../Contexts/SingleProductContext.jsx";
import ProductReviewInfo from "./ProductReview/ProductReviewInfo.jsx";

const StyledSingleProductImageAndInfoContainer = styled(Box)(({theme}) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    columnGap: "1rem",
    paddingBottom: "0",

    [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    }
}))

function SingleProduct() {
    return (
        <SingleProductContextProvider>
            <StyledSingleProductContainer>
                <StyledSingleProductImageAndInfoContainer>
                    <SingleProductProductImagesCarousel/>
                    <SingleProductProductInfo/>
                </StyledSingleProductImageAndInfoContainer>
                <ProductDescription/>
                <Divider/>
                <SimilarProductsInfo/>
                <Divider/>
                <ProductReviewInfo/>
            </StyledSingleProductContainer>
        </SingleProductContextProvider>
    );
}

export default SingleProduct;