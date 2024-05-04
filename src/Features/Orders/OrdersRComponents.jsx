import {Box, Card, CardMedia, CircularProgress, IconButton, Paper, styled, Typography} from "@mui/material";
import {OpenInNewOutlined} from "@mui/icons-material";
import {NavLink} from "react-router-dom";

export const StyledOrdersContainerOrders = styled(Box)(({theme}) => ({
    margin: "auto",
    backgroundColor: theme.palette.grey["100"],
    padding: "1.5rem 1rem",
    borderRadius: theme.shape.borderRadius,
    width: "100%",
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

export const StyledNoOrdersOrLoginRequiredBoxOrders = styled(Box)(() => ({
    position: "absolute",
    height: "15rem",
    width: "15rem",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
}));

export const StyledOrderCardOrders = styled(Card)(() => ({
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minWidth: "20rem",
    maxWidth: "20rem"
}));

export const StyledFixedCircularProgressBoxOrders = styled(Box)(() => ({
    position: "fixed",
    top: "50%",
    right: "50%",
    transform: "translate(50%, 50%)"
}));

export const StyledOrderInfoPaper = styled(Paper)(() => ({
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    gap: "1rem"
}));

export const StyledOrderItemContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
    padding: "1rem 0",
    gap: "1rem"
}));

export function NoOrdersOrLoginRequired({image, text}) {
    return (
        <StyledNoOrdersOrLoginRequiredBoxOrders>
            <img src={image} height={"100%"} width={"100%"} style={{objectFit: "cover"}}/>
            <Typography variant={"subtitle1"}>
                {text}
            </Typography>
        </StyledNoOrdersOrLoginRequiredBoxOrders>
    );
}

export function OrdersLoadingCircularProgress() {
    return (
        <StyledFixedCircularProgressBoxOrders>
            <CircularProgress/>
        </StyledFixedCircularProgressBoxOrders>
    );
}

export function OrderItemCardMedia({image, altText}) {
    return (
        <CardMedia
            component="img"
            image={image}
            sx={{height: 150, objectFit: "contain"}}
            alt={altText}
        />
    );
}

export function LinkToOrderReceipt({link}) {
    return (
        <NavLink to={link}>
            <IconButton>
                <OpenInNewOutlined/>
            </IconButton>
        </NavLink>
    );
}