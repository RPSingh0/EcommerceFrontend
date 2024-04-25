import {Box, styled} from "@mui/material";
import GlobalNavBarContainer from "./GlobalNavBarContainer.jsx";

const StyledParentCategoryBarBox = styled(Box)(({theme}) => ({
    width: "100%",
    backgroundColor: theme.palette.grey["100"],
    overflowX: "auto",
    overflowY: "hidden",
    padding: "0.5rem 1rem",
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
}));

function GlobalNavBar() {
    return (
        <StyledParentCategoryBarBox>
            <GlobalNavBarContainer/>
        </StyledParentCategoryBarBox>
    );
}

export default GlobalNavBar;