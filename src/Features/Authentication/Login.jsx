import {Avatar, Button, Typography} from "@mui/material";
import {blue} from "@mui/material/colors";
import {LockOpenOutlined} from "@mui/icons-material";
import {TextFieldWithController} from "../Forms/FormFields.jsx";
import {useForm} from "react-hook-form";
import {StyledAvatarAndDescBox, StyledSignupLoginBox, StyledSignupLoginForm} from "../Ui/RStyledComponents.jsx";
import {NavLink, useNavigate} from "react-router-dom";
import {useLogin} from "./useLogin.js";
import toast from "react-hot-toast";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {isUserLoggedIn} from "../../services/user/userSlice.js";


function Login() {

    const {control, handleSubmit, reset, formState: {errors}} = useForm();
    const isLoggedIn = useSelector(isUserLoggedIn);
    const navigate = useNavigate();
    const {isLoggingIn, loginUser} = useLogin();

    useEffect(function () {
        if (isLoggedIn) {
            navigate("/account", {replace: true});
        }
    }, [isLoggedIn, navigate]);

    async function onSubmit(data) {
        const loggingInToast = toast.loading("Logging In...");
        loginUser({
            email: data.email,
            password: data.password
        }, {
            onSuccess: () => {
                reset();
                toast.success("Logged In");
                navigate("/");
            },
            onSettled: () => {
                toast.dismiss(loggingInToast);
            }
        })
    }

    return (
        <StyledSignupLoginBox>
            <StyledAvatarAndDescBox>
                <Avatar sx={{bgcolor: blue[700]}}>
                    <LockOpenOutlined/>
                </Avatar>
                <Typography variant={"h6"}>
                    Log In
                </Typography>
            </StyledAvatarAndDescBox>
            <StyledSignupLoginForm component={"form"} onSubmit={handleSubmit(onSubmit)}>
                <TextFieldWithController
                    control={control}
                    id={"email"}
                    name={"email"}
                    label={"Email"}
                    type={"email"}
                    defaultValue={""}
                    disabled={isLoggingIn}
                    requiredMessage={"Please provide a user email"}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <TextFieldWithController
                    control={control}
                    id={"password"}
                    name={"password"}
                    label={"Password"}
                    type={"password"}
                    defaultValue={""}
                    disabled={isLoggingIn}
                    requiredMessage={"Please provide a user password"}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
                <Button variant={"contained"} type={"submit"} disabled={isLoggingIn}>
                    Log In
                </Button>
                <NavLink to={"/signup"} style={{textDecoration: "none", textAlign: "end"}}>
                    <Typography variant={"caption"}>
                        Don&apos;t have an account? Sign up here!
                    </Typography>
                </NavLink>
            </StyledSignupLoginForm>
        </StyledSignupLoginBox>
    )
}

export default Login;