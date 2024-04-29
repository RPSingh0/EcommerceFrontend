import {useDispatch} from "react-redux";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {clearCartService} from "../../services/cart/cartService.js";
import {setUserData} from "../../services/user/userSlice.js";
import toast from "react-hot-toast";

export function useClearCart() {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const {mutate: clearCart, isPending: isClearing} = useMutation({
        mutationFn: clearCartService,
        onSettled: (data, error) => {
            if (error) {
                toast.error(error.response.data.message);
            } else {
                dispatch(setUserData(data.data.user));
                queryClient.invalidateQueries({queryKey: ['cart']});
            }
        }
    });

    return {isClearing, clearCart}
}