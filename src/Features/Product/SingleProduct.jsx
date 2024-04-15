import SingleProductProductImagesCarousel from "./SingleProductProductImagesCrousal.jsx";
import {StyledSingleProductContainer} from "../Ui/RStyledComponents.jsx";
import SingleProductProductInfo from "./SingleProductProductInfo.jsx";
import {Box, Divider, styled} from "@mui/material";
import ProductDescription from "./ProductDescription.jsx";
import SimilarProductsInfo from "./SimilarProductsInfo.jsx";
import ProductReviews from "./ProductReviews.jsx";
import {SingleProductContextProvider} from "../../Contexts/SingleProductContext.jsx";

const StyledSingleProductImageAndInfoContainer = styled(Box)(({theme}) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    columnGap: "1rem",
    // display: "flex",
    // background: theme.palette.secondary.main,
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
                <ProductReviews/>
            </StyledSingleProductContainer>
        </SingleProductContextProvider>
    );
}

export default SingleProduct;