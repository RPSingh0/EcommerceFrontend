import {Box, styled} from "@mui/material";

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

    // display: "grid",
    // gridTemplateColumns: "4.5fr 1.5fr",
    // columnGap: "1rem",

    [theme.breakpoints.up('md')]: {
        width: "90%"
    },

    "&::-webkit-scrollbar": {
        display: "none"
    },
}));