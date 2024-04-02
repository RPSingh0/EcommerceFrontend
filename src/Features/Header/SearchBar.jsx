import {alpha, Box, InputBase, styled} from "@mui/material";
import {Search} from "@mui/icons-material";

const StyledSearchBox = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: theme.shape.borderRadius,
    padding: "0.4rem 0.8rem",
    gap: "0.2rem"
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: "inherit"
}));

const StyledSearchIconBox = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.1rem 0.2rem"
}))

function SearchBar() {
    return (
        <StyledSearchBox>
            <StyledSearchIconBox>
                <Search/>
            </StyledSearchIconBox>
            <StyledInputBase
                placeholder={"Search..."}
            />
        </StyledSearchBox>
    );
}

export default SearchBar;