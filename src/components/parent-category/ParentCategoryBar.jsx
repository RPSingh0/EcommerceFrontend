import {Box, styled} from "@mui/material";
import ParentCategoryContainer from "./ParentCategoryContainer.jsx";

const StyledParentCategoryBarBox = styled(Box)(({theme}) => ({
    margin: "auto",
    width: "100%",
    backgroundColor: theme.palette.grey["100"],
    overflowX: "auto",
    overflowY: "hidden",
    padding: "1.5rem 1rem",
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,

    [theme.breakpoints.up('md')]: {
        width: "90%"
    }
}));

function ParentCategoryBar() {
    return (
        <StyledParentCategoryBarBox>
            <ParentCategoryContainer/>
        </StyledParentCategoryBarBox>
    );
}

export default ParentCategoryBar;