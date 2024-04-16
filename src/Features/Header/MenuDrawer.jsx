import {Box, Button, Drawer} from "@mui/material";
import HeaderUser from "./HeaderUser.jsx";

function MenuDrawer({isOpen, toggleHeader}) {
    return (
        <Drawer
            open={isOpen}
            keepMounted
            onClose={() => toggleHeader(false)}
        >
            <Box sx={{display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem"}}>
                <HeaderUser/>
                <Box sx={{display: "flex", flexDirection: "row", gap: "1rem"}}>
                    <Button variant={"outlined"}>
                        Login
                    </Button>
                    <Button variant={"outlined"}>
                        Signup
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
}

export default MenuDrawer;