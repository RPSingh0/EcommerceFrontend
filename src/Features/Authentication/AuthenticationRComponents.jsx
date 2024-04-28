import {Box, styled} from "@mui/material";

export const StyledSignupLoginBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    width: "100%",
    marginTop: "2rem",
    marginBottom: "2rem"
}));

export const StyledAvatarAndDescBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
}));

export const StyledSignupLoginForm = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",

    [theme.breakpoints.down("sm")]: {
        width: "80%"
    },

    [theme.breakpoints.up("sm")]: {
        width: "60%"
    },

    [theme.breakpoints.up("md")]: {
        width: "50%"
    },

    [theme.breakpoints.up("lg")]: {
        width: "30%"
    }
}));

export const StyledFirstLastNameBoxAccount = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    width: "100%"
}));