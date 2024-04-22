import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteCartItemService} from "../../services/cart/cartService.js";
import {setUserData} from "../../services/user/userSlice.js";
import {useDispatch} from "react-redux";

export function useDeleteCartItem() {

    const dispatch = useDispatch()
    const queryClient = useQueryClient();

    const {mutate: deleteCartItem, isPending: isDeletingItem} = useMutation({
        mutationFn: deleteCartItemService,
        onSuccess: (data) => {
            dispatch(setUserData(data.data.user));
            queryClient.invalidateQueries({queryKey: ['cart']});
        },
        onError: (error) => {
            console.log(error);
        }
    });

    return {isDeletingItem, deleteCartItem};
}