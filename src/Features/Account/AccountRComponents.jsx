import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    DialogTitle,
    IconButton,
    Paper,
    Skeleton,
    styled,
    Typography
} from "@mui/material";
import {NavLink} from "react-router-dom";
import {getFormattedDate} from "../../utilities/util.jsx";

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

export const StyledLoadingPaperAccount = styled(Paper)(() => ({
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    gap: "1rem",
    width: "15rem",
    minWidth: "15rem",
    height: "15rem"
}));

export const StyledNoItemPaperContainerAccount = styled(Paper)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem",
    minWidth: "20rem",
    maxWidth: "20rem"
}));

export const StyledNoItemContainerAccount = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    gap: "1rem"
}));

export const StyledLoadingOrderPaperAccount = styled(Paper)(() => ({
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    gap: "1rem",
    width: "15rem",
    minWidth: "15rem",
    height: "10rem"
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

export function AccountOrderDataCard({orderId, price, quantity, orderDate}) {
    return (
        <Card sx={{minWidth: 250, maxWidth: 250, padding: "0.2rem"}}>
            <CardContent>
                <Typography gutterBottom variant="subtitle2" component="div">
                    Order#: {orderId}
                </Typography>
                <Typography gutterBottom variant="caption" component="div">
                    Total price:  &#x20B9;{price}/-
                </Typography>
                <Typography gutterBottom variant="caption" component="div">
                    Total Items: {quantity}
                </Typography>
                <Typography gutterBottom variant="caption" component="div">
                    Purchased On: {getFormattedDate(orderDate)}
                </Typography>
            </CardContent>
        </Card>
    );
}

export function NoItemContainer({cardText, buttonLink, buttonText, children}) {
    return (
        <StyledNoItemPaperContainerAccount>
            <StyledNoItemContainerAccount>
                {children}
                <Typography variant={"body1"}>
                    {cardText}
                </Typography>
            </StyledNoItemContainerAccount>
            <NavLink to={buttonLink}>
                <Button variant={"outlined"} fullWidth>
                    {buttonText}
                </Button>
            </NavLink>
        </StyledNoItemPaperContainerAccount>
    );
}

export function ProductImageLoading() {
    return (
        <Box sx={{height: "65%"}}>
            <Skeleton animation="wave" variant="rounded" sx={{height: "100%"}}/>
        </Box>
    );
}

export function ProductOverviewLoading() {
    return (
        <Box sx={{height: "35%"}}>
            <Skeleton animation="wave" variant="rounded" sx={{height: "100%"}}/>
        </Box>
    );
}

export function LoadingProducts() {
    return (
        <StyledLoadingPaperAccount>
            <ProductImageLoading/>
            <ProductOverviewLoading/>
        </StyledLoadingPaperAccount>
    );
}

export function ProductsLoadingElements() {

    const elements = [1, 2, 3, 4, 5, 6];

    return (
        elements.map(item => <LoadingProducts key={`dummy-${item}`}/>)
    );
}

export function OrderDataLoading() {
    return (
        <Box sx={{height: "100%"}}>
            <Skeleton animation="wave" variant="rounded" sx={{height: "100%"}}/>
        </Box>
    );
}

export function LoadingOrders() {
    return (
        <StyledLoadingOrderPaperAccount>
            <OrderDataLoading/>
        </StyledLoadingOrderPaperAccount>
    );
}

export function OrdersLoadingElements() {

    const elements = [1, 2, 3, 4, 5, 6];

    return (
        elements.map(item => <LoadingOrders key={`dummy-${item}`}/>)
    );
}