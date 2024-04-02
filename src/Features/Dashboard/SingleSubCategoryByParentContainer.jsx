import {useQuery} from "@tanstack/react-query";
import {getAllSubCategoryUnderOneParentCategory} from "../../services/parent-category/parentCategoryService.js";
import {Box, styled, Typography} from "@mui/material";
import {toTitleCase} from "../../utilities/util.jsx";
import NamePriceImageDashboardCard from "./NamePriceImageDashboardCard.jsx";
import {useParams} from "react-router-dom";
import ImageNamePriceSingleSubCategoryByParentCard from "./ImageNamePriceSingleSubCategoryByParentCard.jsx";

const StyledSingleSubCategoryByParentBox = styled(Box)(({theme}) => ({
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

const StyledSingleSubCategoryByParentBarBox = styled(Box)(({theme}) => ({
    margin: "auto",
    width: "100%",
    backgroundColor: theme.palette.grey["100"],
    overflowX: "auto",
    overflowY: "hidden",
    borderRadius: theme.shape.borderRadius,
    padding: "0.1rem",

    display: "grid",
    columnGap: "1.5rem",
    rowGap: "1.5rem",

    "&::-webkit-scrollbar": {
        display: "none"
    },

    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: "1fr 1fr"
    },

    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: "1fr 1fr 1fr"
    },

    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: "1fr 1fr 1fr"
    },

    [theme.breakpoints.up('xl')]: {
        gridTemplateColumns: "1fr 1fr 1fr 1fr"
    },
}));

function SubCategoryByParentContainer() {

    const {category} = useParams();

    const {isLoading, data, error} = useQuery({
        queryKey: [category],
        queryFn: () => getAllSubCategoryUnderOneParentCategory(category)
    });

    console.log(data);

    return (
        <StyledSingleSubCategoryByParentBox>
            <Typography variant={"h6"}>
                All of {toTitleCase(category)}
            </Typography>
            <StyledSingleSubCategoryByParentBarBox>
                {!isLoading && !error &&
                    data.data.subCategories.map(category =>
                        <ImageNamePriceSingleSubCategoryByParentCard
                            key={category.name}
                            data={category}/>
                    )
                }
            </StyledSingleSubCategoryByParentBarBox>
        </StyledSingleSubCategoryByParentBox>
    );
}

export default SubCategoryByParentContainer;