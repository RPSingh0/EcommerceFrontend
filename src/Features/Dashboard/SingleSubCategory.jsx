import {useQuery} from "@tanstack/react-query";
import {getAllSubCategoryUnderOneParentCategory} from "../../services/parent-category/parentCategoryService.js";
import {Typography} from "@mui/material";
import {toTitleCase} from "../../utilities/util.jsx";
import {useParams} from "react-router-dom";
import SubCategoryCard from "./SubCategoryCard.jsx";
import {
    DashboardDataSpinner,
    StyledProductsContainer,
    StyledSubcategoryContainerDashboard
} from "./DashboardRComponents.jsx";

function SubCategoryByParentContainer() {

    const {category} = useParams();

    const {isLoading, data, error} = useQuery({
        queryKey: [category],
        queryFn: () => getAllSubCategoryUnderOneParentCategory(category)
    });

    return (
        <>
            {!isLoading && !error &&
                <StyledSubcategoryContainerDashboard>
                    <Typography variant={"h6"}>
                        All of {toTitleCase(category)}
                    </Typography>
                    <StyledProductsContainer>
                        {data.data.subCategories.map(category =>
                            <SubCategoryCard key={category.name} data={category}/>
                        )}
                    </StyledProductsContainer>
                </StyledSubcategoryContainerDashboard>
            }
            {isLoading && <DashboardDataSpinner/>}
        </>
    );
}

export default SubCategoryByParentContainer;