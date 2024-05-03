import {Box} from "@mui/material";
import AccountSecondaryHeader from "./AccountSecondaryHeader.jsx";
import {
    AccountOrderDataCard,
    NoItemContainer,
    OrdersLoadingElements,
    StyledSecondaryContainerAccount
} from "./AccountRComponents.jsx";
import {ShopOutlined} from "@mui/icons-material";
import {useOrderContext} from "../../Contexts/OrderContext.jsx";

function AccountOrderInfo() {

    const {isLoadingOrders, ordersData, ordersError} = useOrderContext();

    return (
        <Box>
            <AccountSecondaryHeader text={"Orders"} linkTo={"/orders"}/>
            <StyledSecondaryContainerAccount>
                {!isLoadingOrders && !ordersError && ordersData.data.orderDetails.map((item, index) =>
                    <AccountOrderDataCard key={`orderlist-item-${index}`} orderId={item.transactionId}
                                          price={item.totalPurchase} quantity={item.totalQuantity}
                                          orderDate={item.purchasedOn}/>
                )}
                {!isLoadingOrders && !ordersError && ordersData.data.orderDetails.length === 0 &&
                    <NoItemContainer
                        cardText={"You don't have any orders with us..."}
                        buttonText={"OrderReceipt Something"}
                        buttonLink={"/home"}
                    >
                        <ShopOutlined/>
                    </NoItemContainer>
                }
                {isLoadingOrders && <OrdersLoadingElements/>}
            </StyledSecondaryContainerAccount>
        </Box>
    );
}

export default AccountOrderInfo;