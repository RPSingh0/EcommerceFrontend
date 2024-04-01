import {useQuery} from "@tanstack/react-query";
import {getAllSubCategoryUnderAllParentCategory} from "../../services/parent-category/parentCategoryService.js";
import {Box, styled, Typography} from "@mui/material";
import ParentSubCategoryGrid from "./ParentSubCategoryGrid.jsx";
import {toTitleCase} from "../../utilities/util.jsx";

const StyledParentContainerBox = styled(Box)(({theme}) => ({
    margin: "auto",
    width: "100%",
    backgroundColor: theme.palette.grey["100"],
    overflowX: "auto",
    overflowY: "hidden",
    padding: "1.5rem 1rem",
    borderRadius: theme.shape.borderRadius,

    display: "flex",
    flexDirection: "column",
    gap: "1rem",

    [theme.breakpoints.up('md')]: {
        width: "90%"
    },

    "&::-webkit-scrollbar": {
        display: "none"
    },
}))

const StyledParentSubCategoryBarBox = styled(Box)(({theme}) => ({
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

function ParentSubCategoryContainer() {

    const {isLoading, data, error} = useQuery({
        queryKey: ["parentSubCategories"],
        queryFn: getAllSubCategoryUnderAllParentCategory
    });

    console.log(data);

    return (
        <>
            {!isLoading && !error && Object.entries(data).map(([key, value]) =>
                <StyledParentContainerBox key={key}>
                    <Typography variant={"h6"}>
                        Best of {toTitleCase(key)}
                    </Typography>
                    <StyledParentSubCategoryBarBox>
                        <ParentSubCategoryGrid categoryKey={key} categoryValue={value}/>
                    </StyledParentSubCategoryBarBox>
                </StyledParentContainerBox>
            )}
        </>
    );
}

export default ParentSubCategoryContainer;