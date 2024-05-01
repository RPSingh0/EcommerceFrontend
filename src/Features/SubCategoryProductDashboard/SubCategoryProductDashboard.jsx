import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getAllProductsBySubCategory} from "../../services/product/productService.js";
import SubCategoryProductCard from "./SubCategoryProductCard.jsx";
import {
    DataSpinnerSubCategoryDashboard,
    StyledSubCategoryProductCardBox,
    StyledSubCategoryProductsContainer
} from "./SubCategoryProductDashboardRComponents.jsx";

function SubCategoryProductDashboard() {

    const {subCategory} = useParams();

    const {isLoading, data, error} = useQuery({
        queryKey: [subCategory],
        queryFn: () => getAllProductsBySubCategory(subCategory)
    });

    return (
        <>
            {!isLoading && !error &&
                <StyledSubCategoryProductsContainer>
                    <StyledSubCategoryProductCardBox>
                        {data.data.products.map(item => <SubCategoryProductCard item={item}
                                                                                key={`subCategory-${item._id}`}/>)}
                    </StyledSubCategoryProductCardBox>
                </StyledSubCategoryProductsContainer>
            }
            {isLoading && <DataSpinnerSubCategoryDashboard/>}
        </>
    );
}

export default SubCategoryProductDashboard;