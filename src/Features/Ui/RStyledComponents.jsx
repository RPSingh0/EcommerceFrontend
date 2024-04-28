import {Box, styled, Typography} from "@mui/material";

export const StyledMainContentDashboard = styled(Box)(({theme}) => ({
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

export const StyledProductsContainer = styled(Box)(({theme}) => ({
    margin: "auto",
    backgroundColor: theme.palette.grey["100"],
    padding: "1.5rem 1rem",
    borderRadius: theme.shape.borderRadius,
    width: "100%",

    [theme.breakpoints.up('md')]: {
        width: "90%"
    },

    "&::-webkit-scrollbar": {
        display: "none"
    },
}));

export const StyledSingleProductContainer = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    margin: "auto",
    backgroundColor: theme.palette.grey["100"],
    padding: "1.5rem 1rem",
    borderRadius: theme.shape.borderRadius,
    maxWidth: "100dvw",

    [theme.breakpoints.up('md')]: {
        width: "90%"
    },

    "&::-webkit-scrollbar": {
        display: "none"
    },
}));

export const StyledSingleProductInformationTypographyHeadings = styled(Typography)(({theme}) => ({
    [theme.breakpoints.up("md")]: {
        fontSize: "1rem"
    }
}));







export const StyledCartContainer = styled(Box)(({theme}) => ({
    margin: "auto",
    backgroundColor: theme.palette.grey["100"],
    padding: "1.5rem 1rem",
    borderRadius: theme.shape.borderRadius,
    display: "grid",
    gridTemplateColumns: "4fr 2fr",
    columnGap: "1rem",

    [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: "1fr 1fr"
    },

    [theme.breakpoints.up('md')]: {
        width: "90%"
    },

    [theme.breakpoints.down('md')]: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    },

    "&::-webkit-scrollbar": {
        display: "none"
    },
}));