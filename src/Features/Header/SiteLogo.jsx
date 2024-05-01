import {Typography} from "@mui/material";
import {CustomSiteLogoNavLink} from "./HeaderRComponents.jsx";

function SiteLogo() {
    return (
        <Typography variant={"h6"} noWrap component={"div"} sx={{display: {xs: "none", sm: "none", md: "block"}}}>
            <CustomSiteLogoNavLink link={"/home"}>
                ECommerce
            </CustomSiteLogoNavLink>
        </Typography>
    );
}

export default SiteLogo;