import {useQuery} from "@tanstack/react-query";
import {getAllSubCategoryUnderAllParentCategory} from "../../services/parent-category/parentCategoryService.js";
import {Box, styled, Typography} from "@mui/material";
import {toTitleCase} from "../../utilities/util.jsx";
import NamePriceImageDashboardCard from "./NamePriceImageDashboardCard.jsx";
import {Outlet} from "react-router-dom";
import {StyledMainContentDashboard} from "../Ui/RStyledComponents.jsx";

const StyledSubCategoryByParentBarBox = styled(Box)(({theme}) => ({
    margin: "auto",
    width: "100%",
    backgroundColor: theme.palette.grey["100"],
    overflowX: "auto",
    overflowY: "hidden",
    borderRadius: theme.shape.borderRadius,
    padding: "0.1rem",

    display: "flex",
    flexDirection: "row",
    gap: "1rem",

    "&::-webkit-scrollbar": {
        display: "none"
    },
}));

function SubCategoryByParentContainer() {

    const {isLoading, data, error} = useQuery({
        queryKey: ["parentSubCategories"],
        queryFn: getAllSubCategoryUnderAllParentCategory
    });

    return (
        <>
            {!isLoading && !error && Object.entries(data).map(([key, value]) =>
                <StyledMainContentDashboard key={key}>
                    <Typography variant={"h6"}>
                        Best of {toTitleCase(key)}
                    </Typography>
                    <StyledSubCategoryByParentBarBox>
                        {
                            value.subCategories.map(category =>
                                <NamePriceImageDashboardCard
                                    key={`${key}-${category.name}`}
                                    parentCategory={key}
                                    data={category}/>
                            )
                        }
                    </StyledSubCategoryByParentBarBox>
                </StyledMainContentDashboard>
            )}
            <Outlet/>
        </>
    );
}

export default SubCategoryByParentContainer;