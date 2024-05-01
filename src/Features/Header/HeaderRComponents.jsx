import {alpha, Box, Button, InputBase, styled, Toolbar, Typography} from "@mui/material";
import {Link, NavLink} from "react-router-dom";

export const StyledToolbarHeader = styled(Toolbar)(() => ({
    justifyContent: "space-between",
    gap: "1rem"
}));

export const StyledCartWishlistHeader = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    gap: "0.4rem",
    alignItems: "center",
    justifyContent: "center"
}));

export const StyledDrawerLinkHeader = styled(Button)(() => ({
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "start",
}));

export const StyledDrawerElementContainerHeader = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "2rem",
    alignItems: "center"
}));

export const StyledDrawerLinkContainerHeader = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%"
}));

export const StyledSearchBoxHeader = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: theme.shape.borderRadius,
    padding: "0.4rem 0.8rem",
    gap: "0.2rem"
}));

export const StyledSearchIconBoxHeader = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.1rem 0.2rem"
}));

export const StyledInputBaseHeader = styled(InputBase)(() => ({
    color: "inherit"
}));

export const StyledUserCartWishlistContainerHeader = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem"
}));

export function CustomDrawerButton({buttonText, linkTo, toggleHeader, clickHandler, children}) {
    return (
        <Link to={linkTo} onClick={() => toggleHeader(false)} style={{textDecoration: "none"}}>
            <StyledDrawerLinkHeader fullWidth onClick={clickHandler ? clickHandler : null}>
                {children}
                <Typography variant={"subtitle1"}>
                    {buttonText}
                </Typography>
            </StyledDrawerLinkHeader>
        </Link>
    );
}

export function DisplayUserName({isLoggedIn, username}) {

    if (isLoggedIn) {
        return (
            <Typography variant={"h6"}>{username}</Typography>
        )
    } else {
        return (
            <Typography variant={"h6"}>Welcome</Typography>
        );
    }
}

export function CustomSiteLogoNavLink({link, children}) {
    return (
        <NavLink to={link} style={{textDecoration: "none", color: "#ffffff"}}>
            {children}
        </NavLink>
    );
}