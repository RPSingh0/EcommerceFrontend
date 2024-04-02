import {AppBar, Box, Toolbar} from "@mui/material";
import OpenMenu from "./OpenMenu.jsx";
import SiteLogo from "./SiteLogo.jsx";
import SearchBar from "./SearchBar.jsx";
import UserNavData from "./UserNavData.jsx";


function Header() {
    return (
            <AppBar position={"sticky"}>
                <Toolbar sx={{justifyContent: "space-between", gap: "1rem"}}>
                    <OpenMenu/>
                    <SiteLogo/>
                    <SearchBar/>
                    <Box sx={{flexGrow: 1}}></Box>
                    <UserNavData/>
                </Toolbar>
            </AppBar>
    );
}

export default Header;