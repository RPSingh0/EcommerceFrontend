import {useDispatch} from "react-redux";
import {useMutation} from "@tanstack/react-query";
import {setUserData} from "../../services/user/userSlice.js";
import {updateCartService} from "../../services/cart/cartService.js";

export function useUpdateCart() {
    const dispatch = useDispatch();

    const {mutate: updateCart, isPending: isCreating} = useMutation({
        mutationFn: updateCartService,
        onSuccess: (data) => {
            dispatch(setUserData(data.data.user));
        },
        onError: (error) => {
            console.log(error);
        }
    });

    return {isCreating, updateCart}
}