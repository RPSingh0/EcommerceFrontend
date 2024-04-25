import {useDispatch} from "react-redux";
import {useMutation} from "@tanstack/react-query";
import {setUserData} from "../../services/user/userSlice.js";
import {updateWishlistService} from "../../services/wishlist/wishlistService.js";

export function useUpdateWishlist() {
    const dispatch = useDispatch();

    const {mutate: updateWishlist, isPending: isCreating} = useMutation({
        mutationFn: updateWishlistService,
        onSuccess: (data) => {
            dispatch(setUserData(data.data.user));
        },
        onError: (error) => {
            console.log(error);
        }
    });

    return {isCreating, updateWishlist}
}