import {useMutation} from "@tanstack/react-query";
import {useDispatch} from "react-redux";
import {setUserData} from "../../services/user/userSlice.js";
import {loginUserService} from "../../services/user/userService.js";
import {useNavigate} from "react-router-dom";
import {setAuthStatus} from "../../services/user/authStatusSlice.js";

export function useLogin() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {mutate: loginUser, isPending: isLoggingIn} = useMutation({
        mutationFn: loginUserService,
        onSuccess: (data) => {
            console.log(data);
            dispatch(setUserData(data.data.user));
            dispatch(setAuthStatus({email: data.data.user.email, token: data.token}));
            navigate("/");
        },
        onError: (error) => {
            console.log(error);
        }
    });

    return {isLoggingIn, loginUser}
}