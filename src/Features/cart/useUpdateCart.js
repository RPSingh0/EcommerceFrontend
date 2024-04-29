import {useDispatch} from "react-redux";
import {useMutation} from "@tanstack/react-query";
import {setUserData} from "../../services/user/userSlice.js";
import {updateCartService} from "../../services/cart/cartService.js";
import toast from "react-hot-toast";

export function useUpdateCart() {
    const dispatch = useDispatch();

    const {mutate: updateCart, isPending: isCreating} = useMutation({
        mutationFn: updateCartService,
        onSettled: (data, error) => {
            if (error) {
                toast.error(error.response.data.message);
            } else {
                dispatch(setUserData(data.data.user));
            }
        }
    });

    return {isCreating, updateCart}
}