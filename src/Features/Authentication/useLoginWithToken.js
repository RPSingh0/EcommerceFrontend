import {useMutation} from "@tanstack/react-query";
import {useDispatch} from "react-redux";
import {setUserData} from "../../services/user/userSlice.js";
import {loginUserWithTokenService} from "../../services/user/userService.js";
import {setAuthStatus} from "../../services/user/authStatusSlice.js";
import toast from "react-hot-toast";

export function useLoginWithToken() {

    const dispatch = useDispatch();

    const {mutate: loginUser, isPending: isLoggingIn} = useMutation({
        mutationFn: loginUserWithTokenService,
        onSettled: (data, error) => {
            if (error) {
                toast.error(error.response.data.message);
            } else {
                dispatch(setUserData(data.data.user));
                dispatch(setAuthStatus({email: data.data.user.email, token: data.token}));
            }
        }
    });

    return {isLoggingIn, loginUser}
}