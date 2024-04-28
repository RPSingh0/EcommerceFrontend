import {useMutation} from "@tanstack/react-query";
import {signupUserService} from "../../services/user/userService.js";
import {useDispatch} from "react-redux";
import {setUserData} from "../../services/user/userSlice.js";
import {setAuthStatus} from "../../services/user/authStatusSlice.js";
import toast from "react-hot-toast";

export function useCreateUser() {

    const dispatch = useDispatch();

    const {mutate: createUser, isPending: isCreating} = useMutation({
        mutationFn: signupUserService,
        onSettled: (data, error) => {
            if (error) {
                toast.error(error.response.data.message);
            } else {
                dispatch(setUserData(data.data.user));
                dispatch(setAuthStatus({email: data.data.user.email, token: data.token}));
            }
        }
    });

    return {isCreating, createUser}
}