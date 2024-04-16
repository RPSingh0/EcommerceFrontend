import {AppBar, Box, Toolbar} from "@mui/material";
import OpenMenu from "./OpenMenu.jsx";
import SiteLogo from "./SiteLogo.jsx";
import SearchBar from "./SearchBar.jsx";
import UserNavData from "./UserNavData.jsx";
import MenuDrawer from "./MenuDrawer.jsx";
import {useState} from "react";


function Header() {

    const [isHeaderOpen, setIsHeaderOpen] = useState(false)

    return (
            <AppBar position={"sticky"}>
                <Toolbar sx={{justifyContent: "space-between", gap: "1rem"}}>
                    <OpenMenu toggleHeader={setIsHeaderOpen}/>
                    <SiteLogo/>
                    <SearchBar/>
                    <Box sx={{flexGrow: 1}}></Box>
                    <UserNavData/>
                    <MenuDrawer isOpen={isHeaderOpen} toggleHeader={setIsHeaderOpen}/>
                </Toolbar>
            </AppBar>
    );
}

export default Header;