import {Box, Button, Divider, Typography} from "@mui/material";
import {NavLink, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getOrderByIdService} from "../../services/order/orderService.js";
import {useSelector} from "react-redux";
import {isUserLoggedIn} from "../../services/user/userSlice.js";
import {getAuthToken} from "../../services/user/authStatusSlice.js";
import {
    OrderItem,
    OrderLoadingCircularProgress,
    OrderNotFound,
    StyledOrderInvoiceContainerOrder,
    StyledPaidContainer,
    StyledTotalContainerOrder
} from "./OrderReceiptRComponents.jsx";

function OrderReceipt() {

    const {orderId} = useParams();
    const isLoggedId = useSelector(isUserLoggedIn);
    const token = useSelector(getAuthToken);

    const {isLoading: isFetchingOrder, data: orderData, error: orderError} = useQuery({
        queryKey: [`order-${orderId}`],
        queryFn: () => getOrderByIdService(orderId, token),
        enabled: isLoggedId
    });

    return (
        <>
            {isLoggedId && !isFetchingOrder && !orderError &&
                <StyledOrderInvoiceContainerOrder>
                    <Box>
                        <Typography variant={"h6"}>
                            Order#: {orderId}
                        </Typography>
                        <StyledPaidContainer>
                            Paid
                        </StyledPaidContainer>
                    </Box>
                    <Box>
                        <Typography variant={"subtitle1"}>
                            Items Purchased
                        </Typography>
                        <Divider/>
                        {orderData.order.map((item, index) => <OrderItem item={item}
                                                                         key={`purchase-item-${index + 1}`}/>)}
                        <Divider/>
                        <StyledTotalContainerOrder>
                            <Typography variant={"subtitle1"}>
                                Total
                            </Typography>
                            <Typography variant={"caption"}>
                                &#x20B9;{orderData.total} /-
                            </Typography>
                        </StyledTotalContainerOrder>
                    </Box>
                    <NavLink to={"/"}>
                        <Button variant={"outlined"} fullWidth>
                            Continue Shopping
                        </Button>
                    </NavLink>
                </StyledOrderInvoiceContainerOrder>
            }
            {
                isLoggedId && !isFetchingOrder && orderError &&
                <OrderNotFound image={"/order/order-not-found.png"} text={"OrderReceipt Not Found"}/>
            }
            {
                isFetchingOrder && <OrderLoadingCircularProgress/>
            }
        </>
    );
}

export default OrderReceipt;