import {AppBar, Box} from "@mui/material";
import OpenMenu from "./OpenMenu.jsx";
import SiteLogo from "./SiteLogo.jsx";
import UserNavData from "./UserNavData.jsx";
import MenuDrawer from "./MenuDrawer.jsx";
import {useState} from "react";
import GlobalNavBar from "../GlobalNavBar/GlobalNavBar.jsx";
import {StyledToolbarHeader} from "./HeaderRComponents.jsx";


function Header() {

    const [isHeaderOpen, setIsHeaderOpen] = useState(false)

    return (
        <AppBar position={"sticky"}>
            <StyledToolbarHeader>
                <OpenMenu toggleHeader={setIsHeaderOpen}/>
                <SiteLogo/>
                <Box sx={{flexGrow: 1}}></Box>
                <UserNavData/>
                <MenuDrawer isOpen={isHeaderOpen} toggleHeader={setIsHeaderOpen}/>
            </StyledToolbarHeader>
            <GlobalNavBar/>
        </AppBar>
    );
}

export default Header;