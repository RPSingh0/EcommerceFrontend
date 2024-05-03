import {createContext, useContext} from "react";
import {useQuery} from "@tanstack/react-query";
import {useSelector} from "react-redux";
import {getAuthToken} from "../services/user/authStatusSlice.js";
import {isUserLoggedIn} from "../services/user/userSlice.js";
import {getAllOrdersService} from "../services/order/orderService.js";

const OrderContext = createContext();

function OrderContextProvider({children}) {

    const token = useSelector(getAuthToken);
    const isLoggedIn = useSelector(isUserLoggedIn);
    const {isLoading: isLoadingOrders, data: ordersData, error: ordersError} = useQuery({
        queryKey: ['order'],
        queryFn: () => getAllOrdersService(token),
        enabled: isLoggedIn
    });

    return (
        <OrderContext.Provider value={{
            isLoadingOrders,
            ordersData,
            ordersError
        }}>
            {children}
        </OrderContext.Provider>
    )
}

function useOrderContext() {
    const context = useContext(OrderContext);

    if (context === undefined) {
        throw new Error("Oops! using context outside the accessible area is not allowed ;)");
    }

    return context;
}

export {OrderContextProvider, useOrderContext};