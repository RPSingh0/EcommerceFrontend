import Header from "../header/Header.jsx";
import {Box, Stack} from "@mui/material";
import ParentCategoryBar from "../parent-category/ParentCategoryBar.jsx";
import ParentSubCategoryContainer from "../parent-sub-category-accords/ParentSubCategoryContainer.jsx";
import {Outlet} from "react-router-dom";

function AppLayout() {
    return (
        <Box>
            <Header/>
            <Stack marginTop={2} gap={2} overflow={"auto"}>
                <ParentCategoryBar/>
                <Outlet/>
            </Stack>
        </Box>
    );
}

export default AppLayout;