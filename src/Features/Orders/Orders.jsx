import {Box, Paper, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {isUserLoggedIn} from "../../services/user/userSlice.js";
import {
    NoOrdersOrLoginRequired, OrderedItem,
    OrdersLoadingCircularProgress,
    StyledOrdersContainerOrders
} from "./OrdersRComponents.jsx";
import {CartEmptyOrLoginRequired} from "../cart/CartRComponents.jsx";
import {useOrderContext} from "../../Contexts/OrderContext.jsx";
import {getFormattedDate} from "../../utilities/util.jsx";

function Orders() {

    const isLoggedIn = useSelector(isUserLoggedIn);
    const {isLoadingOrders, ordersData, ordersError} = useOrderContext();

    if (!isLoggedIn) {
        return (
            <NoOrdersOrLoginRequired image={"/auth/login-required.png"}
                                     text={"Please log in to see your orders"}/>
        );
    }

    if (!isLoadingOrders && !ordersError && ordersData.data.orderDetails.length === 0) {
        return (
            <CartEmptyOrLoginRequired image={"/order/order-not-found.png"}
                                      text={"You don't have any orders yet..."}/>
        );
    }

    return (
        <>
            {
                !isLoadingOrders && !ordersError && ordersData.data.orderDetails.map((order, index) =>
                    <StyledOrdersContainerOrders key={`order-group-${index}`}>
                        <Paper sx={{display: "flex", flexDirection: "column", padding: "1rem", gap: "1rem"}}>
                            <Typography variant={"body2"}>
                                Order#: {order.transactionId}
                            </Typography>
                            <Typography variant={"body2"}>
                                Order Date: {getFormattedDate(order.purchasedOn)}
                            </Typography>
                        </Paper>
                        <Box sx={{display: "flex", flexDirection: "row", overflowX: "auto", padding: "1rem 0", gap: "1rem"}}>
                            {order.itemDetails.map((orderItem, subIndex) => <OrderedItem item={orderItem} key={`order-group-${index}-item-${subIndex}`}/>)}
                        </Box>
                    </StyledOrdersContainerOrders>
                )
            }
            {isLoadingOrders && <OrdersLoadingCircularProgress/>}
        </>
    );
}

export default Orders;