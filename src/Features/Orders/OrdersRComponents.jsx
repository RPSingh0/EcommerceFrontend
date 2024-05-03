import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    CircularProgress,
    styled,
    Typography
} from "@mui/material";
import {DeleteOutline, ShoppingCartCheckoutOutlined} from "@mui/icons-material";

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

export const StyledFixedCircularProgressBoxOrders = styled(Box)(() => ({
    position: "fixed",
    top: "50%",
    right: "50%",
    transform: "translate(50%, 50%)"
}));

export function OrdersLoadingCircularProgress() {
    return (
        <StyledFixedCircularProgressBoxOrders>
            <CircularProgress/>
        </StyledFixedCircularProgressBoxOrders>
    );
}

export const StyledOrderCardOrders = styled(Card)(() => ({
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minWidth: "20rem",
    maxWidth: "20rem"
}));

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

export function OrderedItem({item}) {
    return (
        <StyledOrderCardOrders>
            <OrderItemCardMedia image={item.productImage} altText={`${item.name}-cover-image`}/>
            <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                    {item.productName}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {item.quantity} x &#x20B9; {item.productPrice} /-
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant={"outlined"} size="small" startIcon={<ShoppingCartCheckoutOutlined/>} fullWidth>
                    Write a Review
                </Button>
            </CardActions>
        </StyledOrderCardOrders>
    );
}