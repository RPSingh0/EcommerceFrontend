import {Box} from "@mui/material";
import {Link} from "react-router-dom";
import {ArrowForward} from "@mui/icons-material";
import {useSingleProductContext} from "../../../Contexts/SingleProductContext.jsx";
import SimilarProductCard from "./SimilarProductCard.jsx";
import {
    SimilarProductsLoadingElements,
    StyledHeaderBoxSimilarProducts,
    StyledHeadingSimilarProduct,
    StyledSimilarProductsCardListContainerSimilarProducts
} from "./SimilarProductsRComponents.jsx";

function SimilarProductsInfo() {

    const {isLoadingSimilarProducts, similarProductsData, similarProductsError} = useSingleProductContext();

    return (
        <Box>
            <StyledHeaderBoxSimilarProducts>
                <StyledHeadingSimilarProduct variant={"subtitle2"}>
                    Similar Products
                </StyledHeadingSimilarProduct>
                <Link to={"/all"}>
                    <ArrowForward/>
                </Link>
            </StyledHeaderBoxSimilarProducts>
            <StyledSimilarProductsCardListContainerSimilarProducts>
                {isLoadingSimilarProducts && <SimilarProductsLoadingElements/>}
                {
                    !isLoadingSimilarProducts && !similarProductsError &&
                    similarProductsData.data.products.map(item =>
                        <SimilarProductCard item={item} key={`similar-product-${item._id}`}/>)
                }
            </StyledSimilarProductsCardListContainerSimilarProducts>
        </Box>
    );
}

export default SimilarProductsInfo;