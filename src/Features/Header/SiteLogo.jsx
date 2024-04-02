import {Typography} from "@mui/material";

function SiteLogo() {
    return (
        <Typography
            variant={"h6"}
            noWrap
            component={"div"}
            sx={{display: {xs: "none", sm: "none", md: "block"}}}
        >
            ECommerce
        </Typography>
    );
}

export default SiteLogo;