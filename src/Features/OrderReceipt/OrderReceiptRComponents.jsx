import {Box, CircularProgress, styled, Typography} from "@mui/material";
import {StyledCartEmptyOrLoginRequiredBoxCart, StyledFixedCircularProgressBoxCart} from "../cart/CartRComponents.jsx";
import {green} from "@mui/material/colors";

export const StyledOrderInvoiceContainerOrder = styled(Box)(({theme}) => ({
    width: "50%",
    margin: "auto",
    padding: "2rem",
    backgroundColor: theme.palette.grey.A200,
    position: "relative",

    display: "flex",
    flexDirection: "column",
    gap: "1.4rem",

    [theme.breakpoints.down("sm")]: {
        width: "90%"
    },

    [theme.breakpoints.up("sm")]: {
        width: "70%"
    },

    [theme.breakpoints.up("md")]: {
        width: "60%"
    },

    [theme.breakpoints.up("lg")]: {
        width: "50%"
    }
}));

export const StyledOrderNotFoundOrder = styled(Box)(() => ({
    position: "absolute",
    height: "15rem",
    width: "15rem",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
}));

export const StyledFixedCircularProgressBoxOrder = styled(Box)(() => ({
    position: "fixed",
    top: "50%",
    right: "50%",
    transform: "translate(50%, 50%)"
}));

export const StyledTotalContainerOrder = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1rem"
}));

export const StyledPaidContainer = styled(Box)(({theme}) => ({
    padding: "0.2rem 0.8rem",
    backgroundColor: green["200"],
    maxWidth: "min-content",
    borderRadius: theme.shape.borderRadius
}));

export function OrderNotFound({image, text}) {
    return (
        <StyledOrderNotFoundOrder>
            <img src={image} height={"100%"} width={"100%"} style={{objectFit: "cover"}}/>
            <Typography variant={"subtitle1"} textAlign={"center"}>
                {text}
            </Typography>
        </StyledOrderNotFoundOrder>
    );
}

export function OrderLoadingCircularProgress() {
    return (
        <StyledFixedCircularProgressBoxOrder>
            <CircularProgress/>
        </StyledFixedCircularProgressBoxOrder>
    );
}

export function OrderItem({item}) {
    return (
        <Box sx={{display: "flex", flexDirection: "column", marginBottom: "1rem"}}>
            <Typography variant={"overline"}>
                {item.quantity} x {item.name}
            </Typography>
            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Typography variant={"caption"}>
                    Per: &#x20B9;{item.price}/-
                </Typography>
                <Typography variant={"caption"}>
                    &#x20B9;{item.total}/-
                </Typography>
            </Box>
        </Box>
    );
}