import {Divider, Typography} from "@mui/material";
import ProductShipping from "./ProductShipping.jsx";
import BuyNowAddToCart from "./BuyNowAddToCart.jsx";
import {useSingleProductContext} from "../../../Contexts/SingleProductContext.jsx";
import {getRoundedValueWithPointFivePrecision} from "../../../utilities/utilities.js";
import {
    FullHeightProductInfoWaveSkeleton,
    ProductKeywords,
    RatingReadOnlyElement,
    StyledProductInfoContainerProductData,
    StyledProductInfoParentContainerProductData
} from "./ProductDataRComponents.jsx";

function ProductInfo() {

    const {isLoadingProductDetails, singleProductData, singleProductError} = useSingleProductContext();
    const productInfo = singleProductData?.data?.product;

    return (
        <StyledProductInfoParentContainerProductData>
            {!isLoadingProductDetails && !singleProductError &&
                <StyledProductInfoContainerProductData>
                    <Typography variant={"h6"}>
                        {productInfo.name}
                    </Typography>
                    <RatingReadOnlyElement rating={getRoundedValueWithPointFivePrecision(productInfo.averageRating)}
                                           totalRatings={productInfo.numRatings}/>
                    <Typography variant={"h6"}>
                        &#x20B9;{productInfo.price} /-
                    </Typography>
                    <ProductKeywords keywords={productInfo.keywords} itemId={productInfo._id}/>
                    <BuyNowAddToCart/>
                    <Divider/>
                    <ProductShipping/>
                    <Divider/>
                </StyledProductInfoContainerProductData>
            }
            {isLoadingProductDetails && <FullHeightProductInfoWaveSkeleton/>}
        </StyledProductInfoParentContainerProductData>
    )
}

export default ProductInfo;