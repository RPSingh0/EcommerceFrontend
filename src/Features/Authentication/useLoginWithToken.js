import {useMutation} from "@tanstack/react-query";
import {useDispatch} from "react-redux";
import {setUserData} from "../../services/user/userSlice.js";
import {loginUserWithTokenService} from "../../services/user/userService.js";
import {setAuthStatus} from "../../services/user/authStatusSlice.js";

export function useLoginWithToken() {

    const dispatch = useDispatch();

    const {mutate: loginUser, isPending: isLoggingIn} = useMutation({
        mutationFn: loginUserWithTokenService,
        onSuccess: (data) => {
            console.log(data);
            dispatch(setUserData(data.data.user));
            dispatch(setAuthStatus({email: data.data.user.email, token: data.token}));
        },
        onError: (error) => {
            console.log(error);
        }
    });

    return {isLoggingIn, loginUser}
}