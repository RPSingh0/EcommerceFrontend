import {Box, Skeleton, Typography} from "@mui/material";
import {useSingleProductContext} from "../../Contexts/SingleProductContext.jsx";
import {StyledSingleProductInformationTypographyHeadings} from "../Ui/RStyledComponents.jsx";

function ProductDescription() {

    const {isLoadingProductDetails, singleProductData, singleProductError} = useSingleProductContext();

    return (
        <Box>
            <StyledSingleProductInformationTypographyHeadings variant={"subtitle2"}>
                Description
            </StyledSingleProductInformationTypographyHeadings>
            {
                isLoadingProductDetails && <Skeleton variant="rounded" animation="wave"/>
            }
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