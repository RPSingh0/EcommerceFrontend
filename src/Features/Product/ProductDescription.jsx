import {Box, Typography} from "@mui/material";
import {useSingleProductContext} from "../../Contexts/SingleProductContext.jsx";
import {StyledSingleProductInformationTypographyHeadings} from "../Ui/RStyledComponents.jsx";

function ProductDescription() {

    const {isLoading, data, error} = useSingleProductContext();
    const productDescription = data?.data?.product.description;

    return (
        <Box>
            <StyledSingleProductInformationTypographyHeadings variant={"subtitle2"}>
                Description
            </StyledSingleProductInformationTypographyHeadings>
            <Typography variant={"caption"}>
                {productDescription}
            </Typography>
        </Box>
    );
}

export default ProductDescription;