import {StyledProductsContainer} from "../Ui/RStyledComponents.jsx";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getAllProductsBySubCategory} from "../../services/product/productService.js";
import {Box, CircularProgress, styled} from "@mui/material";
import ProductsBySubCategoryCard from "./ProductsBySubCategoryCard.jsx";

const StyledProductsCardBox = styled(Box)(({theme}) => ({
    display: "grid",
    rowGap: "1rem",
    columnGap: "1rem",

    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: "1fr 1fr",
    },

    [theme.breakpoints.up('lg')]: {
        gridTemplateColumns: "1fr 1fr 1fr",
    },

    [theme.breakpoints.up('xl')]: {
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
}))

function ProductsBySubCategory() {

    const {subCategory} = useParams();

    const {isLoading, data, error} = useQuery({
        queryKey: [subCategory],
        queryFn: () => getAllProductsBySubCategory(subCategory)
    });

    return (
        <>
            {
                !isLoading && !error &&
                <StyledProductsContainer>
                    <StyledProductsCardBox>
                        {data.data.products.map(item => <ProductsBySubCategoryCard item={item} key={item._id}/>)}
                    </StyledProductsCardBox>
                </StyledProductsContainer>
            }
            {
                isLoading &&
                <Box sx={{
                    position: "fixed",
                    top: "50%",
                    right: "50%",
                    transform: "translate(50%, 50%)"
                }}>
                    <CircularProgress/>
                </Box>
            }
        </>
    );
}

export default ProductsBySubCategory;