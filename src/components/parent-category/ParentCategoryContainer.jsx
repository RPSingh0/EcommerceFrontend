import {useQuery} from "@tanstack/react-query";
import {getAllParentCategory} from "../../services/parent-category/parentCategoryService.js";
import ParentCategory from "./ParentCategory.jsx";
import {Box, Divider, styled} from "@mui/material";

const StyledParentCategoryContainerBox = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: "1rem",
    overflow: "auto",
    "&::-webkit-scrollbar": {
        display: "none"
    },
    "hr:last-of-type": {
        display: "none"
    }
}))

function ParentCategoryContainer() {

    const {isLoading, data, error} = useQuery({
        queryKey: ["parentCategories"],
        queryFn: getAllParentCategory
    })

    return (
        <StyledParentCategoryContainerBox>
            {!isLoading && !error && data.data.parentCategories.map(item =>
                <Box key={item._id} >
                    <ParentCategory category={item.name}/>
                    <Divider orientation={"vertical"} flexItem/>
                </Box>
            )}
        </StyledParentCategoryContainerBox>
    );
}

export default ParentCategoryContainer;