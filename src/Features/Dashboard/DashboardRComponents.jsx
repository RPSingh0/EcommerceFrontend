import {Box, Card, CardMedia, CircularProgress, styled} from "@mui/material";
import {NavLink} from "react-router-dom";

export const StyledFixedDashboardDataSpinnerDashboard = styled(Box)(() => ({
    position: "fixed",
    top: "50%",
    right: "50%",
    transform: "translate(50%, 50%)"
}));

export const StyledSubcategoryContainerDashboard = styled(Box)(({theme}) => ({
    margin: "auto",
    width: "100%",
    backgroundColor: theme.palette.grey["100"],
    overflowX: "auto",
    overflowY: "hidden",
    padding: "1.5rem 1rem",
    borderRadius: theme.shape.borderRadius,

    display: "flex",
    flexDirection: "column",
    gap: "1rem",

    [theme.breakpoints.up('md')]: {
        width: "90%"
    },

    "&::-webkit-scrollbar": {
        display: "none"
    },
}));

export const StyledBestOfSubcategoryListContainerDashboard = styled(Box)(({theme}) => ({
    margin: "auto",
    width: "100%",
    backgroundColor: theme.palette.grey["100"],
    overflowX: "auto",
    overflowY: "hidden",
    borderRadius: theme.shape.borderRadius,
    padding: "0.1rem",

    display: "flex",
    flexDirection: "row",
    gap: "1rem",

    "&::-webkit-scrollbar": {
        display: "none"
    },
}));

export const StyledBestOfSubCategoryCardDashboard = styled(Card)(() => ({
    minWidth: "150px",
    maxWidth: "150px"
}));

export const StyledProductsContainer = styled(Box)(({theme}) => ({
    margin: "auto",
    width: "100%",
    backgroundColor: theme.palette.grey["100"],
    overflowX: "auto",
    overflowY: "hidden",
    borderRadius: theme.shape.borderRadius,
    padding: "0.1rem",

    display: "grid",
    columnGap: "1.5rem",
    rowGap: "1.5rem",

    "&::-webkit-scrollbar": {
        display: "none"
    },

    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: "1fr 1fr"
    },

    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: "1fr 1fr 1fr"
    },

    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: "1fr 1fr 1fr"
    },

    [theme.breakpoints.up('xl')]: {
        gridTemplateColumns: "1fr 1fr 1fr 1fr"
    },
}));

export const StyledSubCategoryCardMediaDashboard = styled(CardMedia)(({theme}) => ({

    [theme.breakpoints.down('sm')]: {
        minHeight: "100px",
        maxHeight: "100px"
    },

    [theme.breakpoints.up('sm')]: {
        minHeight: "120px",
        maxHeight: "120px"
    },

    [theme.breakpoints.up('md')]: {
        minHeight: "150px",
        maxHeight: "150px"
    },

    [theme.breakpoints.up('lg')]: {
        minHeight: "200px",
        maxHeight: "200px"
    },

    [theme.breakpoints.up('xl')]: {
        minHeight: "250px",
        maxHeight: "250px"
    }
}))

export function DashboardDataSpinner() {
    return (
        <StyledFixedDashboardDataSpinnerDashboard>
            <CircularProgress/>
        </StyledFixedDashboardDataSpinnerDashboard>
    );
}

export function CustomNavLink({link, children}) {
    return (
        <NavLink to={link} style={{textDecoration: "none"}}>
            {children}
        </NavLink>
    );
}