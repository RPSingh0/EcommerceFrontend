import {Box, Paper, Skeleton} from "@mui/material";
import {StyledSingleProductInformationTypographyHeadings} from "../../Ui/RStyledComponents.jsx";
import {Link} from "react-router-dom";
import {ArrowForward} from "@mui/icons-material";
import {useSingleProductContext} from "../../../Contexts/SingleProductContext.jsx";
import SimilarProductCard from "./SimilarProductCard.jsx";

function LoadingSimilarProducts() {
    return (
        <Paper sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem 1rem 1rem 1rem",
            gap: "1rem",
            width: "20rem",
            minWidth: "20rem",
            height: "20rem"
        }}>
            <Box sx={{height: "65%"}}>
                <Skeleton animation="wave" variant="rounded" sx={{height: "100%"}}/>
            </Box>
            <Box sx={{height: "35%"}}>
                <Skeleton animation="wave" variant="rounded" sx={{height: "100%"}}/>
            </Box>
        </Paper>
    );
}

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
                {
                    isLoadingSimilarProducts &&
                    [1, 2, 3, 4, 5, 6].map(item => <LoadingSimilarProducts key={item}/>)
                }
                {!isLoadingSimilarProducts && !similarProductsError && similarProductsData.data.products.map(item =>
                    <SimilarProductCard item={item}/>)}
            </Box>
        </Box>
    );
}

export default SimilarProductsInfo;