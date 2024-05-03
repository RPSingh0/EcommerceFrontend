import {useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {purchaseCartService} from "../../services/order/orderService.js";

export function usePurchaseCart() {

    const {mutate: purchaseCart, isPending: isPurchasing} = useMutation({
        mutationFn: purchaseCartService,
        onSettled: (data, error) => {
            if (error) {
                toast.error(error.response.data.message);
            }
        }
    });

    return {purchaseCart, isPurchasing}
}