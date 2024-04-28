import {useQuery} from "@tanstack/react-query";
import {getAllSubCategoryUnderOneParentCategory} from "../../services/parent-category/parentCategoryService.js";
import {Box, CircularProgress, styled, Typography} from "@mui/material";
import {toTitleCase} from "../../utilities/util.jsx";
import {useParams} from "react-router-dom";
import ImageNamePriceSingleSubCategoryByParentCard from "./ImageNamePriceSingleSubCategoryByParentCard.jsx";
import {StyledMainContentDashboard} from "../Ui/RStyledComponents.jsx";

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

    return (
        <>
            {!isLoading && !error &&
                <StyledMainContentDashboard>
                    <Typography variant={"h6"}>
                        All of {toTitleCase(category)}
                    </Typography>
                    <StyledSingleSubCategoryByParentBarBox>
                        {data.data.subCategories.map(category =>
                            <ImageNamePriceSingleSubCategoryByParentCard
                                key={category.name}
                                data={category}/>
                        )}
                    </StyledSingleSubCategoryByParentBarBox>
                </StyledMainContentDashboard>
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

export default SubCategoryByParentContainer;