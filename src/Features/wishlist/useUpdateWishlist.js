import {useDispatch} from "react-redux";
import {useMutation} from "@tanstack/react-query";
import {setUserData} from "../../services/user/userSlice.js";
import {updateWishlistService} from "../../services/wishlist/wishlistService.js";
import toast from "react-hot-toast";

export function useUpdateWishlist() {
    const dispatch = useDispatch();

    const {mutate: updateWishlist, isPending: isCreating} = useMutation({
        mutationFn: updateWishlistService,
        onSettled: (data, error) => {

            if (error) {
                toast.error(error.response.data.message);
            } else {
                dispatch(setUserData(data.data.user));
            }

        }
    });

    return {isCreating, updateWishlist}
}