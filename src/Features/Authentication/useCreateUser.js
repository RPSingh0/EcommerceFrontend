import {useMutation} from "@tanstack/react-query";
import {signupUserService} from "../../services/user/userService.js";
import {useDispatch} from "react-redux";
import {setUserData} from "../../services/user/userSlice.js";
import {setAuthStatus} from "../../services/user/authStatusSlice.js";

export function useCreateUser() {

    const dispatch = useDispatch();

    const {mutate: createUser, isPending: isCreating} = useMutation({
        mutationFn: signupUserService,
        onSuccess: (data) => {
            console.log(data);
            dispatch(setUserData(data.data.user));
            dispatch(setAuthStatus({email: data.data.user.email, token: data.token}));
        },
        onError: (error) => {
            console.log(error);
        }
    });

    return {isCreating, createUser}
}