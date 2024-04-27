import {Box, Divider, styled, Typography} from "@mui/material";
import ProductShipping from "./ProductShipping.jsx";
import BuyNowAddToCart from "./BuyNowAddToCart.jsx";
import {useSingleProductContext} from "../../Contexts/SingleProductContext.jsx";
import {Star} from "@mui/icons-material";
import {green} from "@mui/material/colors";
import {getRoundedValueWithPointFivePrecision} from "../../utilities/utilities.js";

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

const StyledRatingContainer = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.1rem 0.2rem",
    backgroundColor: green["500"],
    borderRadius: theme.shape.borderRadius,
    color: "white"
}));


function RatingContainer({rating, totalRatings}) {
    return (
        <Box sx={{display: "flex", flexDirection: "row", gap: "0.5rem", alignItems: "center"}}>
            <StyledRatingContainer>
                <Star sx={{color: "yellow"}} fontSize={"small"}/>
                <Typography variant={"caption"}>
                    {rating}
                </Typography>
            </StyledRatingContainer>
            <Typography variant={"caption"}>
                ({totalRatings}) ratings
            </Typography>
        </Box>
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
                    <RatingContainer rating={getRoundedValueWithPointFivePrecision(productInfo.averageRating)}
                                     totalRatings={productInfo.numRatings}/>
                    <Typography variant={"h6"}>
                        &#x20B9;{productInfo.price} /-
                    </Typography>

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