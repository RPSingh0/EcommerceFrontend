import {useMutation, useQueryClient} from "@tanstack/react-query";
import {setUserData} from "../../services/user/userSlice.js";
import {useDispatch} from "react-redux";
import {deleteWishlistItemService} from "../../services/wishlist/wishlistService.js";
import toast from "react-hot-toast";

export function useDeleteWishlistItem() {

    const dispatch = useDispatch()
    const queryClient = useQueryClient();

    const {mutate: deleteWishlistItem, isPending: isDeletingItem} = useMutation({
        mutationFn: deleteWishlistItemService,
        onSettled: (data, error) => {

            if (error) {
                toast.error(error.response.data.message);
            } else {
                dispatch(setUserData(data.data.user));
                queryClient.invalidateQueries({queryKey: ['wishlist']});
            }
        }
    });

    return {isDeletingItem, deleteWishlistItem};
}