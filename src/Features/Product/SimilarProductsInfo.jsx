import {Box} from "@mui/material";
import {StyledSingleProductInformationTypographyHeadings} from "../Ui/RStyledComponents.jsx";
import {Link} from "react-router-dom";
import {ArrowForward} from "@mui/icons-material";
import {useSingleProductContext} from "../../Contexts/SingleProductContext.jsx";
import ImageNamePriceSingleSubCategoryByParentCard from "../Dashboard/ImageNamePriceSingleSubCategoryByParentCard.jsx";
import SimilarProductCard from "./SimilarProductCard.jsx";
import NamePriceImageDashboardCard from "../Dashboard/NamePriceImageDashboardCard.jsx";
import ProductsBySubCategoryCard from "../ProductsDashboard/ProductsBySubCategoryCard.jsx";

function SimilarProductsInfo() {

    const {isLoadingSimilarProducts, similarProductsData, similarProductsError} = useSingleProductContext();

    console.log(similarProductsData)

    return (
        <Box>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <StyledSingleProductInformationTypographyHeadings variant={"subtitle2"}>
                    Similar Products
                </StyledSingleProductInformationTypographyHeadings>
                <Link to={"/all"}>
                    <ArrowForward/>
                </Link>
            </Box>
            <Box sx={{
                margin: "auto",
                overflowX: "auto",
                padding: "0.1rem",

                display: "flex",
                flexDirection: "row",
                gap: "1rem",

                "&::-webkit-scrollbar": {
                    display: "none"
                },
            }}>
                {!isLoadingSimilarProducts && !similarProductsError && similarProductsData.data.products.map(item =>
                    <SimilarProductCard item={item}/>)}
            </Box>
        </Box>
    );
}

export default SimilarProductsInfo;