import {Box, CircularProgress, styled, Typography} from "@mui/material";

export const StyledCartEmptyOrLoginRequiredBoxCart = styled(Box)(() => ({
    position: "absolute",
    height: "15rem",
    width: "15rem",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
}));

export const StyledFixedCircularProgressBoxCart = styled(Box)(() => ({
    position: "fixed",
    top: "50%",
    right: "50%",
    transform: "translate(50%, 50%)"
}));

export const StyledCartItemBoxCart = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
}));

export const StyledSingleItemContainerCart = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    justifyContent: "space-between",
    padding: "1rem",

    [theme.breakpoints.down("lg")]: {
        flexDirection: "column"
    },

    [theme.breakpoints.between('sm', 'md')]: {
        flexDirection: "row"
    }
}));

export const StyledItemButtonContainerCart = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "space-between",

    [theme.breakpoints.down('lg')]: {
        flexDirection: "row"
    },

    [theme.breakpoints.between('sm', 'md')]: {
        flexDirection: "column"
    }
}));

export const StyledImageNamePriceBoxCart = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    gap: "1rem"
}));

export const StyledCartOverviewContainerCart = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.grey["300"],
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
}));

export const StyledCartOverviewTotalItemsPriceContainerCart = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
}));

export const StyledCartOverviewItemCart = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start"
}));

export function CartEmptyOrLoginRequired({image, text}) {
    return (
        <StyledCartEmptyOrLoginRequiredBoxCart>
            <img src={image} height={"100%"} width={"100%"} style={{objectFit: "cover"}}/>
            <Typography variant={"subtitle1"}>
                {text}
            </Typography>
        </StyledCartEmptyOrLoginRequiredBoxCart>
    );
}

export function CartLoadingCircularProgress() {
    return (
        <StyledFixedCircularProgressBoxCart>
            <CircularProgress/>
        </StyledFixedCircularProgressBoxCart>
    );
}

export function CartItemImageBox({image, altText}) {
    return (
        <Box height={100}>
            <img src={image} alt={`${altText} cover image`} height={"100%"}/>
        </Box>
    );
}

export function CartNamePriceBox({name, price}) {
    return (
        <Box>
            <Typography variant={"h6"}>
                {name}
            </Typography>
            <Typography variant={"subtitle1"}>
                &#x20B9;{price}
            </Typography>
        </Box>
    );
}