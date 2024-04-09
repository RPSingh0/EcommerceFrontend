import Header from "../../Features/Header/Header.jsx";
import {Box, Stack} from "@mui/material";
import GlobalNavBar from "../../Features/GlobalNavBar/GlobalNavBar.jsx";
import {Outlet} from "react-router-dom";

function AppLayout() {
    return (
        <Box>
            <Header/>
            <Stack marginTop={2} gap={2} overflow={"auto"}>
                <GlobalNavBar/>
                <Outlet/>
            </Stack>
        </Box>
    );
}

export default AppLayout;