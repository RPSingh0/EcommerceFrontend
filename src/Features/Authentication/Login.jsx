import {Avatar, Button, Typography} from "@mui/material";
import {blue} from "@mui/material/colors";
import {LockOpenOutlined} from "@mui/icons-material";
import {TextFieldWithController} from "../Forms/FormFields.jsx";
import {useForm} from "react-hook-form";
import {StyledAvatarAndDescBox, StyledSignupLoginBox, StyledSignupLoginForm} from "../Ui/RStyledComponents.jsx";
import {NavLink} from "react-router-dom";
import {useLogin} from "./useLogin.js";


function Login() {

    const {control, handleSubmit, reset, formState: {errors}} = useForm();
    const {isLoggingIn, loginUser} = useLogin();

    async function onSubmit(data) {
        loginUser({
            email: data.email,
            password: data.password
        }, {
            onSuccess: () => {
                reset();
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }

    function onError() {

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
            <StyledSignupLoginForm component={"form"} onSubmit={handleSubmit(onSubmit, onError)}>
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