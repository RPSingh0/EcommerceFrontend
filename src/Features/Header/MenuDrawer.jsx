import {Box, Button, Drawer} from "@mui/material";
import HeaderUser from "./HeaderUser.jsx";
import {Link} from "react-router-dom";

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
                    <Link to={"/login"} onClick={() => toggleHeader(false)}>
                        <Button variant={"outlined"}>
                            Login
                        </Button>
                    </Link>
                    <Link to={"/signup"} onClick={() => toggleHeader(false)}>
                        <Button variant={"outlined"}>
                            Signup
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Drawer>
    );
}

export default MenuDrawer;