import {Avatar, Box, Card, CardContent, CardMedia, DialogTitle, IconButton, styled, Typography} from "@mui/material";

export const StyledAccountDataContainerAccount = styled(Box)(({theme}) => ({
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

export const StyledFlexColumnOneGapBoxAccount = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
}));

export const StyledUserInfoAccount = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "row",
    gap: "1rem",

    [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
        alignItems: "center",
    }
}));

export const StyledSecondaryContainerAccount = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    overflow: "auto",
    padding: "1rem 1rem 1rem 0",
    "&::-webkit-scrollbar": {
        display: "none"
    }
}));

export const StyledSecondaryContainerHeaderAccount = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
}));

export const StyledDialogTitleAccount = styled(DialogTitle)(() => ({
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
}));

export const StyledEditUserFormAccount = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "0.5rem 0"
}));

export const StyledFirstLastNameBoxAccount = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    width: "100%"
}));

export const StyledUserAvatarAccount = styled(Avatar)(({theme}) => ({
    objectFit: "contain",
    width: 250,
    height: 250,

    [theme.breakpoints.down('sm')]: {
        height: 150,
        width: 150
    }
}));

export const StyledEditIconButtonAccount = styled(IconButton)(() => ({
    position: "absolute",
    zIndex: 1000,
    color: "white",
    right: "0"
}));

export function AccountSecondaryDataCard({cardImage, name}) {
    return (
        <Card sx={{minWidth: 250, maxWidth: 250, padding: "1rem"}}>
            <CardMedia
                component="img"
                sx={{height: 150, objectFit: "contain"}}
                image={cardImage}
            />
            <CardContent>
                <Typography gutterBottom variant="subtitle2" component="div">
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
}