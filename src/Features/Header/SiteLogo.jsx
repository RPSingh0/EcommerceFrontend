import {Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

function SiteLogo() {
    return (
        <Typography
            variant={"h6"}
            noWrap
            component={"div"}
            sx={{display: {xs: "none", sm: "none", md: "block"}}}
        >
            <NavLink to={"/home"} style={{
                textDecoration: "none",
                color: "#ffffff",
            }}>
                ECommerce
            </NavLink>
        </Typography>
    );
}

export default SiteLogo;