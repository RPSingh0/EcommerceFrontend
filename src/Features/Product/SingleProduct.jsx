import SingleProductProductImagesCarousel from "./SingleProductProductImagesCrousal.jsx";
import {StyledSingleProductContainer} from "../Ui/RStyledComponents.jsx";
import SingleProductProductInfo from "./SingleProductProductInfo.jsx";
import {Box, Divider, styled} from "@mui/material";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getProductByProductId} from "../../services/product/productService.js";

const StyledSingleProductImageAndInfoContainer = styled(Box)(({theme}) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    columnGap: "1rem",
    padding: "1rem",

    [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    }
}))

function SingleProduct() {

    const {productId} = useParams();

    const {isLoading, data, error} = useQuery({
        queryKey: [`product-${productId}`],
        queryFn: () => getProductByProductId(productId)
    });

    return (
        <StyledSingleProductContainer>
            <StyledSingleProductImageAndInfoContainer>
                {!isLoading && !error &&
                    <>
                        <SingleProductProductImagesCarousel name={data.data.name}
                                                            imagesList={data.data.product.productImages}/>
                        <SingleProductProductInfo productInfo={data.data.product}/>
                    </>
                }
            </StyledSingleProductImageAndInfoContainer>
            <Divider/>
        </StyledSingleProductContainer>
    );
}

export default SingleProduct;