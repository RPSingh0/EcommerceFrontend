import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteCartItemService} from "../../services/cart/cartService.js";
import {setUserData} from "../../services/user/userSlice.js";
import {useDispatch} from "react-redux";
import toast from "react-hot-toast";

export function useDeleteCartItem() {

    const dispatch = useDispatch()
    const queryClient = useQueryClient();

    const {mutate: deleteCartItem, isPending: isDeletingItem} = useMutation({
        mutationFn: deleteCartItemService,
        onSettled: (data, error) => {
            if (error) {
                toast.error(error.response.data.message);
            } else {
                dispatch(setUserData(data.data.user));
                queryClient.invalidateQueries({queryKey: ['cart']});
            }
        }
    });

    return {isDeletingItem, deleteCartItem};
}