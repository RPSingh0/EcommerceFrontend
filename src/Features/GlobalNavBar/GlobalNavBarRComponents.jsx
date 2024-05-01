import {Box, Divider, LinearProgress, styled} from "@mui/material";
import {NavLink} from "react-router-dom";

export const StyledParentCategoryNavBarContainerGlobalNavBar = styled(Box)(({theme}) => ({
    width: "100%",
    backgroundColor: theme.palette.grey["100"],
    overflowX: "auto",
    overflowY: "hidden",
    padding: "0.5rem 1rem",
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
}));

export const StyledNavBarElementContainerGlobalNavBar = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: "1rem",
    overflow: "auto",
    "&::-webkit-scrollbar": {
        display: "none"
    },
    "hr:last-of-type": {
        display: "none"
    },

    "& a": {
        color: "#333"
    },

    "& a.active": {
        backgroundColor: "#1976d2",
        borderRadius: "9px",
        color: "#f5f5f5 !important"
    }
}));

export const NavBarElementBoxGlobalNavBar = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.2rem",
}));

export function CustomNavLinkForGlobalNavBar({link, children}) {
    return (
        <NavLink to={link} style={{textDecoration: "none", padding: "0.2rem 0.4rem"}}>
            {children}
        </NavLink>
    );
}

export function FullWidthLinearProgress() {
    return (
        <LinearProgress sx={{width: "100%"}}/>
    );
}

export function VerticalDividerFlex() {
    return (
        <Divider orientation={"vertical"} flexItem/>
    );
}