import {useDispatch} from "react-redux";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {clearCartService} from "../../services/cart/cartService.js";
import {setUserData} from "../../services/user/userSlice.js";

export function useClearCart() {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const {mutate: clearCart, isPending: isClearing} = useMutation({
        mutationFn: clearCartService,
        onSuccess: (data) => {
            dispatch(setUserData(data.data.user));
            queryClient.invalidateQueries({queryKey: ['cart']});
        },
        onError: (error) => {
            console.log(error);
        }
    });

    return {isClearing, clearCart}
}