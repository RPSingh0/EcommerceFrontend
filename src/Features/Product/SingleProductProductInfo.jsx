import {Box, Divider, Rating, styled, Tooltip, Typography, Zoom} from "@mui/material";
import ProductShipping from "./ProductShipping.jsx";
import BuyNowAddToCart from "./BuyNowAddToCart.jsx";
import {useSingleProductContext} from "../../Contexts/SingleProductContext.jsx";

const StyledKeywordsBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "0.5rem",
    padding: "0 1rem"
}));

const StyledSingleKeywordContainer = styled("ul")(() => ({
    padding: "0.1rem 0.2rem",
}));

function ProductBySubCategoryCardRating() {

    const rating = Math.round(5 * Math.random());

    return (
        <Tooltip TransitionComponent={Zoom} title={`Overall: ${rating} / 5`}>
            <Box sx={{display: "flex"}}>
                <Rating name="read-only" value={rating} precision={0.5}
                        readOnly/>
            </Box>
        </Tooltip>
    );
}

function ProductBySubCategoryCardKeywords({keywords, itemId}) {
    return (
        <StyledKeywordsBox>
            {keywords.map((keyword, index) =>
                <StyledSingleKeywordContainer key={`${itemId}-k${index}`}>
                    <li>
                        <Typography variant={"caption"}>{keyword}</Typography>
                    </li>
                </StyledSingleKeywordContainer>)}
        </StyledKeywordsBox>
    );
}

function SingleProductProductInfo() {

    const {isLoadingProductDetails, singleProductData, singleProductError} = useSingleProductContext();
    const productInfo = singleProductData?.data?.product;

    return (
        <Box sx={{height: "100%"}}>
            {!isLoadingProductDetails && !singleProductError &&
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                justifyContent: "space-between",
                height: "100%"
            }}>
                <Typography variant={"h6"}>
                    {productInfo.name}
                </Typography>
                <Typography variant={"subtitle1"}>
                    &#x20B9;{productInfo.price} /-
                </Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "1rem"
                }}>
                    <ProductBySubCategoryCardRating/>
                    <Typography variant={"body2"}>
                        23,453 ratings
                    </Typography>
                </Box>
                <ProductBySubCategoryCardKeywords keywords={productInfo.keywords} itemId={productInfo._id}/>
                <BuyNowAddToCart/>
                <Divider/>
                <ProductShipping/>
                <Divider/>
            </Box>
            }
        </Box>
    )
}

export default SingleProductProductInfo;