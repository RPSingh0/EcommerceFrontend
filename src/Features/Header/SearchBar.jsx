import {Search} from "@mui/icons-material";
import {StyledInputBaseHeader, StyledSearchBoxHeader, StyledSearchIconBoxHeader} from "./HeaderRComponents.jsx";

function SearchBar() {
    return (
        <StyledSearchBoxHeader>
            <StyledSearchIconBoxHeader>
                <Search/>
            </StyledSearchIconBoxHeader>
            <StyledInputBaseHeader
                placeholder={"Search..."}
            />
        </StyledSearchBoxHeader>
    );
}

export default SearchBar;