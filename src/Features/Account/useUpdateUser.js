import {useMutation} from "@tanstack/react-query";
import {updateUserInfoService} from "../../services/user/userService.js";
import {useDispatch} from "react-redux";
import {setUserData} from "../../services/user/userSlice.js";
import {setAuthStatus} from "../../services/user/authStatusSlice.js";

export function useUpdateUser() {

    const dispatch = useDispatch();

    const {mutate: updateUser, isPending: isUpdating} = useMutation({
        mutationFn: updateUserInfoService,
        onSuccess: (data) => {
            console.log(data);
            dispatch(setUserData(data.data.user));
            dispatch(setAuthStatus({email: data.data.user.email, token: data.token}));
        },
        onError: (error) => {
            console.log(error);
        }
    });

    return {isUpdating, updateUser}
}