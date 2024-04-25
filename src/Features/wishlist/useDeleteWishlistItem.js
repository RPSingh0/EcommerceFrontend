import {useMutation, useQueryClient} from "@tanstack/react-query";
import {setUserData} from "../../services/user/userSlice.js";
import {useDispatch} from "react-redux";
import {deleteWishlistItemService} from "../../services/wishlist/wishlistService.js";

export function useDeleteWishlistItem() {

    const dispatch = useDispatch()
    const queryClient = useQueryClient();

    const {mutate: deleteWishlistItem, isPending: isDeletingItem} = useMutation({
        mutationFn: deleteWishlistItemService,
        onSuccess: (data) => {
            dispatch(setUserData(data.data.user));
            queryClient.invalidateQueries({queryKey: ['wishlist']});
        },
        onError: (error) => {
            console.log(error);
        }
    });

    return {isDeletingItem, deleteWishlistItem};
}