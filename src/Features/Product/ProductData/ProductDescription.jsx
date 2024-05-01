import {Box, Typography} from "@mui/material";
import {useSingleProductContext} from "../../../Contexts/SingleProductContext.jsx";
import {DescriptionLoadingWaveSkeleton, StyledProductDescriptionProductData} from "./ProductDataRComponents.jsx";

function ProductDescription() {

    const {isLoadingProductDetails, singleProductData, singleProductError} = useSingleProductContext();

    return (
        <Box>
            <StyledProductDescriptionProductData variant={"subtitle2"}>
                Description
            </StyledProductDescriptionProductData>
            {isLoadingProductDetails && <DescriptionLoadingWaveSkeleton/>}
            {
                !isLoadingProductDetails && !singleProductError &&
                <Typography variant={"caption"}>
                    {singleProductData?.data?.product.description}
                </Typography>
            }

        </Box>
    );
}

export default ProductDescription;