import {useDispatch} from "react-redux";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {setUserData} from "../../services/user/userSlice.js";
import {clearWishlistService} from "../../services/wishlist/wishlistService.js";

export function useClearWishlist() {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const {mutate: clearWishlist, isPending: isClearing} = useMutation({
        mutationFn: clearWishlistService,
        onSuccess: (data) => {
            dispatch(setUserData(data.data.user));
            queryClient.invalidateQueries({queryKey: ['wishlist']});
        },
        onError: (error) => {
            console.log(error);
        }
    });

    return {isClearing, clearWishlist}
}