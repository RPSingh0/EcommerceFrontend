import {useQuery} from "@tanstack/react-query";
import {getAllSubCategoryUnderAllParentCategory} from "../../services/parent-category/parentCategoryService.js";
import {Typography} from "@mui/material";
import {toTitleCase} from "../../utilities/util.jsx";
import BestOfSubCategoryCard from "./BestOfSubCategoryCard.jsx";
import {
    DashboardDataSpinner,
    StyledSubcategoryContainerDashboard,
    StyledBestOfSubcategoryListContainerDashboard
} from "./DashboardRComponents.jsx";

function BestOfSubCategory() {

    const {isLoading, data, error} = useQuery({
        queryKey: ["parentSubCategories"],
        queryFn: getAllSubCategoryUnderAllParentCategory
    });

    return (
        <>
            {isLoading && <DashboardDataSpinner/>}
            {!isLoading && !error && Object.entries(data).map(([key, value]) =>
                <StyledSubcategoryContainerDashboard key={key}>
                    <Typography variant={"h6"}>
                        Best of {toTitleCase(key)}
                    </Typography>
                    <StyledBestOfSubcategoryListContainerDashboard>
                        {
                            value.subCategories.map(category =>
                                <BestOfSubCategoryCard key={`${key}-${category.name}`}
                                                       parentCategory={key}
                                                       data={category}/>)
                        }
                    </StyledBestOfSubcategoryListContainerDashboard>
                </StyledSubcategoryContainerDashboard>
            )}
        </>
    );
}

export default BestOfSubCategory;